/* ==========================================================================
   THE ONE FILE YOU EDIT.
   Everything on the site (news, publications, stats, music, games) is read
   from here. Adding a paper = adding one object to `pubs` (newest first).
   ========================================================================== */
window.SITE = {
  me: "Cristian Sbrolli",

  // Update by hand from Google Scholar every now and then.
  scholar: { citations: 43, h: 4, i10: 2 },

  links: {
    email: "mailto:cristian.sbrolli@polimi.it",
    scholar: "https://scholar.google.com/citations?user=yhvx_3AAAAAJ&hl=en",
    github: "https://github.com/mortorit",
    linkedin: "https://www.linkedin.com/in/cristian-sbrolli-2275651b2/",
    orcid: "https://orcid.org/0000-0001-6873-1967",
    cv: "assets/docs/Cristian_Sbrolli_CV.pdf",
    metatft: "https://www.metatft.com/player/euw/%E3%83%A2%E3%83%AB%E3%83%88%E3%83%AA%E3%83%83%E3%83%88-2411",
  },

  /* ---------------- News (newest first; `html` may contain <b>, <i>) ---------------- */
  news: [
    { when: "2026", dt: "2026", isNew: true,
      html: "<b>Beyond Bag-of-Words</b> accepted at <b>NeurIPS 2026</b>, on diagnosing compositional binding failures in vision-language models. With T. Yamasaki and M. Matteucci." },
    { when: "July 2026", dt: "2026-07",
      html: "<b>Synesthesia via Direct Latent Augmentation</b> accepted at <b>ECCV 2026</b>, with N. Michel, M. Matteucci and T. Yamasaki." },
    { when: "June 2026", dt: "2026-06",
      html: "<b>Best Short Paper Award</b> at SynData4CV @ CVPR 2026 for “Beyond Raw Signals: Undecoded Generative Latents as Privileged Synthetic Data”. The workshop version of PolyGen was presented there too." },
    { when: "February 2026", dt: "2026-02",
      html: "Released the <b>Auto-Comp</b> (compositional probing of contrastive VLMs) and <b>PolyGen</b> (fully synthetic vision-language training) preprints." },
    { when: "December 2025", dt: "2025-12",
      html: "Presented <b>SceneForge</b> at <b>NeurIPS 2025</b> in San Diego: better 3D-text alignment through structured scene compositions." },
    { when: "October 2025", dt: "2025-10",
      html: "Completed a six-month visit at the Computer Vision and Media Lab, <b>University of Tokyo</b>, with Prof. Toshihiko Yamasaki." },
    { when: "2025", dt: "2025",
      html: "<b>Leonardo Fibonacci Best Paper Award</b> at LOD 2025 for Neuro-Symbolic Scene Graph Conditioning." },
    { when: "Earlier", dt: "2024",
      html: "Papers in Image and Vision Computing (2025), BMVC 2024, IJCNN 2024, ICIAP 2023 &amp; 2025, CRAS 2024 and FormaliSE 2022." },
  ],

  /* ---------------- Publications (newest first) ----------------
     venue, kind (Conference | Journal | Workshop | Preprint), year, title, authors,
     links: [[label, url], ...]   (empty = "camera-ready soon")
     award: "..."   -> gold seal + counts toward "Best paper" on the stat block
     isNew: true    -> red "New" seal
     featured: true -> shown on the homepage (everything is on /publications/)
     note: "..."    -> extra line under the links                                   */
  pubs: [
    { venue: "NeurIPS 2026", kind: "Conference", year: 2026, featured: true, isNew: true,
      title: "Beyond Bag-of-Words: Diagnosing Compositional Binding Failures in Vision-Language Models",
      authors: "Cristian Sbrolli, Toshihiko Yamasaki, Matteo Matteucci",
      links: [] },
    { venue: "ECCV 2026", kind: "Conference", year: 2026, featured: true, isNew: true,
      title: "Synesthesia via Direct Latent Augmentation: Bypassing the Decode-Encode Loop for Cross-Modal Distillation",
      authors: "Cristian Sbrolli, Nicolas Michel, Matteo Matteucci, Toshihiko Yamasaki",
      links: [] },
    { venue: "SynData4CV @ CVPR 2026", kind: "Workshop", year: 2026, featured: true, award: "Best short paper",
      title: "Beyond Raw Signals: Undecoded Generative Latents as Privileged Synthetic Data",
      authors: "Cristian Sbrolli, Nicolas Michel, Matteo Matteucci, Toshihiko Yamasaki",
      links: [] },
    { venue: "arXiv 2026", kind: "Preprint", year: 2026, featured: true,
      title: "Auto-Comp: An Automated Pipeline for Scalable Compositional Probing of Contrastive Vision-Language Models",
      authors: "Cristian Sbrolli, Matteo Matteucci, Toshihiko Yamasaki",
      links: [["arXiv", "https://arxiv.org/abs/2602.02043"], ["OpenReview", "https://openreview.net/forum?id=u0WgL0Ijcs"]] },
    { venue: "arXiv 2026", kind: "Preprint", year: 2026, featured: true,
      title: "PolyGen: Fully Synthetic Vision-Language Training via Multi-Generator Ensembles",
      authors: "Leonardo Brusini, Cristian Sbrolli, Eugenio Lomurno, Toshihiko Yamasaki, Matteo Matteucci",
      links: [["arXiv", "https://arxiv.org/abs/2602.01370"]],
      note: "Non-archival workshop version at SynData4CV @ CVPR 2026, as “Narrowing the Performance Gap in Synthetic VLM Pre-training via Multi-Generator Ensembles”." },
    { venue: "NeurIPS 2025", kind: "Conference", year: 2025, featured: true,
      title: "SceneForge: Enhancing 3D-Text Alignment with Structured Scene Compositions",
      authors: "Cristian Sbrolli, Matteo Matteucci",
      links: [["arXiv", "https://arxiv.org/abs/2509.15693"], ["NeurIPS", "https://neurips.cc/virtual/2025/poster/119379"], ["Project page", "https://mortorit.github.io/sceneforge-neurips2025/"]] },
    { venue: "LOD 2025", kind: "Conference", year: 2025, featured: true, award: "Best paper",
      title: "Neuro-Symbolic Scene Graph Conditioning for Synthetic Image Dataset Generation",
      authors: "Giacomo Savazzi, Eugenio Lomurno, Cristian Sbrolli, Agnese Chiatti, Matteo Matteucci",
      links: [["arXiv", "https://arxiv.org/abs/2503.17224"], ["Award", "https://lod2025.icas.events/best-paper-award/"]] },
    { venue: "Image and Vision Computing 2025", kind: "Journal", year: 2025, featured: true,
      title: "Your Image Generator Is Your New Private Dataset",
      authors: "Nicolò Francesco Resmini, Eugenio Lomurno, Cristian Sbrolli, Matteo Matteucci",
      links: [["Journal", "https://www.sciencedirect.com/science/article/pii/S0262885625003154"], ["Preprint", "https://dblp.org/rec/journals/corr/abs-2504-04582"]] },
    { venue: "ICIAP 2025", kind: "Conference", year: 2025,
      title: "Deep Multimodal Fusion for 2D-3D Vineyard Scene Understanding",
      authors: "Mirko Usuelli, Cristian Sbrolli, Alessio Braccini, Matteo Frosi, Matteo Matteucci",
      links: [["Springer", "https://link.springer.com/book/10.1007/978-3-032-10185-3"], ["DBLP", "https://dblp.org/rec/conf/iciap/UsuelliSBFM25"]] },
    { venue: "BMVC 2024", kind: "Conference", year: 2024, featured: true,
      title: "No Captions, No Problem: Captionless 3D-CLIP Alignment with Hard Negatives via CLIP Knowledge and LLMs",
      authors: "Cristian Sbrolli, Matteo Matteucci",
      links: [["BMVC", "https://bmvc2024.org/proceedings/32/"], ["arXiv", "https://arxiv.org/abs/2406.02202"]] },
    { venue: "IJCNN 2024", kind: "Conference", year: 2024, featured: true,
      title: "Can Shape-Infused Joint Embeddings Improve Image-Conditioned 3D Diffusion?",
      authors: "Cristian Sbrolli, Paolo Cudrano, Matteo Matteucci",
      links: [["OpenReview", "https://openreview.net/forum?id=RHL4y6iUsh"], ["IEEE", "https://ieeexplore.ieee.org/document/10649907/"]] },
    { venue: "CRAS 2024", kind: "Conference", year: 2024,
      title: "Enhancing Colonoscopy Interpretation with AI-Based Captioning",
      authors: "L. Carlini, C. Lena, Cristian Sbrolli, M. Spadaccini, C. Hassan, E. De Momi",
      links: [] },
    { venue: "ICIAP 2023", kind: "Conference", year: 2023,
      title: "CISPc: Embedding Images and Point Clouds in a Joint Concept Space by Contrastive Learning",
      authors: "Cristian Sbrolli, Paolo Cudrano, Matteo Matteucci",
      links: [["Springer", "https://link.springer.com/chapter/10.1007/978-3-031-43153-1_39"], ["DBLP", "https://dblp.org/rec/conf/iciap/SbrolliCM23"]] },
    { venue: "FormaliSE 2022", kind: "Conference", year: 2022,
      title: "Formal Modeling and Verification of Multi-Robot Interactive Scenarios in Service Settings",
      authors: "Livia Lestingi, Cristian Sbrolli, Pasquale Scarmozzino, Giorgio Romeo, Marcello M. Bersani, Matteo Rossi",
      links: [["ACM", "https://doi.org/10.1145/3524482.3527653"], ["PoliMi", "https://re.public.polimi.it/handle/11311/1218320"]] },
    { venue: "CoRR 2022", kind: "Preprint", year: 2022,
      title: "IC3D: Image-Conditioned 3D Diffusion for Shape Generation",
      authors: "Cristian Sbrolli, Paolo Cudrano, Matteo Frosi, Matteo Matteucci",
      links: [["arXiv", "https://arxiv.org/abs/2211.10865"], ["Thesis", "https://www.politesi.polimi.it/handle/10589/201384"]] },
  ],

  /* ---------------- Off-stage: music ---------------- */
  // Current favourites (real playlist links).
  onRepeat: [
    { artist: "Twilight Force", album: "Tales of Ancient Prophecies", tag: "Adventure power metal",
      why: "For travelling to a fantasy world.",
      url: "https://music.youtube.com/playlist?list=OLAK5uy_lM0eFweXFqxLWED8meczxz_tC3WqwjnAg" },
    { artist: "Fym", album: "Azure", tag: "Progressive concept album",
      why: "For travelling with your mind.",
      url: "https://music.youtube.com/playlist?list=OLAK5uy_nhCZIYCT5PO6oeDSpQNorWUUROkbnOkT8" },
    { artist: "The Contortionist", album: "Language", tag: "Progressive metal",
      why: "For a more experimental listen.",
      url: "https://music.youtube.com/playlist?list=OLAK5uy_m6-cVPBE4xEJenhMZ58easUbQ8xPrjAEI" },
  ],
  // Recommendations. Links are YouTube Music searches, so they never go stale.
  shelf: [
    { artist: "Twilight Force", album: "Dawn of the Dragonstar", year: 2019, tag: "Adventure metal",
      why: "Maximum cheese, maximum dragons. Start with the title track." },
    { artist: "Fellowship", album: "The Saberlight Chronicles", year: 2022, tag: "Fantasy power metal",
      why: "Pure optimism in metal form. Nearly impossible to listen to in a bad mood." },
    { artist: "Rhapsody", album: "Symphony of Enchanted Lands", year: 1998, tag: "Symphonic power metal",
      why: "The founding text of film-score fantasy metal." },
    { artist: "DragonForce", album: "Inhuman Rampage", year: 2006, tag: "Power metal",
      why: "Home of “Through the Fire and Flames”. Guitar homework for life." },
    { artist: "Nightwish", album: "Once", year: 2004, tag: "Symphonic metal",
      why: "Orchestra, choir and riffs in exactly the right proportions." },
    { artist: "Gloryhammer", album: "Tales from the Kingdom of Fife", year: 2013, tag: "Power metal",
      why: "A whole fantasy campaign in one album. Wizards, unicorns, hammers." },
    { artist: "Blind Guardian", album: "Nightfall in Middle-Earth", year: 1998, tag: "Power metal",
      why: "The Silmarillion as a metal concept album. Enough said." },
    { artist: "Sonata Arctica", album: "Ecliptica", year: 1999, tag: "Melodic power metal",
      why: "Fast, melodic and very Finnish." },
    { artist: "Wind Rose", album: "Wintersaga", year: 2019, tag: "Dwarven power metal",
      why: "Dwarves, mines and drinking songs. Perfect tavern music." },
  ],

  /* ---------------- Off-stage: games ---------------- */
  playing: [
    { name: "Teamfight Tactics", note: "Played seriously, with ranked games and a MetaTFT profile to prove it.", link: ["MetaTFT profile", "metatft"] },
    { name: "League of Legends", note: "Played mostly for fun." },
    { name: "Resident Evil", note: "A long-time fan of the series." },
  ],
  quests: [
    { name: "Resident Evil 4 (2023)", why: "The best remake of the best entry. Parry the chainsaw." },
    { name: "Resident Evil 2 (2019)", why: "Mr. X will follow you into your dreams." },
    { name: "Baldur's Gate 3", why: "A tabletop campaign that came to life. Fittingly, this whole site is one too." },
    { name: "Hades", why: "One more run. Then one more. The soundtrack slaps." },
    { name: "Slay the Spire", why: "For anyone who loves TFT-style decisions about builds and odds." },
  ],
};
