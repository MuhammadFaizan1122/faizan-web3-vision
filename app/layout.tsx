import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Muhammad Faizan | Full Stack Web2, Web3 & AI Developer",
  description:
    "Muhammad Faizan is a Full Stack Developer specializing in Next.js, React.js, Blockchain, Solana, Web3, and AI-powered applications. Explore modern web solutions, scalable SaaS platforms, NFT systems, and custom development services.",
  keywords: [
    "Muhammad Faizan",
    "Next.js Developer",
    "React.js Developer",
    "Web3 Developer",
    "Solana Developer",
    "Blockchain Developer",
    "AI Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "NFT Development",
    "SaaS Development",
    "Portfolio",
  ],
};

import AnimationInitializer from "@/components/AnimationInitializer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/vendor/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.css" />
        <link rel="stylesheet" href="/assets/css/plugins/odometer.css" />
        <link rel="stylesheet" href="/assets/css/vendor/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        <AnimationInitializer />
        {children}

        {/* Scripts will be handled in components or as needed */}
      </body>
    </html>
  );
}
