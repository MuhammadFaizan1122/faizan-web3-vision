"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

const PrivacyPage = () => {
  return (
    <main>
      <Header />
      <PageBanner title="Privacy Policy" subtitle="Privacy" />

      <section className="terms-privacy-area tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrap tmp-fade-in">
                <p className="mb--30">Last Updated: May 2026</p>
                <p>
                  Your privacy is a priority. This policy outlines how personal and technical data is handled when you visit this portfolio or engage in professional consultancy for Web3, AI, and Software Engineering projects.
                </p>

                {/* Section 1: Data Collection */}
                <h2 className="mt--50">1. Information Collection & Usage</h2>
                <p>
                  Information is collected only to provide and improve professional services. This includes:
                </p>
                <ul>
                  <li><strong>Contact Details:</strong> Name, email, and project details provided via the contact form for project inquiries.</li>
                  <li><strong>Technical Data:</strong> IP addresses and browser types collected via analytics to optimize website performance and user experience.</li>
                  <li><strong>Web3 Data:</strong> Public wallet addresses may be interacted with for demonstration purposes on decentralized applications (dApps), though private keys are never requested or stored.</li>
                </ul>

                {/* Section 2: Data Protection */}
                <h2 className="mt--50">2. Data Security & Protection</h2>
                <p>
                  As a Senior Developer, I implement industry-standard security protocols to protect your information. Whether it is a simple inquiry or a complex AI-driven integration, I ensure that your project data is handled through encrypted channels and secure cloud environments (such as AWS or Vercel).
                </p>

                {/* Section 3: AI & Third-Party APIs */}
                <h2 className="mt--50">3. AI & Service Provider Integration</h2>
                <p>
                  For projects involving AI agents or LLMs (like GPT-4), data may be processed through third-party APIs. I prioritize providers with enterprise-grade privacy standards to ensure your proprietary project logic and user data remain confidential and are not used for model training without consent.
                </p>

                {/* Section 4: Cookies & Tracking */}
                <h2 className="mt--50">4. Cookies & Analytics</h2>
                <p>
                  This site uses cookies to understand user behavior and improve the portfolio's interface. You can choose to disable cookies through your browser settings, though some interactive features of my Web3 or AI demos may require them for full functionality.
                </p>

                {/* Section 5: Disclosure to Third Parties */}
                <h2 className="mt--50">5. Data Disclosure</h2>
                <p>
                  Your personal information is never sold, traded, or transferred to outside parties. This does not include trusted third parties who assist in operating this website or conducting business, so long as those parties agree to keep this information confidential.
                </p>

                {/* Section 6: User Rights */}
                <h2 className="mt--50">6. Your Rights</h2>
                <p>
                  You have the right to request the deletion of any contact information or project-related data I hold. For any privacy-related requests or concerns, please reach out via the official contact channel.
                </p>

                <div className="contact-info-legal mt--50">
                  <p>For further information, please contact:</p>
                  <strong>muh.faizaan@gmail.com</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPage;