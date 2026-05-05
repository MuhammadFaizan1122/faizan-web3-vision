import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ProjectDetailsContent from "@/components/ProjectDetailsContent";

const ProjectDetailsPage = () => {
  return (
    <main className="tmp-main-content">
      <Header />
      <PageBanner title="Project Details" subtitle="Project Details" />
      <ProjectDetailsContent />
      <Footer />
    </main>
  );
};

export default ProjectDetailsPage;
