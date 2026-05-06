import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ProjectContent from "@/components/ProjectContent";

const ProjectPage = () => {
  return (
    <main className="tmp-main-content">
      <Header />
      <PageBanner title="My Project" subtitle="My All Project" />
      <ProjectContent />
      <Footer />
    </main>
  );
};

export default ProjectPage;
