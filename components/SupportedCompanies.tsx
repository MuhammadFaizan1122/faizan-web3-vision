"use client";

import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SupportedCompanies = () => {
  useScrollAnimation();

  return (
    <div className="our-supported-company-area tmp-section-gapTop">
      <div className="container">
        <div className="row justify-content-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className={`support-company-logo tmp-scroll-trigger tmp-fade-in animation-order-${num}`}>
                <Image
                  src={`/assets/images/our-supported-company/company-logo-${num}.svg`}
                  alt="Reeni - Personal Portfolio HTML Template"
                  width={200}
                  height={80}
                  style={{ width: "100%", height: "auto", padding: "0px 50px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportedCompanies;
