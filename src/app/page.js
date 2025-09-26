import Homepage from '../components/Homepage/Homepage'

export const metadata = {
  title: "Muhammad Faizan | Web2, Web3 & Blockchain Developer Portfolio",
  description:
    "Portfolio of Muhammad Faizan – a Web2 & Web3 Blockchain Developer and Fullstack Engineer with 5+ years of experience building scalable, secure, and modern applications.",
  keywords: [
    "Muhammad Faizan",
    "Fullstack Developer",
    "Blockchain Developer",
    "Web3 Developer",
    "Web2 Developer",
    "React Developer",
    "Next.js Developer",
    "Solana Developer",
    "Smart Contracts",
    "DApps",
    "Portfolio"
  ],
  authors: [{ name: "Muhammad Faizan" }],
  openGraph: {
    title: "Muhammad Faizan | Web2, Web3 & Blockchain Developer",
    description:
      "Explore the portfolio of Muhammad Faizan, Fullstack & Blockchain Developer with 5+ years of expertise in Web2 and Web3 solutions.",
    url: "https://imfaizan.com",
    siteName: "Muhammad Faizan Portfolio",
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
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Faizan | Web2, Web3 & Blockchain Developer",
    description:
      "Web2 & Web3 Blockchain Developer, Fullstack Engineer with 5+ years of experience.",
    images: ["/preview.png"],
    creator: "@your_twitter_handle",
  },
};

export default function Home() {
  return <Homepage />;
}
