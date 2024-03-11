import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Per Stark",
  initials: "PS",
  location: "Örebro, Sweden, CET",
  locationLink: "https://www.google.com/maps/place/Orebro",
  about: "Software Developer & Psychologist",
  // "A builder at heart, a psychologist by training, and a problem-solver by nature. Interested in all sorts of things, always enjoying a challenge. My hands-on approach is driven by a passion for creating and problem-solving.",
  // "A highly motivated and results-oriented Full Stack Developer with a strong interest in computer science and a passion for solving complex problems. My background in psychology has equipped me with exceptional analytical, problem-solving, and communication skills, which I leverage to create user-friendly and effective software solutions. \n\n I am proficient in a wide range of programming languages and technologies, including TypeScript, .NET, JavaScript, Vue, React, and AWS. I am also an enthusiastic open source developer and have contributed to several projects on GitHub. I am eager to apply my skills and experience to develop innovative and impactful software solutions that make a positive difference in the world.",
  summary: `A highly motivated and results-oriented software developer with a strong interest in computer science and a passion for solving complex problems. My background in psychology has equipped me with exceptional analytical, problem-solving, and communication skills, which I leverage to create user-friendly and effective software solutions.
    Proven ability to work effectively with a variety of programming languages and technologies, adapting to the specific requirements of each project. I am also an enthusiastic open source developer and have contributed to several projects on GitHub.
    `,
  avatarUrl:
    "https://media.licdn.com/dms/image/C4D03AQETQ5PcQZXyOw/profile-displayphoto-shrink_800_800/0/1594379517061?e=1715817600&v=beta&t=-dY2L00a5rge_4CEG03bjR9Pc5JGmOARfOE6nA9eLNk",
  personalWebsiteUrl: "https://cv.perstark.xyz",
  contact: {
    email: "perstark.se@gmail.com",
    tel: "+46760276752",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/perstarkse",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/per-stark/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "EC Utbildningar",
      degree: "Fullstack .NET Developer",
      start: "2022",
      end: "2024",
    },
    {
      school: "Udemy",
      degree: "Ethereum Blockchain Developer Bootcamp With Solidity",
      start: "2022",
      end: "2022",
    },
    {
      school: "Örebro Universitet",
      degree: "Psykologexamen (Psychologist), Master's in Psychology",
      start: "2011",
      end: "2016",
    },
    {
      school: "Karlstad Universitet",
      degree: "Tekniskt basår (Technical Preparatory Year)",
      start: "2010",
      end: "2011",
    },
  ],
  work: [
    {
      company: "TIQQE AB",
      link: "https://tiqqe.com",
      badges: ["IT Consulting", "AWS Partner", "Serverless"],
      title: "Full Stack Developer",
      // logo: TiqqeLogo, // Placeholder
      start: "2023",
      end: "2024",
      description:
        "Software development in a cloud environment. Utilized AI to solve complex problems and deliver innovative solutions for clients, including a semantic search solution. Presented on generative AI and its applications to a wide audience. Led client and sales meetings, demonstrating strong communication and stakeholder management skills. Contributed to the development of enterprise-scale software solutions.",
    },
    {
      company: "Region Örebro Län",
      link: "https://regionorebrolan.se",
      badges: ["Assessment", "Evidence-based treatment"],
      title: "Certified Psychologist",
      // logo: AmbitLogo, // Placeholder
      start: "2018",
      end: "2023",
      description:
        "Specialized in psychological assessment and evidence-based psychological treatment, primarily CBT. Development of control regarding flow and work around patients with mental illness. Responsible for psychological knowledge in interprofressional assessment team. Recurring media appearances as a way to spread psychological knowledge.",
    },
    {
      company: "Region Västra Götaland",
      link: "https://vgregion.se",
      badges: ["Neuropsychiatric assessment", "CBT"],
      title: "Certified Psychologist",
      // logo: AmbitLogo, // Placeholder
      start: "2017",
      end: "2018",
      description:
        "Psychological assessment and evidence-based psychological treatment. Specialization regarding trauma related disorders as well as neuropsychiatric disorders. Responsible for the psychological knowledge at the clinic.",
    },
  ],
  noteableAchievements: [
    {
      title: "Part time politican in Lekebergs kommun",
      description:
        "Serving in the social committee, working with the budget and the social welfare of the municipality.",
    },
    {
      title: "Media appearances as a psychologist",
      description:
        "Recurring media appearances as a way to spread psychological knowledge.",
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "Python",
    "C#",
    ".NET",
    "Vue/Nuxt",
    "React/NextJs",
    "Solidity",
    "Linux",
    "Docker",
    "AWS",
    "Machine Learning",
    "Generative AI",
    "Psychological Assessments",
    "Evidence-based Psychological Treatment",
    "CBT",
    "Neuropsychiatric Assessments",
    "Trauma-related Disorders",
  ],
  projects: [
    {
      title: "Student Sentiment Analysis",
      techStack: [
        "Side Project",
        "Python",
        "TypeScript",
        "Vue",
        "Large language models",
      ],
      description:
        "Tracking student sentiment in discord chat and analyzing with regard to psychological variables pertaining stress using LLMs. Moving beyond simple sentiment analysis to provide a more nuanced understanding of the data.",
      // logo: TastyCloudLogo, // Placeholder
      link: {
        label: "sentiment",
        href: "https://sentiment.perstark.xyz/",
      },
    },
    {
      title: "AI Frontend Lekebergs Kommun Invoices",
      techStack: [
        "Side Project",
        "Python",
        "TypeScript",
        "Vue",
        "Large language models",
      ],
      description:
        "Using LLMs to provide a more engaging approach to displaying a dataset containing Lekebergs kommun invoices. Making the data more accessible and easier to understand.",
      // logo: TastyCloudLogo, // Placeholder
      link: {
        label: "Lekberg Invoices",
        href: "https://lekebergsfakturor.perstark.xyz/",
      },
    },
    {
      title: "SynthwavePunks",
      techStack: [
        "Side Project",
        "TypeScript",
        "React",
        "Solidity",
        "Blockchain",
        "NFT",
      ],
      description:
        "NFT mint with AI generated profile pictures, using stable-diffusion in 2022.",
      link: {
        label: "SynthwavePunks",
        href: "https://synthwavepunks.perstark.xyz/",
      },
    },
    {
      title: "NixOS Configuration",
      techStack: ["NixOS", "Nix", "Shell", "Linux", "DevOps"],
      description:
        "NixOS configuration for my different systems, ensuring reproducibility.",
      // logo: TastyCloudLogo, // Placeholder
      link: {
        label: "NixOS",
        href: "https://github.com/perstarkse/nixos-config/",
      },
    },
  ],
} as const;
