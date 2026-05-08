import React from "react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ProjectDetailsContent from "@/components/ProjectDetailsContent";
import { projects } from "@/app/data/projects";

// 1. generateStaticParams remains largely the same, 
// but ensure it returns the expected structure.
export const generateStaticParams = async () =>
  projects.map((p) => ({ slug: p.slug }));

// 2. Update generateMetadata to await params
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>; // Change type to Promise
}) => {
  const { slug } = await params; // Await the params
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} – Project Details`,
    description: project.description,
  };
};

// 3. Update the Page component to be async and await params
const ProjectSlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params; // Await the params
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="tmp-main-content">
      <Header />
      <PageBanner title={project.title} subtitle="Project Details" />
      <ProjectDetailsContent project={project} />
      <Footer />
    </main>
  );
};

export default ProjectSlugPage;