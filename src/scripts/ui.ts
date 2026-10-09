/* Progressive enhancement: the site reads fine without any of this. */
const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel));

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

/* Theme toggle (per-viewer convenience) */
$("#theme-toggle")?.addEventListener("click", () => {
  const root = document.documentElement;
  const attr = root.getAttribute("data-theme");
  const current = attr || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch { /* storage may be blocked */ }
});

/* Reading progress bar */
const progress = $(".progress");
const onScroll = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress?.style.setProperty("--p", max > 0 ? String(Math.min(1, scrollY / max)) : "0");
};
addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* Scroll reveal, with a count-up for numeric stats */
const countUp = (el: HTMLElement) => {
  const target = Number(el.dataset.count);
  if (reduced || !Number.isFinite(target)) return;
  const start = performance.now();
  const dur = 1100;
  const tick = (t: number) => {
    const k = Math.min(1, (t - start) / dur);
    el.textContent = String(Math.round(target * (1 - Math.pow(1 - k, 3))));
    if (k < 1) requestAnimationFrame(tick);
  };
  el.textContent = "0";
  requestAnimationFrame(tick);
};
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    const el = e.target as HTMLElement;
    el.classList.add("is-in");
    setTimeout(() => el.classList.add("settled"), 1400);
    $$<HTMLElement>("[data-count]", el).forEach(countUp);
    if (el.matches("[data-count]")) countUp(el);
    io.unobserve(el);
  }
}, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
$$(".reveal, .chart").forEach((el) => io.observe(el));

/* Cursor spotlight (fine pointers only) */
const spot = $(".spot");
if (spot && finePointer && !reduced) {
  addEventListener("pointermove", (e) => {
    spot.style.setProperty("--sx", e.clientX + "px");
    spot.style.setProperty("--sy", e.clientY + "px");
    spot.classList.add("on");
  }, { passive: true });
  document.documentElement.addEventListener("pointerleave", () => spot.classList.remove("on"));
}

/* Card glow and image parallax */
if (finePointer && !reduced) {
  $$<HTMLElement>(".card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      card.style.setProperty("--mx", x * 100 + "%");
      card.style.setProperty("--my", y * 100 + "%");
      card.style.setProperty("--px", String(x - 0.5));
      card.style.setProperty("--py", String(y - 0.5));
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--px", "0");
      card.style.setProperty("--py", "0");
    });
  });
}

/* Hero role text: types out the focus areas, then loops */
const role = $<HTMLElement>("[data-typed]");
if (role) {
  const words = (role.dataset.typed || "").split("|").filter(Boolean);
  const out = $<HTMLElement>(".t", role);
  if (out && words.length && !reduced) {
    let w = 0, i = 0, del = false;
    const step = () => {
      const word = words[w];
      i += del ? -1 : 1;
      out.textContent = word.slice(0, i);
      let wait = del ? 35 : 75;
      if (!del && i === word.length) { del = true; wait = 1600; }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; wait = 350; }
      setTimeout(step, wait);
    };
    step();
  }
}

/* Active nav link while scrolling the home page */
const navLinks = $$<HTMLAnchorElement>("[data-nav]");
const sections = ["home", "work", "experience", "about", "contact"]
  .map((id) => document.getElementById(id))
  .filter((el): el is HTMLElement => !!el);
if (location.pathname === "/" && sections.length) {
  const nav = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      navLinks.forEach((a) => {
        if (a.dataset.nav === e.target.id) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    }
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => nav.observe(s));
}

/* Work filters (rendered only when there are enough projects) */
const chips = $$<HTMLButtonElement>(".chip");
chips.forEach((chip) => chip.addEventListener("click", () => {
  chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
  const cat = chip.dataset.c;
  $$<HTMLElement>(".card[data-cats]").forEach((card) => {
    const cats = (card.dataset.cats || "").split("|");
    card.hidden = cat !== "All" && !cats.includes(cat || "");
  });
}));

/* Timeline lanes and experience rows highlight each other */
const setOrg = (id: string, on: boolean) => {
  $$(`[data-org="${id}"]`).forEach((el) => el.classList.toggle("hl", on));
};
$$<HTMLElement>(".lane, .org").forEach((el) => {
  const id = el.dataset.org || "";
  el.addEventListener("pointerenter", () => setOrg(id, true));
  el.addEventListener("pointerleave", () => setOrg(id, false));
  el.addEventListener("focusin", () => setOrg(id, true));
  el.addEventListener("focusout", () => setOrg(id, false));
});
$$<HTMLElement>(".lane").forEach((lane) => lane.addEventListener("click", () => {
  document.getElementById("org-" + lane.dataset.org)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
}));

/* Lightbox for project galleries */
const dlg = $<HTMLDialogElement>("#lightbox");
const zooms = $$<HTMLButtonElement>("[data-zoom]");
if (dlg && zooms.length) {
  const img = $<HTMLImageElement>("img", dlg)!;
  const cap = $<HTMLElement>(".lb-cap", dlg)!;
  let idx = 0;
  const show = (i: number) => {
    idx = (i + zooms.length) % zooms.length;
    const src = $<HTMLImageElement>("img", zooms[idx])!;
    img.src = src.currentSrc || src.src;
    img.alt = src.alt;
    cap.textContent = zooms[idx].dataset.caption || "";
  };
  zooms.forEach((z, i) => z.addEventListener("click", () => { show(i); dlg.showModal(); }));
  $(".x", dlg)?.addEventListener("click", () => dlg.close());
  $(".p", dlg)?.addEventListener("click", () => show(idx - 1));
  $(".n", dlg)?.addEventListener("click", () => show(idx + 1));
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
  });
}
