import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ProjectDetailsContent from "@/components/ProjectDetailsContent";
import { projects } from "@/app/data/projects";

// Fallback page — redirects to first project for backward compatibility
const ProjectDetailsPage = () => {
  const project = projects[0];

  return (
    <main className="tmp-main-content">
      <Header />
      <PageBanner title={project.title} subtitle="Project Details" />
      <ProjectDetailsContent project={project} />
      <Footer />
    </main>
  );
};

export default ProjectDetailsPage;
