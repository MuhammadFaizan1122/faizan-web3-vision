"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="tmp-footer-area-start tmp-section-gapTop pb--60">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-footer-wrapper">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/assets/images/logo/white-logo-reeni.png"
                      alt="logo"
                      width={120}
                      height={40}
                      style={{ height: "auto" }}
                    />
                  </Link>
                </div>
                <h2 className="title mt--30" style={{ color: "white", fontSize: "40px", fontWeight: "700" }}>
                  Get Ready To Create <br /> Great
                </h2>
                <div className="newslatter mt--30" style={{ border: "none", padding: 0 }}>
                  <form action="#" className="newsletter-form-1" style={{ background: "transparent", borderBottom: "1px solid rgba(255,255,255,0.2)", borderRadius: 0, padding: "10px 0" }}>
                    <input 
                      type="email" 
                      placeholder="Email Adress" 
                      style={{ background: "transparent", color: "white", border: "none", padding: 0 }}
                    />
                    <span className="form-icon" style={{ background: "transparent", minWidth: "auto" }}>
                      <i className="fa-regular fa-envelope" style={{ color: "white" }}></i>
                    </span>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="quick-link-wrap ml--50 ml_sm--0 mt_sm--30">
                <h5 className="ft-title">Quick Link</h5>
                <ul className="ft-link tmp-link-animation">
                  <li><Link href="/about">About Me</Link></li>
                  <li><a href="/#services">Service</a></li>
                  <li><Link href="/contact">Contact Me</Link></li>
                  <li><a href="/#blog">Blog Post</a></li>
                  <li><a href="/#pricing">Pricing</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-footer-wrapper contact-wrap mt_sm--30">
                <h5 className="ft-title">Contact</h5>
                <ul className="ft-link tmp-link-animation">
                  <li className="mb--20">
                    <span className="ft-icon" style={{ background: "var(--color-primary)", width: "40px", height: "40px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", marginRight: "15px" }}>
                      <i className="fa-solid fa-envelope" style={{ color: "white", fontSize: "14px" }}></i>
                    </span>
                    <a href="mailto:example@gmail.com">example@gmail.com</a>
                  </li>
                  <li className="mb--20">
                    <span className="ft-icon" style={{ background: "var(--color-primary)", width: "40px", height: "40px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", marginRight: "15px" }}>
                      <i className="fa-solid fa-location-dot" style={{ color: "white", fontSize: "14px" }}></i>
                    </span>
                    3891 Ranchview Dr. Richardson
                  </li>
                  <li className="mb--30">
                    <span className="ft-icon" style={{ background: "var(--color-primary)", width: "40px", height: "40px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", marginRight: "15px" }}>
                      <i className="fa-solid fa-phone" style={{ color: "white", fontSize: "14px" }}></i>
                    </span>
                    <a href="tel:01245789321">01245789321</a>
                  </li>
                </ul>
                <div className="social-link-style-2 mt--30">
                  <ul className="social-link" style={{ display: "flex", gap: "15px", listStyle: "none", padding: 0 }}>
                    <li><a href="#" style={{ width: "40px", height: "40px", background: "rgba(255,255,255,0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#" style={{ width: "40px", height: "40px", background: "rgba(255,255,255,0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><i className="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="#" style={{ width: "40px", height: "40px", background: "rgba(255,255,255,0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#" style={{ width: "40px", height: "40px", background: "rgba(255,255,255,0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><i className="fa-brands fa-facebook-f"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-wrapper tmp-scroll-trigger animation-order-1">
                <p className="copy-right-para" style={{ margin: 0 }}>
                  ©InversWeb {new Date().getFullYear()} | All Rights Reserved
                </p>
                <ul className="tmp-link-animation" style={{ display: "flex", gap: "20px", listStyle: "none", padding: 0, margin: 0 }}>
                  <li><Link href="/terms">Trams & Condition</Link></li>
                  <li><Link href="/privacy">Privacy Policy</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
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
