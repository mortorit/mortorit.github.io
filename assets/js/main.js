(function () {
  const data = window.SITE_DATA;

  if (!data) {
    return;
  }

  const isNestedPage = window.location.pathname.includes("/publications/");

  function withBase(url) {
    if (!url) {
      return "";
    }

    if (/^(https?:|mailto:)/.test(url)) {
      return url;
    }

    return isNestedPage ? `../${url}` : url;
  }

  function createActionLink(link) {
    if (!link.url) {
      const span = document.createElement("span");
      span.className = "action-link--disabled";
      span.textContent = link.label;
      span.title = link.note || "Add URL in site-data.js";
      return span;
    }

    const anchor = document.createElement("a");
    anchor.className = link.kind === "primary" ? "action-link" : "action-link--muted";
    anchor.href = withBase(link.url);
    anchor.textContent = link.label;

    if (!link.url.startsWith("mailto:") && /^https?:/.test(link.url)) {
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
    }

    return anchor;
  }

  function renderContactLinks() {
    const containers = document.querySelectorAll("[data-contact-links]");

    containers.forEach((container) => {
      const orderedLinks = [
        data.links.email,
        data.links.scholar,
        data.links.cv,
        data.links.github,
        data.links.linkedin,
        data.links.orcid,
      ];

      orderedLinks.forEach((link) => container.appendChild(createActionLink(link)));
    });
  }

  function renderResearchFocus() {
    const grid = document.querySelector("[data-research-focus]");
    if (!grid) {
      return;
    }

    data.focus.forEach((entry) => {
      const card = document.createElement("article");
      card.className = "focus-card";
      card.innerHTML = `<h3>${entry.title}</h3><p>${entry.description}</p>`;
      grid.appendChild(card);
    });
  }

  function buildPublicationCard(publication, compact) {
    const article = document.createElement("article");
    article.className = compact ? "publication-card" : "publication-item";

    const metaClass = compact ? "publication-card__meta" : "publication-item__meta";
    const linksClass = compact ? "publication-card__links" : "publication-item__links";

    article.innerHTML = `
      <div class="${metaClass}">
        <span>${publication.year}</span>
        <span>${publication.type}</span>
      </div>
      <div>
        <h3>${publication.title}</h3>
        <p>${publication.authors}</p>
      </div>
      <p class="publication-item__venue">${publication.venue}</p>
      <div class="${linksClass}"></div>
    `;

    const linksContainer = article.querySelector(`.${linksClass}`);
    publication.links.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = withBase(link.url);
      anchor.textContent = link.label;
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
      linksContainer.appendChild(anchor);
    });

    return article;
  }

  function renderPublications() {
    const selectedRoot = document.querySelector('[data-publications="selected"]');
    const fullRoot = document.querySelector('[data-publications="all"]');

    if (selectedRoot) {
      data.publications
        .filter((item) => item.featured)
        .slice(0, 4)
        .forEach((item) => selectedRoot.appendChild(buildPublicationCard(item, true)));
    }

    if (fullRoot) {
      data.publications
        .slice()
        .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title))
        .forEach((item) => fullRoot.appendChild(buildPublicationCard(item, false)));
    }
  }

  function renderNews() {
    const timeline = document.querySelector("[data-news]");
    if (!timeline) {
      return;
    }

    data.news.forEach((entry) => {
      const item = document.createElement("article");
      item.className = "timeline__item";
      item.innerHTML = `
        <span class="timeline__date">${entry.date}</span>
        <h3>${entry.title}</h3>
        <p>${entry.body}</p>
      `;
      timeline.appendChild(item);
    });
  }

  function renderPlaylists() {
    const root = document.querySelector("[data-playlists]");
    if (!root) {
      return;
    }

    data.playlists.forEach((playlist) => {
      const card = document.createElement("article");
      card.className = "playlist-card";
      card.innerHTML = `
        <span class="playlist-card__badge">${playlist.badge}</span>
        <h3 class="playlist-card__title">${playlist.title}</h3>
        <p>${playlist.subtitle}</p>
      `;

      const anchor = document.createElement("a");
      anchor.className = "playlist-card__link";
      anchor.href = playlist.url;
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
      anchor.textContent = "Open placeholder";

      card.appendChild(anchor);
      root.appendChild(card);
    });
  }

  renderContactLinks();
  renderResearchFocus();
  renderPublications();
  renderNews();
  renderPlaylists();
})();
