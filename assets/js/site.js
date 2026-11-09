/* Renders the page from window.SITE (assets/js/data.js) and wires the small toys. */
(function () {
  "use strict";
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const root = document.body.dataset.root || ""; // "" on the homepage, "../" on subpages
  const href = (u) => (/^(https?:|mailto:)/.test(u) ? u : root + u);
  const ytm = (q) => "https://music.youtube.com/search?q=" + encodeURIComponent(q);

  /* ---------- live numbers ---------- */
  const stats = {
    papers: S.pubs.length,
    citations: S.scholar.citations,
    h: S.scholar.h,
    i10: S.scholar.i10,
    awards: S.pubs.filter((p) => p.award).length,
  };
  $$("[data-stat]").forEach((el) => { el.textContent = stats[el.dataset.stat]; });

  /* ---------- news ---------- */
  const nl = $("#newslist");
  if (nl) {
    nl.innerHTML = S.news.map((n) =>
      `<li><time datetime="${n.dt}">${n.when}</time>${n.html}${n.isNew ? '<span class="new">New</span>' : ""}</li>`
    ).join("");
  }

  /* ---------- publications ---------- */
  function card(p) {
    const i = S.pubs.indexOf(p);
    const seals = (p.isNew ? '<span class="seal">New</span>' : "") + (p.award ? `<span class="seal gold">${esc(p.award)}</span>` : "");
    const links = p.links.length
      ? p.links.map(([n, u]) => `<a href="${esc(u)}">${esc(n)}</a>`).join("")
      : '<span class="muted">camera-ready soon</span>';
    return `
    <article class="stat pub" id="pub-${i}" data-kind="${p.kind}" data-roll="${esc(p.title.split(":")[0])}" data-roll-sub="${esc(p.venue)}">
      ${seals}
      <div class="venue"><span>${esc(p.venue)}</span><span>${p.kind}</span></div>
      <h3>${esc(p.title)}</h3>
      <div class="drule"><i></i></div>
      <dl>
        <div><dt>Authors</dt><dd>${esc(p.authors).replace(S.me, "<b>" + S.me + "</b>")}</dd></div>
        <div><dt>Links</dt><dd class="acts">${links}</dd></div>
        ${p.note ? `<div><dt>Also</dt><dd>${esc(p.note)}</dd></div>` : ""}
      </dl>
    </article>`;
  }

  const home = $("#publist");
  if (home) {
    const list = S.pubs.filter((p) => p.featured);
    home.innerHTML = list.map(card).join("") + `
      <aside class="sidebar archive">
        <h3>The full archive</h3>
        <p><a href="publications/"><b>The complete bestiary: all ${S.pubs.length} publications →</b></a></p>
        <p class="acts">Citations and anything newer: <a href="${esc(S.links.scholar)}">Google Scholar</a> · <a href="${esc(S.links.orcid)}">ORCID</a> · <a href="${href(S.links.cv)}">CV (PDF)</a></p>
      </aside>`;
  }

  const full = $("#fulllist");
  if (full) {
    const years = [...new Set(S.pubs.map((p) => p.year))].sort((a, b) => b - a);
    full.innerHTML = years.map((y) => `
      <section class="yeargroup" data-year="${y}" aria-labelledby="y-${y}">
        <h2 id="y-${y}">${y}</h2>
        <div class="pubs">${S.pubs.filter((p) => p.year === y).map(card).join("")}</div>
      </section>`).join("");

    const kinds = ["All", "Conference", "Journal", "Workshop", "Preprint"].filter(
      (k) => k === "All" || S.pubs.some((p) => p.kind === k));
    const bar = $("#filters");
    bar.innerHTML = kinds.map((k) => {
      const n = k === "All" ? S.pubs.length : S.pubs.filter((p) => p.kind === k).length;
      return `<li><button type="button" data-kind="${k}" aria-pressed="${k === "All"}">${k}<span class="count">${n}</span></button></li>`;
    }).join("");
    bar.addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b) return;
      const k = b.dataset.kind;
      $$("button", bar).forEach((x) => x.setAttribute("aria-pressed", x === b));
      $$(".pub", full).forEach((el) => { el.hidden = k !== "All" && el.dataset.kind !== k; });
      $$(".yeargroup", full).forEach((g) => { g.hidden = !$$(".pub", g).some((el) => !el.hidden); });
    });
  }

  /* ---------- off-stage: music + games ---------- */
  const rep = $("#onrepeat");
  if (rep) {
    rep.innerHTML = S.onRepeat.map((a) => `
      <li class="card featured" data-roll="${esc(a.album)}" data-roll-sub="${esc(a.artist)}">
        <span class="tag">${esc(a.tag)}</span>
        <h3>${esc(a.album)}<small>${esc(a.artist)}</small></h3>
        <p>${esc(a.why)}</p>
        <a class="go" href="${esc(a.url)}">Listen on YouTube Music →</a>
      </li>`).join("");
  }
  const shelf = $("#shelf");
  if (shelf) {
    shelf.innerHTML = S.shelf.map((a) => `
      <li class="card" data-roll="${esc(a.album)}" data-roll-sub="${esc(a.artist)}">
        <span class="yr">${a.year}</span><span class="tag">${esc(a.tag)}</span>
        <h3>${esc(a.album)}<small>${esc(a.artist)}</small></h3>
        <p>${esc(a.why)}</p>
        <a class="go" href="${ytm(a.artist + " " + a.album)}">Find it on YouTube Music →</a>
      </li>`).join("");
  }
  const playing = $("#playing");
  if (playing) {
    playing.innerHTML = S.playing.map((g) => `<li><b>${esc(g.name)}</b><span>${esc(g.note)}${
      g.link ? ` <a href="${esc(S.links[g.link[1]])}">${esc(g.link[0])} ↗</a>` : ""}</span></li>`).join("");
  }
  const quests = $("#quests");
  if (quests) quests.innerHTML = S.quests.map((g) => `<li><b>${esc(g.name)}</b><span>${esc(g.why)}</span></li>`).join("");

  /* ---------- d20: random encounter ---------- */
  const toast = $("#toast");
  let tt;
  function say(html) {
    if (!toast) return;
    toast.innerHTML = html; toast.classList.add("show");
    clearTimeout(tt); tt = setTimeout(() => toast.classList.remove("show"), 4200);
  }
  function flash(el) {
    el.scrollIntoView({ block: "center" });
    el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
  }
  const rollBtn = $("#roll");
  if (rollBtn) rollBtn.addEventListener("click", () => {
    const r = 1 + ((Math.random() * 20) | 0);
    if (r === 1) { say("<b>1</b> Natural 1. Reviewer 2 appears and asks for one more baseline."); return; }
    if (r === 20) {
      const loot = $("#awards");
      if (loot) { say("<b>20</b> Critical! You find the treasure hoard."); loot.scrollIntoView(); return; }
      const df = $$("[data-roll]").find((el) => /DragonForce/.test(el.dataset.rollSub || ""));
      if (df) { say("<b>20</b> Critical! The bard plays it at 200 BPM."); flash(df); return; }
    }
    const pool = $$("[data-roll]").filter((el) => !el.hidden && !el.closest("[hidden]"));
    if (!pool.length) return;
    const el = pool[(r - 2 + pool.length) % pool.length];
    const verb = el.classList.contains("pub") ? "Random encounter" : "The bard suggests";
    say(`<b>${r}</b> ${verb}: <i>${el.dataset.roll}</i> (${el.dataset.rollSub}).`);
    flash(el);
  });

  /* ---------- map: centre on Milano when it scrolls (phones) ---------- */
  const m = $("#mapscroll");
  if (m && m.scrollWidth > m.clientWidth) m.scrollLeft = m.scrollWidth * 0.5 - m.clientWidth * 0.5;

  /* ---------- the bard's riff: a power-metal gallop in E, synthesised ---------- */
  const tabEl = $("#tab");
  if (tabEl) {
    // s: 0 = low E string, 1 = A string. d: length in 16th notes. pc: play as a power chord.
    const RIFF = [
      { s: 0, f: 0, d: 2, pc: 1 }, { s: 0, f: 0, d: 1, pc: 1 }, { s: 0, f: 0, d: 1, pc: 1 },
      { s: 0, f: 0, d: 2, pc: 1 }, { s: 0, f: 0, d: 1, pc: 1 }, { s: 0, f: 0, d: 1, pc: 1 },
      { s: 0, f: 0, d: 2, pc: 1 }, { s: 0, f: 0, d: 1, pc: 1 }, { s: 0, f: 0, d: 1, pc: 1 },
      { s: 0, f: 3, d: 1 }, { s: 0, f: 5, d: 1 }, { s: 0, f: 7, d: 1 }, { s: 0, f: 8, d: 1 },
      { s: 0, f: 0, d: 2, pc: 1 }, { s: 0, f: 0, d: 1, pc: 1 }, { s: 0, f: 0, d: 1, pc: 1 },
      { s: 0, f: 0, d: 2, pc: 1 }, { s: 0, f: 0, d: 1, pc: 1 }, { s: 0, f: 0, d: 1, pc: 1 },
      { s: 1, f: 7, d: 2 }, { s: 1, f: 5, d: 2 }, { s: 0, f: 7, d: 2 }, { s: 0, f: 5, d: 2 },
    ];
    const NAMES = ["e", "B", "G", "D", "A", "E"];
    const lines = NAMES.map(() => []);
    let unit = 0;
    RIFF.forEach((n, i) => {
      if (unit === 16) { lines.forEach((l) => l.push("|")); }
      const row = 5 - n.s, w = n.d * 2;
      NAMES.forEach((_, li) => {
        if (li === row) lines[li].push(`<span data-n="${i}">${n.f}</span>` + "-".repeat(w - String(n.f).length));
        else if (n.pc && li === row - 1) lines[li].push(`<span data-n="${i}">2</span>` + "-".repeat(w - 1));
        else lines[li].push("-".repeat(w));
      });
      unit += n.d;
    });
    tabEl.innerHTML = NAMES.map((nm, li) => `${nm}|${lines[li].join("")}|`).join("\n");

    const btn = $("#riff");
    let ac, playing = false, timers = [];
    const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);
    function curve() {
      const c = new Float32Array(1024);
      for (let i = 0; i < 1024; i++) { const x = (i / 512) - 1; c[i] = Math.tanh(x * 6); }
      return c;
    }
    function note(t, freqs, dur, mute) {
      const shaper = ac.createWaveShaper(); shaper.curve = curve();
      const lp = ac.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = mute ? 1300 : 2600;
      const g = ac.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.22, t + 0.006);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur * (mute ? 0.75 : 0.95));
      freqs.forEach((f) => {
        [-6, 6].forEach((cents) => {
          const o = ac.createOscillator(); o.type = "sawtooth"; o.frequency.value = f; o.detune.value = cents;
          const pre = ac.createGain(); pre.gain.value = 0.5;
          o.connect(pre).connect(shaper); o.start(t); o.stop(t + dur + 0.05);
        });
      });
      shaper.connect(lp).connect(g).connect(ac.destination);
    }
    function stop() {
      playing = false; timers.forEach(clearTimeout); timers = [];
      btn.setAttribute("aria-pressed", "false"); btn.textContent = "Play the riff";
      $$("span[data-n]", tabEl).forEach((s) => s.classList.remove("hit"));
    }
    function play() {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      if (ac.state === "suspended") ac.resume();
      playing = true; btn.setAttribute("aria-pressed", "true"); btn.textContent = "Stop";
      const sixteenth = 60 / 190 / 4;
      let t = ac.currentTime + 0.05, k = 0;
      for (let rep = 0; rep < 2; rep++) {
        RIFF.forEach((n, i) => {
          const base = (n.s === 0 ? 40 : 45) + n.f;
          const freqs = n.pc ? [midi(base), midi(base + 7)] : [midi(base)];
          note(t, freqs, n.d * sixteenth, !!n.pc);
          const at = (t - ac.currentTime) * 1000;
          timers.push(setTimeout(() => {
            $$("span.hit", tabEl).forEach((s) => s.classList.remove("hit"));
            $$(`span[data-n="${i}"]`, tabEl).forEach((s) => s.classList.add("hit"));
          }, at));
          t += n.d * sixteenth; k++;
        });
      }
      timers.push(setTimeout(stop, (t - ac.currentTime) * 1000 + 100));
    }
    btn.addEventListener("click", () => (playing ? stop() : play()));
  }
})();
