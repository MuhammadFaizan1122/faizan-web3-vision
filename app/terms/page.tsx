"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

const TermsPage = () => {
  return (
    <main>
      <Header />
      <PageBanner title="Terms & Conditions" subtitle="Legal" />

      <section className="terms-privacy-area tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrap tmp-fade-in">
                {/* Introduction Section */}
                <p className="mb--30">Last Updated: May 2026</p>
                <p>
                  Welcome to my professional portfolio. These Terms & Conditions govern your relationship with my development services, including Web3 architecture, AI integration, and full-stack software engineering. By accessing this site or engaging my services, you agree to these legally binding terms.
                </p>

                {/* Section 1: Services */}
                <h2 className="mt--50">1. Professional Scope of Services</h2>
                <p>
                  I provide specialized technical services including, but not limited to, Next.js application architecture, Solana blockchain development, NFT launchpads, and custom AI chatbot integration. Each project is subject to a specific Statement of Work (SOW) that defines the unique deliverables and timelines.
                </p>

                {/* Section 2: Intellectual Property */}
                <h2 className="mt--50">2. Intellectual Property & Ownership</h2>
                <p>
                  Unless otherwise specified in a signed contract:
                </p>
                <ul>
                  <li><strong>Client Ownership:</strong> Upon receipt of full payment, all custom code and finalized assets are transferred to the client.</li>
                  <li><strong>Developer Rights:</strong> I reserve the right to showcase the project, including screenshots and technical descriptions, in my professional portfolio and case studies to demonstrate my expertise.</li>
                  <li><strong>Pre-existing Code:</strong> I retain ownership of any pre-existing libraries, scripts, or proprietary frameworks used to accelerate the development process.</li>
                </ul>

                {/* Section 3: Payment & Engagement */}
                <h2 className="mt--50">3. Project Engagement & Payments</h2>
                <p>
                  Engagement typically requires a standard 50% commencement deposit. Final project migration or deployment to production environments is conducted only after the final balance is settled. For long-term consultancy, monthly retainers are billed at the beginning of each billing cycle.
                </p>

                {/* Section 4: Web3 & AI Disclaimer */}
                <h2 className="mt--50">4. Technical Disclaimers (Web3 & AI)</h2>
                <p>
                  Due to the volatile nature of the technologies provided:
                </p>
                <ul>
                  <li><strong>Blockchain:</strong> While I implement secure wallet integrations and audited logic, I am not responsible for market fluctuations or network-level vulnerabilities inherent to the Solana or Ethereum blockchains.</li>
                  <li><strong>AI & LLMs:</strong> AI-driven features, such as chatbots and recommendation engines, are provided "as-is" regarding accuracy, as they rely on third-party model providers.</li>
                </ul>

                {/* Section 5: Limitation of Liability */}
                <h2 className="mt--50">5. Limitation of Liability</h2>
                <p>
                  In no event shall I be liable for any indirect, incidental, or consequential damages—including loss of data, revenue, or business interruption—arising from the use of the delivered software or services beyond the total amount paid for the specific project.
                </p>

                {/* Section 6: Termination */}
                <h2 className="mt--50">6. Termination of Service</h2>
                <p>
                  Either party may terminate a project engagement with written notice. In the event of termination, the client is responsible for payment for all work completed up to the date of notice.
                </p>

                {/* Section 7: Contact Information */}
                <h2 className="mt--50">7. Contact for Legal Inquiries</h2>
                <p>
                  For questions regarding these terms, please contact me directly at <strong>muh.faizaan@gmail.com</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TermsPage;