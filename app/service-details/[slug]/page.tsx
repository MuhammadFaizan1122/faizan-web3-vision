import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ServiceDetailsContent from "@/components/ServiceDetailsContent";
import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

const ServiceDetailsDynamicPage = async ({ params }: Props) => {
  const { slug } = await params;

  console.log("slug", slug);

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="tmp-main-content">
      <Header />
      <PageBanner title={service.title} subtitle="Service Details" />
      <ServiceDetailsContent service={service} />
      <Footer />
    </main>
  );
};

export default ServiceDetailsDynamicPage;