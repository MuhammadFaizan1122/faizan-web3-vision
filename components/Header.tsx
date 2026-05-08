"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`tmp-header-area-start header-one header--transparent ${isSticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-content">
                <div className="logo">
                  <Link href="/">
                    <Image className="logo-dark" src="/assets/images/logo/white-logo-reeni-1.png" alt="Logo" width={150} height={40} />
                    <Image className="logo-white" src="/assets/images/logo/logo-white.png" alt="Logo" width={150} height={40} />
                  </Link>
                </div>
                <nav className="tmp-mainmenu-nav d-none d-xl-block">
                  <ul className="tmp-mainmenu">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    {/* <li><Link href="/blog">Blogs</Link></li> */}
                    <li><Link href="/projects">Projects</Link></li>
                    {/*                  
                    <li className="has-dropdown">
                      <Link href="/projects">Project <i className="fa-regular fa-chevron-down"></i></Link>
                      <ul className="submenu">
                        <li><Link href="/projects">Project</Link></li>
                        <li><Link href="/project-details">Project Details</Link></li>
                      </ul>
                    </li> */}
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </nav>
                <div className="tmp-header-right">
                  <div className="social-share-wrapper d-none d-md-block">
                    <div className="social-link">
                      <Link href="https://www.linkedin.com/in/muhammad-faizan-3a120b230/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link>
                      <Link href="https://github.com/MuhammadFaizan1122" target="_blank"><i className="fa-brands fa-github"></i></Link>
                      <Link href="mailto:muh.faizaan@gmail.com" target="_blank"><i className="fa-sharp fa-solid fa-envelope"></i></Link>
                    </div>
                  </div>
                  <div className="actions-area">
                    <div className="tmp-side-collups-area d-none d-xl-block">
                      <button className="tmp-menu-bars tmp_button_active" onClick={() => setIsMobileMenuOpen(true)}>
                        <i className="fa-regular fa-bars-staggered"></i>
                      </button>
                    </div>
                    <div className="tmp-side-collups-area d-block d-xl-none">
                      <button className="tmp-menu-bars humberger_menu_active" onClick={() => setIsMobileMenuOpen(true)}>
                        <i className="fa-regular fa-bars-staggered"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`tmp-popup-mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="inner">
          <div className="header-top">
            <div className="logo">
              <Link href="/" className="logo-area">
                <Image className="logo-dark" src="/assets/images/logo/white-logo-reeni-1.png" alt="Logo" width={150} height={40} />
              </Link>
            </div>
            <div className="close-menu">
              <button className="close-button tmp-round-action-btn" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fa-sharp fa-light fa-xmark"></i>
              </button>
            </div>
          </div>
          <ul className="tmp-mainmenu">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
