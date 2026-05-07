export interface ServiceContent {
  slug: string;
  id: string;
  title: string;
  shortDesc: string;
  seoTitle: string;
  seoDescription: string;
  overview: string;
  benefits: string[];
  features: string[];
  process: { step: string; description: string }[];
  thumbnailUrl: string;
  icon: string;
}

export const servicesData: ServiceContent[] = [
  {
    slug: "ai-engineering-llms",
    id: "01.",
    title: "AI Engineering & LLMs",
    shortDesc: "Developing intelligent agents and automated SaaS solutions using GPT-4 and custom LLM APIs. Specialized in voice-enabled chatbots and AI-driven business process automation.",
    seoTitle: "AI Engineering & Custom LLM Integration Services",
    seoDescription: "Transform your business with custom AI solutions. I specialize in GPT-4 integration, LLM fine-tuning, voice chatbots, and intelligent SaaS automation architectures.",
    overview: "In today's fast-paced digital landscape, artificial intelligence is no longer a luxury—it's a necessity for scaling. My AI engineering services focus on bridging the gap between cutting-edge LLM capabilities and practical business needs. Whether you need a sophisticated customer service agent, an internal data-retrieval copilot, or a full-scale AI SaaS platform, I architect solutions that are intelligent, secure, and tailored to your unique workflows.",
    benefits: [
      "Reduce operational costs through intelligent automation.",
      "Enhance customer experience with 24/7 conversational agents.",
      "Unlock insights from unstructured data with advanced NLP.",
      "Scale operations without linearly scaling headcount."
    ],
    features: [
      "Custom GPT-4 & Anthropic Claude integrations",
      "RAG (Retrieval-Augmented Generation) architectures",
      "Voice-enabled AI and conversational interfaces",
      "LangChain & LlamaIndex framework expertise",
      "AI-driven workflow automation"
    ],
    process: [
      { step: "Discovery", description: "Identifying automation bottlenecks and defining the AI use case." },
      { step: "Architecture", description: "Designing the LLM pipeline, vector database, and prompt engineering strategy." },
      { step: "Integration", description: "Building the backend APIs and connecting them to your existing systems." },
      { step: "Deployment & Tuning", description: "Launching the AI solution and refining prompts based on real-world usage." }
    ],
    thumbnailUrl: "/assets/images/services/service-detials-thumnail-wrap.png",
    icon: "fa-light fa-brain-circuit"
  },
  {
    slug: "solana-web3-development",
    id: "02.",
    title: "Solana Web3 Development",
    shortDesc: "Expert-level development on the Solana ecosystem, including NFT launchpads, staking protocols, and secure smart contract integration using Rust and the Anchor framework.",
    seoTitle: "Solana Web3 Development & Rust Smart Contracts",
    seoDescription: "Hire an expert Solana developer for high-performance dApps, NFT launchpads, DeFi staking protocols, and secure Rust/Anchor smart contracts.",
    overview: "Web3 demands speed, low fees, and uncompromised security. As a specialized Solana developer, I engineer robust decentralized applications (dApps) that leverage Solana's unparalleled throughput. From architecting complex decentralized finance (DeFi) protocols to launching interactive NFT ecosystems, I deliver end-to-end Web3 solutions built securely on Rust and the Anchor framework.",
    benefits: [
      "Lightning-fast transaction speeds utilizing the Solana network.",
      "Minimal gas fees, ensuring a better experience for your users.",
      "Enterprise-grade security through strict Rust memory safety.",
      "Future-proof architecture ready for high-volume adoption."
    ],
    features: [
      "Rust & Anchor framework smart contracts",
      "NFT Minting engines & Launchpad development",
      "Tokenomics implementation (SPL Tokens)",
      "DeFi staking and yield farming protocols",
      "Web3 wallet integration (Phantom, Solflare)"
    ],
    process: [
      { step: "Tokenomics & Logic", description: "Mapping out the smart contract rules, token flow, and incentive structures." },
      { step: "Smart Contract Coding", description: "Writing secure, optimized Rust code using the Anchor framework." },
      { step: "Auditing & Testing", description: "Rigorous testing on devnet to ensure no vulnerabilities exist." },
      { step: "Frontend Integration", description: "Connecting the on-chain logic to a sleek Next.js user interface." }
    ],
    thumbnailUrl: "/assets/images/services/service-detials-thumnail-wrap.png",
    icon: "fa-brands fa-solana"
  },
  {
    slug: "full-stack-nextjs-architecture",
    id: "03.",
    title: "Full-Stack Next.js Architecture",
    shortDesc: "Building high-performance, scalable web applications with Next.js 15/16 and the MERN stack. Focused on clean architecture, TypeScript, and server-side optimization.",
    seoTitle: "Full-Stack Next.js 15 App Development & Architecture",
    seoDescription: "Build lightning-fast, scalable web applications with a senior Full-Stack Next.js developer. Specializing in TypeScript, Server Actions, and optimal SEO architectures.",
    overview: "The modern web requires more than just a pretty interface—it needs blazing-fast performance and robust backend architecture. I specialize in building enterprise-grade applications using the latest Next.js features (App Router, Server Actions) and a strictly typed TypeScript environment. My approach guarantees applications that load instantly, rank high on search engines, and scale effortlessly as your user base grows.",
    benefits: [
      "Superior SEO performance with Server-Side Rendering (SSR).",
      "Exceptional user experience with lightning-fast page loads.",
      "Reduced maintenance costs through clean, modular codebases.",
      "Highly scalable infrastructure ready for global traffic."
    ],
    features: [
      "Next.js App Router & Server Actions",
      "Strict TypeScript for type-safe codebases",
      "Headless CMS & API integrations",
      "Modern State Management (Zustand, Redux)",
      "Tailwind CSS & Framer Motion animations"
    ],
    process: [
      { step: "System Design", description: "Structuring the database schema, API endpoints, and component hierarchy." },
      { step: "Frontend Development", description: "Building responsive, pixel-perfect UIs with modern styling frameworks." },
      { step: "Backend Architecture", description: "Implementing secure APIs, authentication, and server-side logic." },
      { step: "Optimization", description: "Fine-tuning Core Web Vitals, caching strategies, and SEO metadata." }
    ],
    thumbnailUrl: "/assets/images/services/service-detials-thumnail-wrap.png",
    icon: "fa-brands fa-react"
  },
  {
    slug: "real-world-asset-tokenization",
    id: "04.",
    title: "Real-World Asset Tokenization",
    shortDesc: "Architecting decentralized platforms for fractional ownership of physical assets. Bridging traditional finance with blockchain technology through secure on-chain protocols.",
    seoTitle: "Real-World Asset (RWA) Tokenization Development",
    seoDescription: "Unlock liquidity by tokenizing physical assets. Expert development of RWA platforms, fractional ownership protocols, and secure blockchain bridges.",
    overview: "Tokenizing Real-World Assets (RWA) is revolutionizing traditional finance by bringing illiquid assets—like real estate, art, or commodities—on-chain. I build secure, compliant tokenization platforms that enable fractional ownership, seamless trading, and transparent provenance. By bridging the gap between physical assets and blockchain rails, I help businesses unlock global liquidity and democratize investment opportunities.",
    benefits: [
      "Unlock global liquidity for traditionally illiquid physical assets.",
      "Lower the barrier to entry for investors through fractionalization.",
      "Ensure absolute transparency and immutable proof of ownership.",
      "Automate compliance and dividend distributions via smart contracts."
    ],
    features: [
      "Fractional ownership smart contracts",
      "Asset-backed token (Security Token) issuance",
      "On-chain KYC/AML integration capabilities",
      "Dividend and yield distribution automation",
      "Legal-to-Code mapping for compliance"
    ],
    process: [
      { step: "Asset Modeling", description: "Defining how the physical asset translates into digital tokens and legal frameworks." },
      { step: "Protocol Development", description: "Coding the smart contracts for issuance, trading, and fractionalization." },
      { step: "Identity Integration", description: "Implementing KYC/AML checks to ensure regulatory compliance." },
      { step: "Platform Launch", description: "Deploying the marketplace where users can mint, buy, and sell asset tokens." }
    ],
    thumbnailUrl: "/assets/images/services/service-detials-thumnail-wrap.png",
    icon: "fa-light fa-building-columns"
  },
  {
    slug: "real-time-streaming-systems",
    id: "05.",
    title: "Real-Time Streaming Systems",
    shortDesc: "Engineering low-latency video and audio streaming solutions. Expertise in WebRTC, HLS, and Plyr.io for global-scale social TV and entertainment platforms.",
    seoTitle: "Low-Latency Video Streaming & WebRTC Architecture",
    seoDescription: "Build scalable, low-latency video streaming platforms. Expert in WebRTC, HLS, custom video players, and high-concurrency real-time architecture.",
    overview: "Delivering high-quality video to a global audience in real-time is one of the most complex challenges in software engineering. I design and build highly resilient streaming architectures capable of handling massive concurrent viewership with sub-second latency. Whether you're building a live sports broadcasting app, an interactive social TV platform, or a telehealth service, I provide the technical backbone to ensure flawless delivery.",
    benefits: [
      "Sub-second latency for true real-time interactivity.",
      "Adaptive bitrate streaming for uninterrupted playback on any connection.",
      "Highly scalable infrastructure capable of handling traffic spikes.",
      "Custom-branded video player experiences."
    ],
    features: [
      "WebRTC & HLS (HTTP Live Streaming) protocols",
      "Custom video player integration (Plyr.io, Video.js)",
      "Real-time chat and interactive overlay synchronization",
      "Transcoding and adaptive bitrate pipelines",
      "CDN edge-caching strategies for video"
    ],
    process: [
      { step: "Infrastructure Design", description: "Selecting the right streaming protocols and CDN providers." },
      { step: "Backend Implementation", description: "Setting up ingestion nodes, transcoders, and signaling servers." },
      { step: "Player Customization", description: "Building a custom, responsive video player tailored to your UI." },
      { step: "Load Testing", description: "Simulating high-concurrency traffic to ensure stability under pressure." }
    ],
    thumbnailUrl: "/assets/images/services/service-detials-thumnail-wrap.png",
    icon: "fa-light fa-video"
  },
  {
    slug: "technical-leadership-audits",
    id: "06.",
    title: "Technical Leadership & Audits",
    shortDesc: "Providing end-to-end technical roadmap planning, team leadership, and security audits for startups looking to scale their MVPs to production-ready enterprise systems.",
    seoTitle: "Fractional CTO, Technical Leadership & Code Audits",
    seoDescription: "Accelerate your startup with Fractional CTO services. Get expert technical roadmaps, architecture audits, team leadership, and scalability planning.",
    overview: "Scaling an MVP into a production-ready enterprise system requires strategic vision and rigorous engineering standards. As a Fractional CTO, I partner with founders and development teams to audit existing architectures, identify bottlenecks, and plot a scalable technical roadmap. I bring years of senior engineering experience to help you avoid costly technical debt, streamline your CI/CD pipelines, and ensure your product is built to last.",
    benefits: [
      "Avoid expensive rewrites by establishing a solid architectural foundation early.",
      "Accelerate development cycles through optimized DevOps and CI/CD.",
      "Identify and mitigate security vulnerabilities before they are exploited.",
      "Align technical strategy directly with your business objectives."
    ],
    features: [
      "Comprehensive Codebase & Architecture Audits",
      "Scalability and Performance profiling",
      "DevOps & CI/CD pipeline optimization",
      "Technical Roadmapping and sprint planning",
      "Engineering team mentoring and standard-setting"
    ],
    process: [
      { step: "Deep Dive Audit", description: "Reviewing existing code, infrastructure, and deployment processes." },
      { step: "Strategic Roadmap", description: "Creating a step-by-step plan to refactor, optimize, and scale the system." },
      { step: "Process Implementation", description: "Setting up CI/CD, testing standards, and agile workflows." },
      { step: "Ongoing Mentorship", description: "Providing continuous guidance to internal teams to uphold technical excellence." }
    ],
    thumbnailUrl: "/assets/images/services/service-detials-thumnail-wrap.png",
    icon: "fa-light fa-user-tie"
  }
];
