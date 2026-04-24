import type ko from "./ko";

type KoDict = typeof ko;

const en: KoDict = {
  meta: {
    title: "Bitcoinology Lab — Where Money, Code, Culture Converge",
    description:
      "An interdisciplinary research hub exploring how value, trust, and society are being reconstituted in the age of digital money and artificial intelligence.",
  },
  nav: {
    links: [
      {
        label: "About",
        children: [
          { label: "Greeting", href: "/about/greeting" },
          { label: "Mission", href: "/about/mission" },
          { label: "History", href: "/about/history" },
          { label: "Organization", href: "/about/structure" },
          { label: "Partners", href: "/about/partners" },
          { label: "Location", href: "/about/location" },
        ],
      },
      {
        label: "News",
        children: [{ label: "Press", href: "/news" }],
      },
      {
        label: "Academic Events",
        children: [{ label: "Colloquium", href: "/academics/colloquium" }],
      },
      {
        label: "Programs",
        children: [
          { label: "Executive Program", href: "/programs/executive" },
          { label: "Graduate Program", href: "/programs/graduate" },
        ],
      },
      {
        label: "Resources",
        children: [
          { label: "Monographs", href: "/resources/monographs" },
          { label: "Papers", href: "/resources/papers" },
          { label: "Reports", href: "/resources/reports" },
          { label: "Photos", href: "/resources/photos" },
        ],
      },
    ],
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    eyebrow: "Value, Code, Society",
    title: "Bitcoinology Lab",
    tagline: {
      prefix: "Proving the nature of money through ",
      highlight: "scholarship",
      suffix: ".",
    },
    body:
      "Bitcoinology Lab is an interdisciplinary research hub that examines, through the humanities, how value, trust, and society are being reconstituted in the era of digital money and artificial intelligence.",
    ctaResearch: "Explore Research",
    ctaPrograms: "View Programs",
  },
  highlights: {
    eyebrow: "News & Events",
    title: "Latest Highlights",
    body:
      "A snapshot of Bitcoinology Lab's latest colloquia, monographs, and press coverage.",
    readMore: "Read more",
    viewArticle: "Read article",
    prev: "Previous",
    next: "Next",
  },
  about: {
    eyebrow: "Research Areas",
    title: "Research Areas",
    body:
      "We investigate, through the humanities, how value, trust, and society are reconstituted in the age of digital money and artificial intelligence.",
    coreResearchBadge: "Core Research",
    areas: [
      {
        title: "The Humanities of Value, Trust, and Society",
        description:
          "Reading Bitcoin as a civilizational experiment, we analyze how modes of communal coordination, legitimation of authority, and the meaning of money and freedom are being reshaped.",
        image: "/research-areas/value-trust.png",
        featured: true,
      },
      {
        title: "Infrastructures of Computational Trust",
        description:
          "Blockchain, platforms, and AI-driven decision systems are examined through philosophy, ethics, and political thought as infrastructures and imaginaries of computational trust.",
        image: "/research-areas/computational-trust.png",
      },
      {
        title: "Interdisciplinary Integration",
        description:
          "We connect philosophy, literary and cultural studies, intellectual history, ethics, political thought, and science and technology studies (STS), combined with empirical work on markets, regulation, and everyday practice.",
        image: "/research-areas/interdisciplinary.png",
      },
      {
        title: "Scholarly Rigor and Public Insight",
        description:
          "Through seminars, workshops, publications, and joint projects, we produce both rigorous scholarship and public insight toward a more responsible future.",
        image: "/research-areas/scholarly-insight.png",
      },
    ],
  },
  programs: {
    eyebrow: "Programs",
    title: "Programs",
    tabs: {
      executive: "Executive Program",
      graduate: "Graduate Program",
    },
    detailCta: "Learn more →",
    deptCta: "Department →",
    executive: {
      title: "Executive Program in Bitcoin & Monetary Philosophy",
      subtitle: "Bitcoin & Monetary Philosophy Executive Program",
      description:
        "Bitcoin, as an intellectual phenomenon, reveals that every issue surrounding money is an \"ancient future.\" The program defines Bitcoin not as mere technology but as a monetary phenomenon, analyzing its economic, political, and cultural implications across disciplines.",
      highlights: [
        { label: "Director", value: "Seong-ho Yoon" },
        {
          label: "Faculty",
          value: "21 experts (academia, industry, policy)",
        },
        { label: "Audience", value: "Executives, policymakers, professionals" },
      ],
    },
    graduate: {
      title: "Graduate Cooperative Program in Bitcoin & Monetary Philosophy",
      subtitle:
        "Graduate Cooperative Program in Bitcoin & Monetary Philosophy",
      description:
        "An inter-departmental cooperative program within the College of Humanities, studying the economic, political, and cultural shifts brought by digital money and blockchain technology from a humanistic perspective. Awards the Master of Arts degree, with an annual intake of 20 students.",
      highlights: [
        { label: "Degree", value: "Master of Arts" },
        {
          label: "Credits",
          value: "27+ credits (18+ in major)",
        },
        { label: "Annual Intake", value: "20 students" },
      ],
    },
  },
  resources: {
    eyebrow: "Resources",
    title: "Research Resources",
    body:
      "Monographs, academic papers, and policy reports from Bitcoinology Lab.",
    tabs: {
      monograph: "Monographs",
      paper: "Papers",
      report: "Policy Reports",
    },
    monographBadge: "Monograph",
    authorSuffix: "",
    isbnPrefix: "ISBN",
    moreLink: "Read more",
  },
  footer: {
    cta: {
      eyebrow: "Join Us",
      title: "Join us in shaping this research.",
      body:
        "We welcome researchers, students, and institutions who want to build the future of Bitcoin and monetary philosophy with us.",
      contact: "Contact Us",
      viewPrograms: "View Programs",
    },
    groups: [
      {
        title: "About",
        links: [
          { label: "Greeting", href: "/about/greeting" },
          { label: "Mission", href: "/about/mission" },
          { label: "History", href: "/about/history" },
          { label: "Organization", href: "/about/structure" },
          { label: "Partners", href: "/about/partners" },
          { label: "Location", href: "/about/location" },
        ],
      },
      {
        title: "News",
        links: [{ label: "Press", href: "/news" }],
      },
      {
        title: "Programs",
        links: [
          { label: "Executive Program", href: "/programs/executive" },
          { label: "Graduate Program", href: "/programs/graduate" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Monographs", href: "/resources/monographs" },
          { label: "Papers", href: "/resources/papers" },
          { label: "Reports", href: "/resources/reports" },
          { label: "Photos", href: "/resources/photos" },
        ],
      },
    ],
    copyright: "Bitcoinology Lab",
    contacts: {
      email: "iamyam@hanyang.ac.kr",
      phone: "+82-2-2220-0751",
      address: "222 Wangsimni-ro, Seongdong-gu, Seoul",
      deptLink: "Dept. of Bitcoin Philosophy →",
    },
  },
  aboutPage: {
    backHome: "Home",
    eyebrowAbout: "About Bitcoinology Lab",
    title: "About the Lab",
    intro:
      "Bitcoinology Lab is an interdisciplinary research hub that examines, through the humanities, how value, trust, and society are being reconstituted as digital money converges with artificial intelligence.",
    sections: {
      bitcoinology: {
        eyebrow: "Greeting",
        title: "Greeting — What is Bitcoinology?",
        paragraphs: [
          {
            type: "mixed",
            parts: [
              {
                text:
                  "\"Bitcoinology\" treats Bitcoin not as a mere technology or speculative asset, but as a civilizational experiment that triggers ",
              },
              {
                text:
                  "the computation and institutionalization of trust, the reconfiguration of money and sovereignty, and the redefinition of freedom and community",
                strong: true,
              },
              { text: "." },
            ],
          },
          {
            type: "mixed",
            parts: [
              {
                text:
                  "The lab connects philosophy, literary and cultural studies, intellectual history, ethics, political thought, and science and technology studies (STS) to analyze the infrastructures and imaginaries of ",
              },
              { text: "computational trust", strong: true },
              {
                text:
                  " — including blockchain, platforms, and AI-based decision systems.",
              },
            ],
          },
          {
            type: "plain",
            text:
              "Grounded in conceptual analysis and close reading, we combine empirical research on markets, regulation, and everyday practice to make sense of real-world change. Through seminars, workshops, publications, and joint projects, we aim to produce both scholarly rigor and public insight.",
          },
        ],
        director: "Seong-ho Yoon",
        directorRole:
          "Director, Bitcoinology Lab · Professor, Dept. of English Language and Literature, Hanyang University",
      },
      mission: {
        eyebrow: "Mission",
        title: "Our Mission",
        items: [
          {
            num: "01",
            title: "The Humanities of Value, Trust, and Society",
            desc:
              "Reading Bitcoin as a civilizational experiment, we analyze how modes of communal coordination, legitimation of authority, and the meaning of money and freedom are being reshaped.",
          },
          {
            num: "02",
            title: "Infrastructures of Computational Trust",
            desc:
              "Blockchain, platforms, and AI-driven decision systems are examined through philosophy, ethics, and political thought as infrastructures and imaginaries of computational trust.",
          },
          {
            num: "03",
            title: "Interdisciplinary Integration",
            desc:
              "We connect philosophy, literary and cultural studies, intellectual history, ethics, political thought, and STS, combined with empirical work on markets, regulation, and everyday practice.",
          },
          {
            num: "04",
            title: "Scholarly Rigor and Public Insight",
            desc:
              "Through seminars, workshops, publications, and joint projects, we produce both rigorous scholarship and public insight toward a more responsible future.",
          },
        ],
      },
      history: {
        eyebrow: "History",
        title: "History",
        items: [
          {
            date: "2025.07",
            event: "Launch of the Graduate Cooperative Program in Bitcoin & Monetary Philosophy",
          },
          {
            date: "2025.01",
            event: "Launch of the Bitcoinology Lab Monograph Series",
          },
          { date: "2024.05", event: "Bitcoinology Lab founded" },
          {
            date: "2024.03",
            event:
              "1st Executive Program in Bitcoin & Monetary Philosophy opens",
          },
          {
            date: "2024.02",
            event:
              "Graduate Cooperative Program in Bitcoin & Monetary Philosophy officially approved",
          },
        ],
      },
      organization: {
        eyebrow: "Organization",
        title: "Organization",
        directorRole: "Director",
        director: {
          name: "Prof. Seong-ho Yoon",
          dept: "Dept. of English Language and Literature",
        },
        groups: [
          {
            title: "Affiliated Faculty",
            members: [
              { name: "Tae-min Oh", dept: "Bitcoin & Monetary Philosophy" },
              { name: "Sang-wook Lee", dept: "Philosophy" },
              {
                name: "Kwang-hee Lee",
                dept: "Popular Culture & Scenario Studies",
              },
              { name: "Seung-woo Kim", dept: "History" },
              { name: "Hyung-seop Lee", dept: "English Literature" },
              {
                name: "Seong-hwan Shin",
                dept: "Future Humanities Convergence",
              },
            ],
          },
          {
            title: "Advisory Board",
            members: [
              {
                name: "Nam-ki Hong",
                dept:
                  "Former Deputy Prime Minister · Minister of Economy and Finance",
              },
              {
                name: "Ho-joo Yoon",
                dept: "Director, Hanyang University Medical Center",
              },
              {
                name: "Gyu-chang Yu",
                dept:
                  "Former Dean, College of Business · Former Director, Paiknam Academic Information Center",
              },
              {
                name: "Pan-gyu Kim",
                dept:
                  "Former Ambassador to Nigeria · Former Superintendent, Korea Naval Academy",
              },
              { name: "Jin-woo Jeon", dept: "Partner CPA, Samil PwC" },
              {
                name: "Jae-sung Hwang",
                dept: "Head of Hedge Fund Management, Leading Investment",
              },
              { name: "Won-hee Lee", dept: "CEO, Lee Won-hee Tax & Accounting" },
            ],
          },
          {
            title: "Research Fellows",
            members: [
              { name: "Sung-hyun Kim", dept: "" },
              { name: "Seung-jong Lee", dept: "" },
              { name: "Dae-hong Kang", dept: "" },
              { name: "Chang-jun Lee", dept: "Graduate Research Assistant" },
            ],
          },
        ],
      },
      partners: {
        eyebrow: "Partners",
        title: "Partners",
        items: [
          {
            name: "Digital Humanities Engineering Center, KNU",
            nameEn: "Digital Humanities Engineering Center",
            image: "/partners/dhec.jpeg",
          },
          {
            name: "OtaVerse Inc.",
            nameEn: "OtaVerse Inc.",
            image: "/partners/otaverse.png",
          },
        ],
      },
      sponsors: {
        eyebrow: "Sponsors",
        title: "Sponsors",
        items: [
          {
            name: "Mobickers Inc.",
            nameEn: "Mobickers Inc.",
            image: "/partners/mobickers.png",
          },
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "Contact",
        email: "Email",
        phone: "Phone",
        address: "Address",
        addressValue:
          "Hanyang University, 222 Wangsimni-ro, Seongdong-gu, Seoul, Korea",
      },
    },
  },
  newsPage: {
    backHome: "Home",
    eyebrow: "News",
    title: "News",
    body: "Press coverage and recent news from Bitcoinology Lab.",
    pressEyebrow: "Press",
    pressTitle: "Press Coverage",
    articleLink: "Read article",
  },
  colloquiumPage: {
    backHome: "Home",
    eyebrow: "Colloquium",
    title: "Colloquium",
    body:
      "A colloquium series hosted by Hanyang University's Department of Bitcoin & Monetary Philosophy. Leading voices share frontier perspectives on digital money, trust, and society.",
    listEyebrow: "Upcoming & Past",
    listTitle: "Colloquium Schedule",
    statusUpcoming: "Upcoming",
    statusPast: "Past",
    topicLabel: "Topic",
    speakerLabel: "Speaker",
    dateLabel: "Date",
    venueLabel: "Venue",
    hostLabel: "Host",
    posterAlt: "Colloquium poster",
  },
  executivePage: {
    back: "Programs",
    eyebrow: "Executive Program",
    title: "Executive Program in Bitcoin & Monetary Philosophy",
    intro:
      "Bitcoin, as an intellectual phenomenon, reveals that every issue surrounding money is an \"ancient future.\" This program defines Bitcoin not as a mere technology or economic phenomenon but as a monetary phenomenon, examining the emergence of new financial forms alongside their impact on human values and social structures.",
    stats: [
      { label: "Director", value: "Seong-ho Yoon" },
      { label: "Faculty", value: "21 experts" },
      { label: "Audience", value: "Executives · Policymakers · Professionals" },
    ],
    curriculumEyebrow: "Curriculum",
    curriculumTitle: "Curriculum",
    contactTitle: "Interested in joining?",
    contactBody: "For inquiries about the Executive Program, please reach out.",
    contactCta: "Contact Us →",
  },
  graduatePage: {
    back: "Programs",
    eyebrow: "Graduate Cooperative Program",
    title: "Graduate Cooperative Program in Bitcoin & Monetary Philosophy",
    intro:
      "An inter-departmental cooperative program within the College of Humanities. We study the economic, political, and cultural transformations brought by digital money and blockchain technology through a humanistic lens — aspiring to become an academic hub that interprets decentralized money, a central concern of the Fourth Industrial Revolution, across disciplines.",
    purposeEyebrow: "Purpose",
    purposeTitle: "Purpose",
    purposeBody:
      "The program was founded to respond to an era of inflection points — the mainstreaming of digital assets, the reshaping of traditional financial platforms, and the spread of decentralized governance (DAOs). We pursue integrative research across philosophy, economics, and political science, critically examining the value, ethical, and institutional implications of the blockchain ecosystem.",
    goalsEyebrow: "Education Goals",
    goalsTitle: "Education Goals",
    goals: [
      "Cultivate theoretical capacity to interpret the Bitcoin phenomenon scholarly, building on traditions of monetary, financial, and information philosophy.",
      "Develop critical analysis of blockchain governance, political-economic structures, and issues in digital ethics.",
      "Strengthen integrative research that connects DAOs, smart contracts, and the metaverse to real-world problem-solving.",
      "Foster global research and collaboration capacity through participation in international academic networks.",
    ],
    curriculumEyebrow: "Curriculum",
    curriculumTitle: "Curriculum",
    curriculum: {
      "Semester 1": {
        "Year 1": [
          "Intellectual History of Bitcoin",
          "Topics in the Philosophy of Information",
          "Bitcoin as a Monetary Phenomenon",
          "Bitcoin Technology and Industry",
        ],
        "Year 2": [
          "Crypto Cultural Studies",
          "Political Philosophy of the DAO",
          "Geopolitics of Bitcoin and the Dollar",
          "History of Money",
        ],
      },
      "Semester 2": {
        "Year 1": [
          "Topics in Digital Ethics",
          "The Humanities and Economics of the Metaverse",
          "Foundations of International Finance",
          "Master's Thesis Writing",
        ],
        "Year 2": [
          "Supply-Chain Finance and Smart Contracts",
          "Key Figures in Cryptocurrency",
          "Key Figures in Crypto",
          "Philosophy of Money and Language",
        ],
      },
    },
    requirementsEyebrow: "Requirements",
    requirementsTitle: "Requirements",
    requirements: [
      { label: "Degree", value: "Master of Arts" },
      { label: "Credits", value: "27+ regular credits" },
      { label: "Major Credits", value: "18+ credits" },
      { label: "Annual Intake", value: "20 students" },
      {
        label: "Graduation",
        value:
          "Comprehensive exam → thesis advising → thesis defense",
      },
    ],
    careersEyebrow: "Career Paths",
    careersTitle: "Career Paths",
    careers: [
      {
        title: "Academia & Research",
        desc: "Researchers in blockchain philosophy, digital ethics, financial humanities",
      },
      {
        title: "Fintech & Crypto",
        desc: "Policy, strategy, and governance consultants",
      },
      {
        title: "Regulation",
        desc: "Policy researchers at digital-asset regulators",
      },
      {
        title: "Media & Criticism",
        desc: "Critics of digital finance and blockchain culture",
      },
      {
        title: "International & NGO",
        desc: "Project managers in inclusive finance",
      },
    ],
    careersBody:
      "Industry scholarships, research-center networks, and ties with the Executive Program actively support career pathways.",
    contactTitle: "Interested in applying?",
    contactBody:
      "For inquiries about the Graduate Cooperative Program, please reach out.",
    contactCta: "Contact Us →",
    phoneCta: "+82-2-2220-0751",
    deptCta: "Department →",
  },
  monographs: {
    eyebrow: "Monograph Series",
    title: "Monographs",
    body:
      "The Hanyang University Monograph Series on Bitcoin and the Humanities — scholarly books from the Bitcoinology Lab research team.",
    badge: "Monograph",
    authorSuffix: "",
    isbnPrefix: "ISBN",
  },
  academics: {
    eyebrow: "Events & Activities",
    title: "Events & Activities",
    body:
      "Browse the history of seminars, colloquia, and conferences hosted by Bitcoinology Lab.",
    emptyMessage: "Event listings will appear here when available.",
    cmsHint: "Entries registered in Sanity CMS will appear automatically.",
    speakerPrefix: "Speaker:",
    categories: {
      seminar: "Seminar",
      colloquium: "Colloquium",
      conference: "Conference",
      workshop: "Workshop",
    },
  },
  research: {
    eyebrow: "Publications",
    title: "Publications",
    body: "Key publications and research outputs from Bitcoinology Lab.",
    authorLabel: "Author",
    publisherLabel: "Publisher",
    more: "Read more",
    emptyMessage: "Publications will appear here when available.",
    cmsHint:
      "Publications registered in Sanity CMS will appear automatically.",
  },
  gallery: {
    eyebrow: "Beyond the Page",
    title: "Beyond the Page",
    body:
      "Book talks, Executive Program lectures, alumni gatherings, and other Bitcoinology Lab activities in the field.",
    more: "See more activity →",
  },
  detail: {
    emptyBody:
      "No body content yet. Please add content from the admin panel.",
    downloadFile: "Download file",
    details: "Details",
  },
};

export default en;
