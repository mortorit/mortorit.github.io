# Cristian Sbrolli · Module CS·26: The Latent Wyrm

Personal academic site, styled as an original tabletop adventure module.
Plain HTML/CSS/JS on GitHub Pages: no build step and no dependencies.

## Pages

| Path | What it is |
| --- | --- |
| `index.html` | Homepage: hero + point-cloud dragon, news, selected papers, education map, awards, off-stage teaser |
| `publications/` | All publications, grouped by year, with type filters |
| `off-stage/` | The tavern: music recommendations, games, guitar (with a playable riff) |

## Everyday edits: `assets/js/data.js`

Almost everything is read from **`assets/js/data.js`**:

- **New paper** → add an object at the top of `pubs`. Set `featured: true` to show it on the homepage,
  `isNew: true` for the red "New" seal, `award: "Best paper"` for the gold seal (it also counts toward the
  "Best paper" number on the dragon's stat block). Leave `links: []` to show "camera-ready soon".
- **News** → add an object at the top of `news` (`html` may contain `<b>` and `<i>`).
- **Citations / h-index** → update `scholar`.
- **Music & games** → `onRepeat`, `shelf`, `playing`, `quests`.

The paper count and award count update themselves.

## Things that are hand-written HTML

- Awards, service and education → `index.html`.
- The map (pins, labels, map key) → the `<svg>` in the Education section of `index.html`.
- The off-stage teaser on the homepage → the bottom of `index.html`.

## Other files

- `assets/css/site.css`: all styles (colour tokens at the top).
- `assets/js/site.js`: renders the lists, plus the d20, the publication filters and the guitar riff.
- `assets/js/wyrm.js`: the dragon that "denoises" from Gaussian noise (respects reduced-motion settings).
- `assets/docs/Cristian_Sbrolli_CV.pdf`: the CV linked everywhere.

## Easter eggs

- **Roll** (d20 in the menu): jumps to a random paper or album. A natural 1 summons Reviewer 2.
- Click the dragon plate to draw a new sample.
- `Ctrl+P` prints a clean one-column "player handout" CV.
