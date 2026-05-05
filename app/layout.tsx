import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reeni - Personal Portfolio Next.js Template",
  description: "Modern personal portfolio for designers and developers.",
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
