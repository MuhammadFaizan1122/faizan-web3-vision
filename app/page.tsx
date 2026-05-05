import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* Text Para Section */}
      <div className="about-content-area">
        <div className="container tmp-section-gap">
          <div className="text-para-doc-wrap">
            <h2 className="text-para-documents tmp-fade-in">
              A personal <span>portfolio</span> is a collection of your work, that is achievements, and skills that highlights <span>web design</span> in your abilities and professional growth.
            </h2>
            <div className="right-bg-text-para">
              <Image src="/assets/images/banner/right-bg-text-para-doc.png" alt="" width={400} height={400} />
            </div>
            <div className="left-bg-text-para">
              <Image src="/assets/images/banner/left-bg-text-para-doc.png" alt="" width={400} height={400} />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Resume />
      <Skills />
      <Portfolio />
      <Footer />
    </main>
  );
}
