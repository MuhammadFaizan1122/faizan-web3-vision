import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import BlogContent from "@/components/BlogContent";

const BlogPage = () => {
  return (
    <main className="tmp-main-content">
      <Header />
      <PageBanner title="Blog Classic" subtitle="Blog Classic" />
      <BlogContent />
      <Footer />
    </main>
  );
};

export default BlogPage;
