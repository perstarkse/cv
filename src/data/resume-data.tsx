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
  "Equally invested in the fields of technology and social sciences, I channel my dual expertise into impactful community building and political engagement, serving as a member of the social welfare board. My work is informed by an intrinsic motivation to foster communal ties and drive societal progress through both my technical projects and political endeavors.",
  avatarUrl: "https://avatars.githubusercontent.com/u/yourusername?v=4",
  personalWebsiteUrl: "https://perstark.xyz",
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
      school: "Örebro Universitet",
      degree: "Psychologist degree, Masters",
      start: "2011",
      end: "2016",
    },
    {
      school: "EC Utbildningar",
      degree: "Fullstack .NET Developer",
      start: "2022",
      end: "Current",
    },
    {
      school: "Udemy",
      degree: "Ethereum Blockchain Developer Bootcamp With Solidity",
      start: "2022",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Region Örebro Län",
      link: "https://regionorebrolan.se",
      badges: ["Certified Psychologist", "Personality assessment", "CBT"],
      title: "Certified Psychologist",
      // logo: AmbitLogo, // Placeholder
      start: "2018",
      end: "2023",
      description:
        "Specialized in psychological assessment and evidence-based psychological treatment, primarily CBT. Development of control regarding flow and work around patients with mental illness.",
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
        "Psychological assessment and evidence-based psychological treatment. Specialization regarding trauma related disorders as well as neuropsychiatric disorders.",
    },
    {
      company: "TIQQE AB",
      link: "https://tiqqe.com",
      badges: ["Remote", "IT Consulting", "AWS Partner", "Serverless"],
      title: "Software Developer",
      // logo: BarepapersLogo, // Placeholder
      start: "2022",
      end: "Current",
      description:
        "Software development of serverless applications in AWS using TypeScript and Vue. Using AI to solve real problems for clients.",
    },
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
      "Psychological Assessments",
      "Evidence-based Psychological Treatment",
      "CBT",
      "Neuropsychiatric Assessments",
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
      description: "Tracking student sentiment in discord chat and analyzing with regard to psychological variables pertaining stress.",
      logo: TastyCloudLogo, // Placeholder
      link: {
        label: "sentiment",
        href: "https://sentiment.perstark.xyz/",
      },
    },
    {
      title: "AI frontend Lekebergs kommun invoices",
      techStack: [
        "Side Project",
        "Python",
        "TypeScript",
        "Vue",
        "Large language models",
      ],
      description: "Using LLMs to provide a frontend to a dataset containing Lekebergs kommun invoices.",
      logo: TastyCloudLogo, // Placeholder
      link: {
        label: "Lekberg Invoices",
        href: "https://lekebergsfakturor.perstark.xyz/",
      },
    },
    {
      title: "Personal Website (legacy)",
      techStack: ["Side Project", "TypeScript", "React", "Solidity", "Blockchain"],
      description: "Personal website, including a NFT mint with generated profile pictures, also showcasing old projects.",
      logo: YearProgressLogo, // Placeholder
      link: {
        label: "legacy",
        href: "https://perstark.xyz/",
      },
    }
    // ... Add other projects here
  ],
} as const; 
