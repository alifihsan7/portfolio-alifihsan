/* UI strings and locale helpers. Content (projects, experience) is translated in src/data/*.id.json. */
export const locales = ["en", "id"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "en";

/** Prefix an internal path with the locale ("/work/x" -> "/id/work/x" for Indonesian). */
export const href = (lang: Lang, path = "/") => (lang === defaultLang ? path : "/id" + (path === "/" ? "/" : path));

/** Path of the same page in the other language, given the current pathname. */
export const swapPath = (pathname: string, to: Lang) => {
  const bare = pathname.replace(/^\/id(?=\/|$)/, "") || "/";
  return href(to, bare);
};

export const dict = {
  en: {
    htmlLang: "en",
    siteTitle: "Alif Ihsan | UI/UX Designer & Informatics Student",
    siteDescription:
      "Portfolio of Alif Ihsan, an Informatics student at Telkom University focused on UI/UX design and currently learning data and AI.",
    ogAlt: "Alif Ihsan, UI/UX design and learning data and AI",
    skip: "Skip to content",
    homeAria: "Alif Ihsan, home",
    navAria: "Main",
    nav: { home: "Home", work: "Work", experience: "Experience", about: "About", contact: "Contact" },
    themeAria: "Switch colour theme",
    langAria: "Bahasa Indonesia",
    langShort: "ID",
    location: "Bandung, Indonesia",
    toTop: "Back to top ↑",
    lightbox: { label: "Image viewer", close: "Close", prev: "Previous image", next: "Next image" },

    eyebrow: "Portfolio · 2026",
    hi: "Hi, I’m",
    typed: ["UI/UX design", "Learning data and AI"],
    lede: "Informatics student at Telkom University. I design interfaces in Figma and build software in TypeScript and Python. Right now I am learning data and AI.",
    viewWork: "View work",
    seeExperience: "See experience",
    selected: "Selected projects",
    openProject: "Open project: ",
    preview: " preview",
    facts: {
      education: "Education",
      educationV: "S1 Informatics, Telkom University, class of 2023",
      focus: "Focus",
      focusV: "UI/UX design",
      learning: "Learning",
      learningV: "Data and AI",
      currently: "Currently",
      currentlyV: "Member, Advanced Software Engineering Laboratory",
    },

    workTitle: "Work",
    project: "project",
    projects: "projects",
    filterAria: "Filter projects by category",
    all: "All",
    showingAll: "Showing all {n} projects",
    showing: "Showing {n} {cat} {unit}",
    emptyTitle: "No projects published yet",
    emptyText: "Each project is documented first, then added here. The first ones will appear on this page as soon as they are ready.",

    expTitle: "Experience",
    expSub: "Internships, lab work and organizations since January 2024. Hover a row in the timeline to find its details.",
    legendWork: "Lab and internships",
    legendOrg: "Organizations and events",
    expandAll: "Expand all",
    collapseAll: "Collapse all",
    tools: "Tools: ",
    viewProject: "View the project: ",
    pending: "Details not available yet.",
    na: "Not available yet",

    aboutTitle: "About",
    background: "Background",
    backgroundText:
      "A motivated Informatics student at Telkom University with a strong foundation in UI/UX design, currently focusing on expanding my skills in Artificial Intelligence and Data Science. I enjoy exploring how user-centered design and intelligent models can solve real problems to create meaningful digital experiences. Currently strengthening my technical capabilities in AI algorithms while aiming to contribute to impactful and scalable tech solutions.",
    education: "Education",
    educationLines: ["S1 Informatics", "Telkom University"],
    classOf: "Class of 2023",
    interests: "Interests",
    interestList: ["UI/UX design", "User-centered design", "Software development", "Data science", "Artificial intelligence"],
    skills: "Skills",
    design: "Design",
    development: "Development",
    designSkills: ["Figma", "Wireframing", "Prototyping", "User research", "Usability testing", "Social media content design"],
    pastTools: "Tools used in past roles",
    learningLabel: "Learning",
    learningList: ["Data", "AI"],

    contactTitle: "Contact",
    contactBig: "The best way to reach me is LinkedIn or email.",
    email: "Email",
    uniEmail: "University email",

    back: "All work",
    mobileVersion: "Mobile version",
    enlarge: "Enlarge image: ",
    morePager: "More projects",
    prev: "← Previous",
    next: "Next →",
    factLabels: { role: "Role", year: "Year", team: "Team", platform: "Platform", tools: "Tools" },
    categories: { "UI/UX": "UI/UX", "Web Development": "Web Development" } as Record<string, string>,
    types: {
      Internship: "Internship",
      "Personal project": "Personal project",
      "Academic project": "Academic project",
      "Competition prototype": "Competition prototype",
    } as Record<string, string>,
  },

  id: {
    htmlLang: "id",
    siteTitle: "Alif Ihsan | Desainer UI/UX & Mahasiswa Informatika",
    siteDescription:
      "Portofolio Alif Ihsan, mahasiswa Informatika Telkom University yang berfokus pada desain UI/UX dan sedang belajar data dan AI.",
    ogAlt: "Alif Ihsan, desain UI/UX dan belajar data dan AI",
    skip: "Langsung ke konten",
    homeAria: "Alif Ihsan, beranda",
    navAria: "Utama",
    nav: { home: "Beranda", work: "Karya", experience: "Pengalaman", about: "Tentang", contact: "Kontak" },
    themeAria: "Ganti tema warna",
    langAria: "English",
    langShort: "EN",
    location: "Bandung, Indonesia",
    toTop: "Kembali ke atas ↑",
    lightbox: { label: "Penampil gambar", close: "Tutup", prev: "Gambar sebelumnya", next: "Gambar berikutnya" },

    eyebrow: "Portofolio · 2026",
    hi: "Hai, saya",
    typed: ["Desain UI/UX", "Belajar data dan AI"],
    lede: "Mahasiswa Informatika di Telkom University. Saya mendesain antarmuka di Figma dan membangun perangkat lunak dengan TypeScript dan Python. Saat ini saya sedang belajar data dan AI.",
    viewWork: "Lihat karya",
    seeExperience: "Lihat pengalaman",
    selected: "Proyek pilihan",
    openProject: "Buka proyek: ",
    preview: " pratinjau",
    facts: {
      education: "Pendidikan",
      educationV: "S1 Informatika, Telkom University, angkatan 2023",
      focus: "Fokus",
      focusV: "Desain UI/UX",
      learning: "Sedang belajar",
      learningV: "Data dan AI",
      currently: "Saat ini",
      currentlyV: "Anggota, Advanced Software Engineering Laboratory",
    },

    workTitle: "Karya",
    project: "proyek",
    projects: "proyek",
    filterAria: "Saring proyek berdasarkan kategori",
    all: "Semua",
    showingAll: "Menampilkan semua {n} proyek",
    showing: "Menampilkan {n} proyek {cat}",
    emptyTitle: "Belum ada proyek yang dipublikasikan",
    emptyText: "Setiap proyek didokumentasikan lebih dulu, baru ditambahkan ke sini. Proyek pertama akan muncul di halaman ini begitu siap.",

    expTitle: "Pengalaman",
    expSub: "Magang, kegiatan lab, dan organisasi sejak Januari 2024. Arahkan kursor ke satu baris di linimasa untuk melihat detailnya.",
    legendWork: "Lab dan magang",
    legendOrg: "Organisasi dan acara",
    expandAll: "Buka semua",
    collapseAll: "Tutup semua",
    tools: "Perangkat: ",
    viewProject: "Lihat proyeknya: ",
    pending: "Detail belum tersedia.",
    na: "Belum tersedia",

    aboutTitle: "Tentang",
    background: "Latar belakang",
    backgroundText:
      "Mahasiswa Informatika Telkom University yang bersemangat, dengan dasar yang kuat di desain UI/UX, dan sekarang fokus memperluas kemampuan di Kecerdasan Buatan dan Ilmu Data. Saya suka menjelajahi bagaimana desain yang berpusat pada pengguna dan model cerdas dapat memecahkan masalah nyata untuk menciptakan pengalaman digital yang bermakna. Saat ini saya memperkuat kemampuan teknis di algoritma AI, dengan tujuan berkontribusi pada solusi teknologi yang berdampak dan dapat dikembangkan.",
    education: "Pendidikan",
    educationLines: ["S1 Informatika", "Telkom University"],
    classOf: "Angkatan 2023",
    interests: "Minat",
    interestList: ["Desain UI/UX", "Desain berpusat pada pengguna", "Pengembangan perangkat lunak", "Ilmu data", "Kecerdasan buatan"],
    skills: "Keahlian",
    design: "Desain",
    development: "Pengembangan",
    designSkills: ["Figma", "Wireframing", "Prototyping", "Riset pengguna", "Usability testing", "Desain konten media sosial"],
    pastTools: "Perangkat yang dipakai di peran sebelumnya",
    learningLabel: "Sedang dipelajari",
    learningList: ["Data", "AI"],

    contactTitle: "Kontak",
    contactBig: "Cara terbaik menghubungi saya adalah lewat LinkedIn atau email.",
    email: "Email",
    uniEmail: "Email kampus",

    back: "Semua karya",
    mobileVersion: "Versi mobile",
    enlarge: "Perbesar gambar: ",
    morePager: "Proyek lainnya",
    prev: "← Sebelumnya",
    next: "Berikutnya →",
    factLabels: { role: "Peran", year: "Tahun", team: "Tim", platform: "Platform", tools: "Perangkat" },
    categories: { "UI/UX": "UI/UX", "Web Development": "Pengembangan Web" } as Record<string, string>,
    types: {
      Internship: "Magang",
      "Personal project": "Proyek pribadi",
      "Academic project": "Proyek akademik",
      "Competition prototype": "Prototipe kompetisi",
    } as Record<string, string>,
  },
};

export type Dict = (typeof dict)["en"];
export const useT = (lang: Lang): Dict => dict[lang] as Dict;
export const langOf = (pathname: string): Lang => (/^\/id(\/|$)/.test(pathname) ? "id" : "en");
