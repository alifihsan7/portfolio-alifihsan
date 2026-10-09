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


/* Work rows: a preview follows the pointer */
const peek = $<HTMLElement>(".peek");
if (peek && finePointer && !reduced && matchMedia("(min-width: 48rem)").matches) {
  const pimg = $<HTMLImageElement>("img", peek)!;
  let tx = 0, ty = 0, x = 0, y = 0, active = false, raf = 0;
  const loop = () => {
    x += (tx - x) * 0.16;
    y += (ty - y) * 0.16;
    const w = peek.offsetWidth, h = peek.offsetHeight;
    const left = tx > innerWidth * 0.6 ? x - w - 28 : x + 28;
    const tilt = Math.max(-7, Math.min(7, (tx - x) * 0.06));
    peek.style.transform = `translate3d(${left.toFixed(1)}px, ${(y - h / 2).toFixed(1)}px, 0) rotate(${tilt.toFixed(2)}deg)`;
    raf = active || Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5 ? requestAnimationFrame(loop) : 0;
  };
  $$<HTMLElement>(".row[data-peek]").forEach((row) => {
    row.addEventListener("pointerenter", (e) => {
      pimg.src = row.dataset.peek || "";
      if (!active) { x = tx = e.clientX; y = ty = e.clientY; }
      active = true;
      peek.classList.add("on");
      if (!raf) raf = requestAnimationFrame(loop);
    });
    row.addEventListener("pointermove", (e) => { tx = e.clientX; ty = e.clientY; });
    row.addEventListener("pointerleave", () => { active = false; peek.classList.remove("on"); });
  });
}

/* Coordinate readout, like a design tool */
const readout = $<HTMLElement>(".readout");
if (readout && finePointer) {
  const pad = (n: number) => String(Math.max(0, Math.round(n))).padStart(4, "0");
  addEventListener("pointermove", (e) => { readout.textContent = `X ${pad(e.pageX)} · Y ${pad(e.pageY)}`; }, { passive: true });
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
const chips = $<HTMLButtonElement>(".chip[data-c]");
chips.forEach((chip) => chip.addEventListener("click", () => {
  chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
  const cat = chip.dataset.c;
  $$<HTMLElement>(".row[data-cats]").forEach((card) => {
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
$<HTMLElement>(".lane").forEach((lane) => lane.addEventListener("click", () => {
  const org = document.getElementById("org-" + lane.dataset.org);
  if (org instanceof HTMLDetailsElement) org.open = true;
  org?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
}));

/* Experience: expand or collapse every organization */
const orgs = $<HTMLDetailsElement>("details.org");
const allBtn = $<HTMLButtonElement>("[data-org-all]");
const syncAll = () => {
  if (!allBtn) return;
  const everyOpen = orgs.every((o) => o.open);
  allBtn.textContent = everyOpen ? "Collapse all" : "Expand all";
  allBtn.setAttribute("aria-pressed", String(everyOpen));
};
allBtn?.addEventListener("click", () => {
  const open = !orgs.every((o) => o.open);
  orgs.forEach((o) => { o.open = open; });
  syncAll();
});
orgs.forEach((o) => o.addEventListener("toggle", syncAll));
syncAll();

/* Hero showcase: the front screen goes to the back every few seconds */
const showcase = $<HTMLElement>("[data-showcase]");
if (showcase) {
  const cards = $$<HTMLAnchorElement>(".s", showcase);
  const dots = $$<HTMLElement>(".dots i", showcase);
  const label = $<HTMLElement>("[data-showcase-name]", showcase);
  const n = cards.length;
  let cur = 0, timer = 0;
  const caption = (i: number) => { if (label) label.textContent = String(i + 1).padStart(2, "0") + " · " + (cards[i].dataset.name || ""); };
  const show = (to: number) => {
    cur = (to + n) % n;
    cards.forEach((a, i) => {
      const pos = (i - cur + n) % n;
      a.style.setProperty("--pos", String(Math.min(pos, 3)));
      a.tabIndex = pos === 0 ? 0 : -1;
    });
    dots.forEach((d, i) => d.classList.toggle("on", i === cur));
    caption(cur);
  };
  const play = () => { if (!reduced && n > 1) timer = window.setInterval(() => show(cur + 1), 4200); };
  const stop = () => window.clearInterval(timer);
  play();
  showcase.addEventListener("pointerenter", stop);
  showcase.addEventListener("pointerleave", () => { stop(); play(); caption(cur); });
  showcase.addEventListener("focusin", stop);
  showcase.addEventListener("focusout", () => { stop(); play(); });
  cards.forEach((a, i) => a.addEventListener("pointerenter", () => caption(i)));
}

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
