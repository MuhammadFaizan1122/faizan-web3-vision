export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  url?: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    slug: "orion-ai-agent",
    title: "Orion AI Agent",
    subtitle: "theorionai.app",
    description:
      "AI operating system for service businesses. Handles 24/7 customer conversations, lead capture, appointment booking, and automated reminders across WhatsApp, Telegram, Instagram, and web chat. Official WhatsApp Cloud API provider. Live in Pakistan & London.",
    image: "/assets/images/latest-portfolio/orion-ai.png",
    url: "https://theorionai.app",
    techStack: ["Next.js", "Node.js", "TypeScript", "WhatsApp API"],
  },
  // {
  //   slug: "jito-cabal",
  //   title: "Jito Cabal",
  //   subtitle: "jitocabal.com",
  //   description:
  //     "Built from scratch — full-stack NFT minting platform on Solana. Next.js frontend, MongoDB backend, Metaplex collection integration, and secure wallet authentication. End-to-end solo build.",
  //   image: "/assets/images/latest-portfolio/Jito-Cabal.png",
  //   url: "https://jitocabal.com",
  //   techStack: ["Next.js", "Solana", "MongoDB", "Metaplex"],
  // },
  {
    slug: "schindlersx",
    title: "SchindlersX",
    subtitle: "schindlersx.io",
    description:
      "Fractional ownership platform for tokenized real-world asset investment. Built with Next.js and Solana smart contract integration.",
    image: "/assets/images/latest-portfolio/scx.png",
    url: "https://schindlersx.io",
    techStack: ["Next.js", "Solana", "TypeScript"],
  },
  {
    slug: "everyone-world",
    title: "Everyone.world",
    subtitle: "everyone.world",
    description:
      "Built from scratch — world's first Social-TV global live stream platform. Full-stack: Next.js, Node.js, MongoDB, Ethereum smart contracts, and AWS infrastructure. Real-time video broadcasting at scale.",
    image: "/assets/images/latest-portfolio/everyone.png",
    url: "https://everyone.world",
    techStack: ["Next.js", "Node.js", "MongoDB", "Ethereum", "AWS"],
  },
  // {
  //   slug: "geniblox",
  //   title: "GeniBlox",
  //   subtitle: "geniblox-six.vercel.app",
  //   description:
  //     "Built from scratch — AI + blockchain platform with generative AI chatbot solutions for sales automation and customer support. Full-stack solo build integrating LLM APIs with blockchain features.",
  //   image: "/assets/images/latest-portfolio/geniblox.png",
  //   url: "https://geniblox-six.vercel.app",
  //   techStack: ["Next.js", "LLM APIs", "Blockchain", "Node.js"],
  // },
  {
    slug: "solana-toolset",
    title: "Solana Toolset",
    subtitle: "solana-toolset-ten.vercel.app",
    description:
      "Advanced Solana utility suite for token/NFT creation, MPL-404 assets, Candy Machines, and hybrid escrow swaps.",
    image: "/assets/images/latest-portfolio/solana-toolset.png",
    url: "https://solana-toolset-ten.vercel.app",
    techStack: ["Solana", "TypeScript", "Next.js"],
  },
  {
    slug: "koyal-pk",
    title: "Koyal.pk",
    subtitle: "koyal.pk",
    description:
      "Regional music and video streaming platform optimized for smooth playback and responsive mobile performance.",
    image: "/assets/images/latest-portfolio/koyal.png",
    url: "https://koyal.pk",
    techStack: ["Next.js", "Node.js", "MongoDB"],
  },
];
