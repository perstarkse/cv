import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
  TiqqeLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Per Stark",
  initials: "PS",
  location: "Örebro, Sweden, CET",
  locationLink: "https://www.google.com/maps/place/Orebro",
  about:
  "A builder at heart and a psychologist by training. Interested in all sorts of things, always enjoying a challenge. My hands-on approach is driven by a passion for creating and problem-solving.",
  summary:
  "Equally invested in the fields of technology and social sciences, I channel my dual expertise into impactful community building and political engagement, serving as a member of the social welfare board of my local commune since 2023. My work is informed by an intrinsic motivation to do good and drive societal progress through both my technical projects and political endeavors. Enthusiastic about open source development.",
  avatarUrl: "https://media.licdn.com/dms/image/C4D03AQETQ5PcQZXyOw/profile-displayphoto-shrink_800_800/0/1594379517061?e=1709769600&v=beta&t=q9L9D2lu4mYj0mZIR5GM4Si9WyXuISYDTUxH5q8eTcI",
  personalWebsiteUrl: "https://cv.perstark.xyz",
  contact: {
    email: "perstark.se@gmail.com",
    tel: "+4670276752",
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
      }
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
      end: "Current",
      description:
        "Software development of serverless applications in AWS using TypeScript and Vue. Using AI to solve real problems for clients.",
    },
    {
      company: "Region Örebro Län",
      link: "https://regionorebrolan.se",
      badges: [ "Assessment","Evidence-based treatment"],
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
    // {
    //   company: "Region Värmland",
    //   link: "https://regionvarmland.se",
    //   badges: ["Primary care", "CBT"],
    //   title: "PTP Psychologist",
    //   // logo: AmbitLogo, // Placeholder
    //   start: "2016",
    //   end: "2017",
    //   description:
    //     "Psychologist at primary care center. Psychological assessment and evidence-based psychological treatment. Process to become a certified psychologist.",
    // }
  ],
  skills: 
    [
      "TypeScript",
      "JavaScript",
      "Large language models",
      "Python",
      "C#",
      ".NET",
      "Vue",
      "Solidity",
      "EVM",
      "Docker",
      "AWS",
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
      description: "Tracking student sentiment in discord chat and analyzing with regard to psychological variables pertaining stress using LLMs. Moving beyond simple sentiment analysis to provide a more nuanced understanding of the data.",
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
      description: "Using LLMs to provide a more engaging approach to displaying a dataset containing Lekebergs kommun invoices. Making the data more accessible and easier to understand.",
      // logo: TastyCloudLogo, // Placeholder
      link: {
        label: "Lekberg Invoices",
        href: "https://lekebergsfakturor.perstark.xyz/",
      },
    },
    {
      title: "SynthwavePunks",
      techStack: ["Side Project", "TypeScript", "React", "Solidity", "Blockchain", "NFT"],
      description: "NFT mint with AI generated profile pictures, using stable-diffusion in 2022.",
      link: {
        label: "SynthwavePunks",
        href: "https://synthwavepunks.perstark.xyz/",
      },
    },
    {
      title: "NixOS Configuration",
      techStack: ["NixOS", "Nix", "Shell", "Linux", "DevOps"],
      description: "NixOS configuration for my different systems, ensuring reproducibility.",
      // logo: TastyCloudLogo, // Placeholder
      link: {
        label: "NixOS",
        href: "https://github.com/perstarkse/nixos-config/",
      },
    }
  ],
} as const; 
