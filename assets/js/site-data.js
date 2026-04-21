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
      url: "",
      kind: "disabled",
      note: "Add your profile URL in assets/js/site-data.js",
    },
    linkedin: {
      label: "LinkedIn",
      url: "",
      kind: "disabled",
      note: "Add your profile URL in assets/js/site-data.js",
    },
  },
  focus: [
    {
      title: "Multimodal representation learning",
      description:
        "I work on shared embedding spaces that let models reason across images, text, and 3D data instead of treating them as isolated domains.",
    },
    {
      title: "Synthetic data generation",
      description:
        "I am interested in controllable synthetic pipelines that are not just visually plausible, but actually useful for downstream learning.",
    },
    {
      title: "3D understanding and generation",
      description:
        "From image-conditioned 3D diffusion to text-3D alignment, I keep returning to the challenge of grounding structure in geometry.",
    },
    {
      title: "Compositional reasoning",
      description:
        "I like exposing where current models fail on relations, binding, and structure, then designing methods and benchmarks that push them further.",
    },
  ],
  playlists: [
    {
      title: "Power Mode Placeholder",
      subtitle: "Fast riffs, clean choruses, dramatic stamina.",
      badge: "YouTube Music placeholder",
      url: "https://music.youtube.com/",
    },
    {
      title: "Fantasy Raid Placeholder",
      subtitle: "Symphonic textures and album-art energy for long writing sessions.",
      badge: "Replace with your playlist",
      url: "https://music.youtube.com/",
    },
    {
      title: "Progressive Focus Placeholder",
      subtitle: "Long-form arrangements for coding, revising, and late-night experiments.",
      badge: "Ready to swap",
      url: "https://music.youtube.com/",
    },
  ],
  news: [
    {
      date: "February 2026",
      title: "Released the Auto-Comp preprint.",
      body:
        "Auto-Comp proposes a scalable pipeline for probing compositional failures in contrastive vision-language models and was developed with Toshihiko Yamasaki and Matteo Matteucci.",
    },
    {
      date: "February 2026",
      title: "Released the PolyGen preprint.",
      body:
        "PolyGen explores fully synthetic vision-language training through multi-generator ensembles, with collaborators at Politecnico di Milano and the University of Tokyo.",
    },
    {
      date: "December 2025",
      title: "Presented SceneForge at NeurIPS 2025.",
      body:
        "SceneForge focuses on improving 3D-text alignment through structured scene compositions and was presented in San Diego at NeurIPS 2025.",
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
        "The work explored how symbolic structure can improve synthetic image generation for scene graph tasks.",
    },
  ],
  publications: [
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
