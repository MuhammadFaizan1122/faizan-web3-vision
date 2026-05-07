"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* Global Scoped Styles for Hover Effects */}
      <style jsx>{`
        .ft-link-item {
          color: #b0b0b0;
          transition: color 0.3s ease;
          text-decoration: none;
        }
        .ft-link-item:hover {
          color: #ff0000 !important; /* Your desired Red */
        }
        .social-icon {
          width: 35px;
          height: 35px;
          background: #1a1a1a;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background: #ff0000; /* Turns background red */
          transform: translateY(-5px); /* Gentle lift animation */
          color: white;
        }
      `}</style>

      <footer className="tmp-footer-area-start tmp-section-gapTop pb--60" style={{ background: "#0f0f0f" }}>
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="single-footer-wrapper">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/assets/images/logo/white-logo-reeni-1.png"
                      alt="logo"
                      width={150}
                      height={55}
                      style={{ height: "auto" }}
                    />
                  </Link>
                </div>
                <h2 className="title mt--30" style={{ color: "white", fontSize: "42px", lineHeight: "1.2" }}>
                  <span style={{ fontWeight: "800" }}>Get Ready</span> <span style={{ fontWeight: "300" }}>To Create</span> <br />
                  <span style={{ fontWeight: "300" }}>Great</span>
                </h2>
                <div className="newslatter mt-50" style={{ maxWidth: "350px" }}>
                  <form action="#" className="newsletter-form-1" style={{ background: "transparent", borderBottom: "1px solid rgba(255,255,255,0.2)", padding: "12px", display: "flex", alignItems: "center", gap: "20px" }}>
                    <input
                      type="email"
                      placeholder="Email Address"
                      style={{ background: "transparent", color: "white", border: "none", outline: "none", width: "100%", fontSize: "14px" }}
                    />
                    <button style={{ background: "transparent", border: "none", color: "white" }}>
                      <i className="fa-regular fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Middle Column: Quick Links with Red Hover */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="quick-link-wrap mt_sm--30">
                <h5 className="ft-title" style={{ color: "white", fontWeight: "700", marginBottom: "30px" }}>Quick Link</h5>
                <ul className="ft-link" style={{ listStyle: "none", padding: 0, lineHeight: "2.5" }}>
                  <li><Link href="/about" className="ft-link-item">About Me</Link></li>
                  <li><Link href="/services" className="ft-link-item">Service</Link></li>
                  <li><Link href="/blog" className="ft-link-item">Blog Post</Link></li>
                  <li><Link href="/contact" className="ft-link-item">Contact Me</Link></li>
                </ul>
              </div>
            </div>

            {/* Right Column: Contact & Socials with Animation */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-wrapper contact-wrap mt_sm--30">
                <h5 className="ft-title" style={{ color: "white", fontWeight: "700", marginBottom: "30px" }}>Contact</h5>
                <ul className="ft-link" style={{ listStyle: "none", padding: 0 }}>
                  <li className="mb--20" style={{ display: "flex", alignItems: "center", gap: "15px", color: "#b0b0b0" }}>
                    <span style={{ background: "#1a1a1a", width: "35px", height: "35px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className="fa-solid fa-envelope" style={{ fontSize: "12px" }}></i>
                    </span>
                    <a href="mailto:muh.faizaan@gmail.com" className="ft-link-item">muh.faizaan@gmail.com</a>
                  </li>
                  <li className="mb--20" style={{ display: "flex", alignItems: "center", gap: "15px", color: "#b0b0b0" }}>
                    <span style={{ background: "#1a1a1a", width: "35px", height: "35px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className="fa-solid fa-location-dot" style={{ fontSize: "12px" }}></i>
                    </span>
                    11-F, New karachi, Karachi, Pakistan
                  </li>
                  <li className="mb--30" style={{ display: "flex", alignItems: "center", gap: "15px", color: "#b0b0b0" }}>
                    <span style={{ background: "#1a1a1a", width: "35px", height: "35px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className="fa-solid fa-phone" style={{ fontSize: "12px" }}></i>
                    </span>
                    <a href="tel:+923002493788">+92 300 249 3788</a>
                  </li>
                </ul>

                <div className="social-link-style-2 mt--30">
                  <div className="find-me-on tmp-fade-in">
                    <h2 className="find-me-on-title">Find me on</h2>
                    <div className="social-link banner">
                      <Link href="https://www.linkedin.com/in/muhammad-faizan-3a120b230/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link>
                      <Link href="https://github.com/MuhammadFaizan1122" target="_blank"><i className="fa-brands fa-github"></i></Link>
                      <Link href="mailto:muh.faizaan@gmail.com" target="_blank"><i className="fa-sharp fa-solid fa-envelope"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright-area-one" style={{ background: "#0f0f0f", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "20px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
                <p style={{ margin: 0, color: "#b0b0b0", fontSize: "14px" }}>
                  <span style={{ fontWeight: "700", color: "white" }}>©Muhammad Faizan</span> {new Date().getFullYear()} | All Rights Reserved
                </p>
                <ul style={{ display: "flex", gap: "20px", listStyle: "none", padding: 0, margin: 0, fontSize: "14px" }}>
                  <li><Link href="/terms" style={{ color: "white", fontWeight: "600" }}>Trams & Condition</Link></li>
                  <li><Link href="/privacy" style={{ color: "white", fontWeight: "600" }}>Privacy Policy</Link></li>
                  <li><Link href="/contact" style={{ color: "white", fontWeight: "600" }}>Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;