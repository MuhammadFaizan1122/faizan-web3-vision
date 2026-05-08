import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceIcons from "@/components/ServiceIcons";
import SkillsProgress from "@/components/SkillsProgress";
import LatestServicesHome from "@/components/LatestServicesHome";
import EducationExperience from "@/components/EducationExperience";
import SupportedCompanies from "@/components/SupportedCompanies";
import LatestPortfolio from "@/components/LatestPortfolio";
import MySkillCards from "@/components/MySkillCards";
import Testimonial from "@/components/Testimonial";
import GetInTouch from "@/components/GetInTouch";
import BlogAndNews from "@/components/BlogAndNews";
import Footer from "@/components/Footer";
import AboutCounterSection from "@/components/AboutCounterSection";


export const metadata = {
  metadataBase: new URL("https://imfaizan.com"),
  title: "Muhammad Faizan | Full Stack Web2, Web3 & AI Developer | Next.js & Solana Expert",
  description:
    "Muhammad Faizan is a Senior Full Stack Developer specializing in high-performance Next.js applications, Solana Web3 ecosystems, and AI-driven SaaS platforms. Building scalable blockchain solutions, NFT marketplaces, and modern MERN stack web applications for global clients.",
  keywords: [
    "Muhammad Faizan",
    "Muhammad Faizan Portfolio",
    "Full Stack Web Developer",
    "Next.js Developer Expert",
    "React.js Frontend Specialist",
    "MERN Stack Developer",
    "TypeScript Developer",
    "Tailwind CSS Expert",
    "Web3 Developer for Hire",
    "Solana Blockchain Developer",
    "Smart Contract Developer",
    "Rust Solana Development",
    "NFT Marketplace Developer",
    "Web3 Integration Specialist",
    "DApp Development Services",
    "AI Application Developer",
    "Generative AI Integration",
    "OpenAI API Developer",
    "SaaS Platform Developer",
    "Custom Web Solution Provider",
    "Freelance Web3 Developer",
    "Remote Full Stack Developer",
    "Senior React Developer"
  ],
  authors: [{ name: "Muhammad Faizan" }],
  openGraph: {
    title: "Muhammad Faizan | Full Stack Developer",
    description: "Building scalable Web3 ecosystems and AI applications.",
    url: "https://imfaizan.com",
    siteName: "Faizan's Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Faizan Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Faizan | Web3 & AI Developer",
    description: "Next.js & Solana Expert building the future of the web.",
    images: ["https://imfaizan.com/preview.png"],
  },
};
export default function Home() {
  return (
    <main className="tmp-main-content">
      <Header />
      <Hero />
      <ServiceIcons />
      {/* <HomeCounter /> */}
      <AboutCounterSection />
      <SkillsProgress />
      <LatestServicesHome />
      <EducationExperience />
      <SupportedCompanies />
      <LatestPortfolio />
      <MySkillCards />
      <Testimonial />
      <GetInTouch />
      <BlogAndNews />
      <Footer />
    </main>
  );
}
