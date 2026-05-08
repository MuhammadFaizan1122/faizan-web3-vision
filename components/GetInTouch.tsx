"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useHoverAnimation } from "@/hooks/useHoverAnimation";

const GetInTouch = () => {
  useScrollAnimation();
  useHoverAnimation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      if (result.status === 200) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrors({ submit: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="get-in-touch-area tmp-section-gapTop tmp-section-gapBottom">
      <div className="container">
        <div className="contact-get-in-touch-wrap">
          <div className="get-in-touch-wrapper tmponhover">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <div className="section-head text-align-left">
                  <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="subtitle">CONTACT ME</span>
                  </div>
                  <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                    Let's Build the Future of Web3 & AI Together
                  </h2>
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                    Whether you're looking to launch a secure DeFi platform on
                    Solana, integrate advanced AI agents into your workflow, or
                    build a scalable Next.js application, I'm here to lead the
                    technical execution. Let's discuss how my 10+ years of
                    experience and 35+ delivered projects can bring your vision
                    to life.
                  </p>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="contact-inner">
                  <div className="contact-form">
                    <form className="tmp-contact-form" onSubmit={handleSubmit} noValidate>
                      <div className="contact-form-wrapper row">

                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className={`input-field ${errors.name ? "is-invalid" : ""}`}
                              name="name"
                              placeholder="Name (e.g., Satoshi Nakamoto)"
                              type="text"
                              value={formData.name}
                              onChange={handleChange}
                            />
                            {errors.name && (
                              <small className="text-danger">{errors.name}</small>
                            )}
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className={`input-field ${errors.phone ? "is-invalid" : ""}`}
                              name="phone"
                              placeholder="Phone (e.g., +92 300 0000000)"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                            {errors.phone && (
                              <small className="text-danger">{errors.phone}</small>
                            )}
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className={`input-field ${errors.email ? "is-invalid" : ""}`}
                              name="email"
                              placeholder="Email (e.g., partner@company.com)"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                            {errors.email && (
                              <small className="text-danger">{errors.email}</small>
                            )}
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="input-field"
                              name="subject"
                              placeholder="Subject (e.g., Web3 Inquiry)"
                              type="text"
                              value={formData.subject}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea
                              className={`input-field ${errors.message ? "is-invalid" : ""}`}
                              name="message"
                              placeholder="Tell me about your project goals, tech stack, or timeline..."
                              value={formData.message}
                              onChange={handleChange}
                            />
                            {errors.message && (
                              <small className="text-danger">{errors.message}</small>
                            )}
                          </div>
                        </div>

                        {errors.submit && (
                          <div className="col-lg-12">
                            <p className="text-danger">{errors.submit}</p>
                          </div>
                        )}

                        {submitted && (
                          <div className="col-lg-12">
                            <p className="text-success">
                              ✓ Message sent! I'll get back to you within 24 hours.
                            </p>
                          </div>
                        )}

                        <div className="col-lg-12">
                          <button
                            className="tmp-btn hover-icon-reverse radius-round w-100"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">
                                {isSubmitting ? "Sending..." : "Start Collaboration"}
                              </span>
                              <span className="btn-icon">
                                <i className="fa-sharp fa-regular fa-arrow-right"></i>
                              </span>
                            </span>
                          </button>
                        </div>

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;