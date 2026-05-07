import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import BlogDetailsContent from "@/components/BlogDetailsContent";
import { blogsData } from "@/data/blogs";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

const BlogDetailsDynamicPage = async ({ params }: Props) => {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="tmp-main-content">
      <Header />
      <PageBanner title="Blog Details" subtitle="Blog Details" />
      <BlogDetailsContent blog={blog} />
      <Footer />
    </main>
  );
};

export default BlogDetailsDynamicPage;
