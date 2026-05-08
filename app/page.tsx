import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceIcons from "@/components/ServiceIcons";
import HomeCounter from "@/components/HomeCounter";
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
