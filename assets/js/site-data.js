window.SITE_DATA = {
  person: {
    name: "Cristian Sbrolli",
    role: "PhD Candidate in Computer Science and Engineering",
    affiliation: "Politecnico di Milano",
    lab: "AIRLab",
  },
  links: {
    email: {
      label: "Email",
      url: "mailto:cristian.sbrolli@polimi.it",
      kind: "primary",
    },
    scholar: {
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=yhvx_3AAAAAJ&hl=en",
      kind: "primary",
    },
    cv: {
      label: "CV",
      url: "assets/docs/Cristian_Sbrolli_CV.pdf",
      kind: "muted",
    },
    orcid: {
      label: "ORCID",
      url: "https://orcid.org/0000-0001-6873-1967",
      kind: "muted",
    },
    github: {
      label: "GitHub",
      url: "https://github.com/mortorit",
      kind: "muted",
      note: "Add your profile URL in assets/js/site-data.js",
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/cristian-sbrolli-2275651b2/",
      kind: "muted",
      note: "Add your profile URL in assets/js/site-data.js",
    },
  },
  focus: [
    {
      title: "Multimodal representation learning",
      description:
        "I work on shared representations across images, text, and 3D data.",
    },
    {
      title: "Synthetic data generation",
      description:
        "I am interested in controllable synthetic pipelines that are useful for downstream learning.",
    },
    {
      title: "3D understanding and generation",
      description:
        "I keep returning to problems around image-conditioned 3D diffusion and text-3D alignment.",
    },
    {
      title: "Compositional reasoning",
      description:
        "I am interested in where current models fail on relations, structure, and composition.",
    },
  ],
  playlists: [
    {
      title: "Azure - Fym",
      subtitle: "Listen to this for travelling with your mind.",
      badge: "Progressive concept album.",
      url: "https://music.youtube.com/playlist?list=OLAK5uy_nhCZIYCT5PO6oeDSpQNorWUUROkbnOkT8&si=AdNwYxbijkAyF0Cl",
    },
    {
      title: "TwilightForce - Tales of Ancient Prophecies",
      subtitle: "Listen to this for travelling to a fantasy world.",
      badge: "Adventure power metal.",
      url: "https://music.youtube.com/playlist?list=OLAK5uy_lM0eFweXFqxLWED8meczxz_tC3WqwjnAg&si=GNeda1F8j-lwtVzx",
    },
    {
      title: "The Contortionist - Language",
      subtitle: "Listen to this for a more experimental listening experience.",
      badge: "Progressive metal.",
      url: "https://music.youtube.com/playlist?list=OLAK5uy_m6-cVPBE4xEJenhMZ58easUbQ8xPrjAEI&si=x01dDamkvHvnEy5t",
    },
  ],
  news: [
    {
      date: "July 2026",
      title: "Synesthesia accepted at ECCV 2026.",
      body:
        "Our paper \"Synesthesia via Direct Latent Augmentation: Bypassing the Decode-Encode Loop for Cross-Modal Distillation\", with Nicolas Michel, Matteo Matteucci, and Toshihiko Yamasaki, was accepted at ECCV 2026.",
    },
    {
      date: "June 2026",
      title: "Best Short Paper Award at SynthData4CV @ CVPR 2026.",
      body:
        "Our workshop paper \"Beyond Raw Signals: Undecoded Generative Latents as Privileged Synthetic Data\" won the Best Short Paper Award at SynthData4CV @ CVPR 2026.",
    },
    {
      date: "February 2026",
      title: "Released the Auto-Comp preprint.",
      body:
        "A preprint on compositional probing for contrastive vision-language models, with Toshihiko Yamasaki and Matteo Matteucci.",
    },
    {
      date: "February 2026",
      title: "Released the PolyGen preprint.",
      body:
        "A preprint on fully synthetic vision-language training with collaborators from Politecnico di Milano and the University of Tokyo.",
    },
    {
      date: "December 2025",
      title: "Presented SceneForge at NeurIPS 2025.",
      body:
        "SceneForge was presented at NeurIPS 2025 and focuses on improving 3D-text alignment with structured scene compositions.",
    },
    {
      date: "October 2025",
      title: "Completed my University of Tokyo visit.",
      body:
        "I spent six months at the Computer Vision and Media Lab, University of Tokyo, working under the guidance of Prof. Toshihiko Yamasaki.",
    },
    {
      date: "2025",
      title: "Neuro-Symbolic Scene Graph Conditioning received the Leonardo Fibonacci Best Paper Award at LOD 2025.",
      body:
        "This work studies how symbolic structure can improve synthetic image generation for scene graph tasks.",
    },
  ],
  publications: [
    {
      title:
        "Synesthesia via Direct Latent Augmentation: Bypassing the Decode-Encode Loop for Cross-Modal Distillation",
      authors: "Cristian Sbrolli, Nicolas Michel, Matteo Matteucci, Toshihiko Yamasaki",
      venue: "ECCV 2026",
      year: 2026,
      type: "Conference",
      featured: true,
      links: [],
    },
    {
      title: "Beyond Raw Signals: Undecoded Generative Latents as Privileged Synthetic Data",
      authors: "Cristian Sbrolli, Nicolas Michel, Matteo Matteucci, Toshihiko Yamasaki",
      venue: "SynthData4CV @ CVPR 2026 — Best Short Paper Award",
      year: 2026,
      type: "Awarded workshop paper",
      featured: false,
      links: [],
    },
    {
      title:
        "Auto-Comp: An Automated Pipeline for Scalable Compositional Probing of Contrastive Vision-Language Models",
      authors: "Cristian Sbrolli, Matteo Matteucci, Toshihiko Yamasaki",
      venue: "arXiv preprint, 2026",
      year: 2026,
      type: "Preprint",
      featured: true,
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2602.02043" },
        { label: "OpenReview", url: "https://openreview.net/forum?id=u0WgL0Ijcs" },
      ],
    },
    {
      title: "PolyGen: Fully Synthetic Vision-Language Training via Multi-Generator Ensembles",
      authors:
        "Leonardo Brusini, Cristian Sbrolli, Eugenio Lomurno, Toshihiko Yamasaki, Matteo Matteucci",
      venue: "arXiv preprint, 2026",
      year: 2026,
      type: "Preprint",
      featured: true,
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2602.01370" }],
    },
    {
      title: "SCENEFORGE: Enhancing 3D-text alignment with Structured Scene Compositions",
      authors: "Cristian Sbrolli, Matteo Matteucci",
      venue: "NeurIPS 2025 presentation / arXiv preprint",
      year: 2025,
      type: "Conference / Preprint",
      featured: true,
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2509.15693" },
        { label: "NeurIPS", url: "https://neurips.cc/virtual/2025/poster/119379" },
        { label: "Project page", url: "https://mortorit.github.io/sceneforge-neurips2025/" },
      ],
    },
    {
      title: "Neuro-Symbolic Scene Graph Conditioning for Synthetic Image Dataset Generation",
      authors:
        "Giacomo Savazzi, Eugenio Lomurno, Cristian Sbrolli, Agnese Chiatti, Matteo Matteucci",
      venue: "LOD 2025 Best Paper Award / arXiv preprint",
      year: 2025,
      type: "Awarded preprint",
      featured: false,
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2503.17224" },
        { label: "LOD award", url: "https://lod2025.icas.events/best-paper-award/" },
      ],
    },
    {
      title: "Your image generator is your new private dataset",
      authors: "Nicolò Francesco Resmini, Eugenio Lomurno, Cristian Sbrolli, Matteo Matteucci",
      venue: "Image and Vision Computing, 2025",
      year: 2025,
      type: "Journal",
      featured: true,
      links: [
        {
          label: "Journal",
          url: "https://www.sciencedirect.com/science/article/pii/S0262885625003154",
        },
        { label: "Preprint", url: "https://dblp.org/rec/journals/corr/abs-2504-04582" },
      ],
    },
    {
      title: "Deep Multimodal Fusion for 2D-3D Vineyard Scene Understanding",
      authors: "Mirko Usuelli, Cristian Sbrolli, Alessio Braccini, Matteo Frosi, Matteo Matteucci",
      venue: "ICIAP 2025",
      year: 2025,
      type: "Conference",
      featured: false,
      links: [
        { label: "Springer", url: "https://link.springer.com/book/10.1007/978-3-032-10185-3" },
        { label: "DBLP", url: "https://dblp.org/rec/conf/iciap/UsuelliSBFM25" },
      ],
    },
    {
      title:
        "No Captions, No Problem: Captionless 3D-CLIP Alignment with Hard Negatives via CLIP Knowledge and LLMs",
      authors: "Cristian Sbrolli, Matteo Matteucci",
      venue: "BMVC 2024",
      year: 2024,
      type: "Conference",
      featured: true,
      links: [
        { label: "BMVC", url: "https://bmvc2024.org/proceedings/32/" },
        { label: "arXiv", url: "https://arxiv.org/abs/2406.02202" },
      ],
    },
    {
      title: "Can Shape-Infused Joint Embeddings Improve Image-Conditioned 3D Diffusion?",
      authors: "Cristian Sbrolli, Paolo Cudrano, Matteo Matteucci",
      venue: "IJCNN 2024",
      year: 2024,
      type: "Conference",
      featured: false,
      links: [
        { label: "OpenReview", url: "https://openreview.net/forum?id=RHL4y6iUsh" },
        { label: "IEEE", url: "https://ieeexplore.ieee.org/document/10649907/" },
      ],
    },
    {
      title: "CISPc: Embedding Images and Point Clouds in a Joint Concept Space by Contrastive Learning",
      authors: "Cristian Sbrolli, Paolo Cudrano, Matteo Matteucci",
      venue: "ICIAP 2023",
      year: 2023,
      type: "Conference",
      featured: false,
      links: [
        { label: "Springer", url: "https://link.springer.com/chapter/10.1007/978-3-031-43153-1_39" },
        { label: "DBLP", url: "https://dblp.org/rec/conf/iciap/SbrolliCM23" },
      ],
    },
    {
      title: "Formal Modeling and Verification of Multi-Robot Interactive Scenarios in Service Settings",
      authors:
        "Livia Lestingi, Cristian Sbrolli, Pasquale Scarmozzino, Giorgio Romeo, Marcello M. Bersani, Matteo Rossi",
      venue: "FormaliSE 2022",
      year: 2022,
      type: "Conference",
      featured: false,
      links: [
        { label: "Researchr", url: "https://conf.researchr.org/details/icse-2022/formalise-2022/4/Formal-Modeling-and-Verification-of-Multi-Robot-Interactive-Scenarios-in-Service-Sett" },
        { label: "Polimi", url: "https://re.public.polimi.it/handle/11311/1218320" },
      ],
    },
    {
      title: "IC3D: Image-Conditioned 3D Diffusion for Shape Generation",
      authors: "Cristian Sbrolli, Paolo Cudrano, Matteo Frosi, Matteo Matteucci",
      venue: "CoRR preprint, 2022",
      year: 2022,
      type: "Preprint",
      featured: false,
      links: [
        { label: "DBLP", url: "https://dblp.org/rec/journals/corr/abs-2211-10865" },
        { label: "Thesis record", url: "https://www.politesi.polimi.it/handle/10589/201384" },
      ],
    },
  ],
};
