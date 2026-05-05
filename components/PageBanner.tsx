"use client";

import React from "react";
import Link from "next/link";

interface PageBannerProps {
  title: string;
  subtitle: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle }) => {
  return (
    <div className="breadcrumb-area breadcrumb-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inner text-center">
              <h1 className="title tmp-fade-in">{title}</h1>
              <ul className="page-list tmp-fade-in">
                <li className="tmp-breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="icon">
                  <i className="fa-solid fa-angle-right"></i>
                </li>
                <li className="tmp-breadcrumb-item active">{subtitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
