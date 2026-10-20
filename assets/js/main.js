(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav__toggle");
  const menuLinks = document.querySelectorAll(".nav__menu a");

  // Header-Hintergrund beim Scrollen
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile-Navigation
  const setMenu = (open) => {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  menuLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });

  // Aktiven Abschnitt in der Navigation markieren
  const sections = [...menuLinks]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          menuLinks.forEach((link) =>
            link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`)
          );
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));

    // Sanftes Einblenden
    const reveal = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  }

  // Nur ein Song gleichzeitig abspielen
  const players = document.querySelectorAll("audio");
  players.forEach((player) =>
    player.addEventListener("play", () =>
      players.forEach((other) => other !== player && other.pause())
    )
  );

  // Lightbox
  const lightbox = document.querySelector(".lightbox");
  if (lightbox && typeof lightbox.showModal === "function") {
    const img = lightbox.querySelector("img");
    document.querySelectorAll(".gallery__item").forEach((item) =>
      item.addEventListener("click", () => {
        const thumb = item.querySelector("img");
        img.src = item.dataset.full;
        img.alt = thumb.alt;
        lightbox.showModal();
      })
    );
    lightbox.querySelector(".lightbox__close").addEventListener("click", () => lightbox.close());
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.close();
    });
  }

  // Impressum/Datenschutz per Link (#impressum, #datenschutz) direkt öffnen
  const openFromHash = () => {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!target || target.tagName !== "DETAILS") return;
    target.open = true;
    target.scrollIntoView();
  };
  openFromHash();
  window.addEventListener("hashchange", openFromHash);

  // Jahr im Footer
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
