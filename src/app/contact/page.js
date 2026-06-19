"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import PageHero from "@/components/PageHero";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLock, FaCheck, FaGlobe, FaClock } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    label: "Visit Us",
    value: "123 SEO Boulevard, Suite 400",
    subvalue: "New York, NY 10001",
  },
  {
    icon: <FaPhoneAlt />,
    label: "Call Us",
    value: "+1 (555) 123-4567",
    subvalue: "Mon–Fri, 9AM–6PM EST",
  },
  {
    icon: <FaEnvelope />,
    label: "Email Us",
    value: "hello@seopals.com",
    subvalue: "We reply within 24 hours",
  },
  {
    icon: <FaLock />,
    label: "Secure Operations",
    value: "Compliant Systems",
    subvalue: "Secure Data Intake Paths",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const serviceId = (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "").trim();
      const templateId = (process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "").trim();
      const publicKey = (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "").trim();

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing in environment variables.");
      }

      const templateParams = {
        site_name: "SEOPals",
        to_email: (process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || "").trim() || "thelakewayroofingcompany@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "N/A",
        service: formData.service || "None Selected",
        address_or_website: formData.website,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", website: "", service: "", message: "" });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(err.message || "Failed to send email. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-brand-blue-deep overflow-hidden">
      <PageHero
        badge="Contact Us"
        title="Start Your Brand's"
        highlight="SEO Domination"
        description="Ready to scale traffic and bookings? Reach out to our specialist SEO architects today and secure a custom audit report for your website."
        bgImage="/images/contact_hero.png"
      />

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Contact Form */}
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-brand-blue-deep">
                Send Us a Message
              </h2>
              <p className="text-gray-500 mb-8">
                Fill out the form below and our search engine optimization team will run a diagnostic sitemap, tag, and maps audit for your company.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-extrabold text-brand-blue-deep uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-brand-blue-deep focus:outline-none focus:border-brand-blue-accent focus:ring-2 focus:ring-brand-blue-accent/10 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-extrabold text-brand-blue-deep uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-brand-blue-deep focus:outline-none focus:border-brand-blue-accent focus:ring-2 focus:ring-brand-blue-accent/10 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-website" className="block text-xs font-extrabold text-brand-blue-deep uppercase tracking-wider mb-2">
                      Website URL *
                    </label>
                    <input
                      type="url"
                      id="contact-website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      required
                      placeholder="https://www.yourcompany.com"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-brand-blue-deep focus:outline-none focus:border-brand-blue-accent focus:ring-2 focus:ring-brand-blue-accent/10 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-extrabold text-brand-blue-deep uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-brand-blue-deep focus:outline-none focus:border-brand-blue-accent focus:ring-2 focus:ring-brand-blue-accent/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-xs font-extrabold text-brand-blue-deep uppercase tracking-wider mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-brand-blue-deep focus:outline-none focus:border-brand-blue-accent focus:ring-2 focus:ring-brand-blue-accent/10 transition-all appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230B253D' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                      backgroundSize: "20px",
                    }}
                  >
                    <option value="">Select a service option</option>
                    <option value="on-page">On-Page SEO & User Intent</option>
                    <option value="technical">Technical SEO & Sitemaps</option>
                    <option value="link-building">High-Authority Link Building</option>
                    <option value="local-seo">Local SEO & Google Maps</option>
                    <option value="content">Services Content Strategy</option>
                    <option value="audits">Comprehensive Audits & Reports</option>
                    <option value="full">Full B2B SEO Suite</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-extrabold text-brand-blue-deep uppercase tracking-wider mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your brand websites, current organic ranking issues, and acquisition targets..."
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-brand-blue-deep focus:outline-none focus:border-brand-blue-accent focus:ring-2 focus:ring-brand-blue-accent/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted || submitting}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 font-black text-sm uppercase tracking-wider rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                    submitted
                      ? "bg-green-600 text-white"
                      : "bg-brand-lime text-brand-blue-deep hover:bg-brand-lime-hover hover:shadow-lg shadow-brand-lime/10"
                  }`}
                >
                  {submitting ? (
                    "SENDING..."
                  ) : submitted ? (
                    <><FaCheck className="inline mr-2" /> Audit Requested!</>
                  ) : (
                    "SUBMIT REQUEST"
                  )}
                </button>

                {error && (
                  <div className="mt-4 text-sm font-bold text-red-600 bg-red-50 py-3 px-4 rounded-lg border border-red-200">
                    {error}
                  </div>
                )}
              </form>
            </div>

            {/* Sidebar - Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-brand-blue-deep rounded-2xl p-8 lg:p-10 sticky top-28 shadow-xl border border-white/5">
                <h3 className="text-xl font-bold text-white mb-2">Contact Details</h3>
                <p className="text-gray-400 text-sm mb-8">
                  Get in touch directly with our support team or request a secure strategic analysis.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-brand-lime/10 text-brand-lime flex items-center justify-center text-lg">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-gray-400 text-[10px] uppercase tracking-widest mb-1 font-extrabold">
                          {info.label}
                        </div>
                        <div className="text-white font-extrabold text-sm">{info.value}</div>
                        <div className="text-gray-500 text-xs mt-0.5">{info.subvalue}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social links */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-4 font-extrabold">Follow SEOPals</p>
                  <div className="flex gap-3">
                    {["LinkedIn", "Twitter", "Facebook", "Instagram"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 text-xs font-bold hover:text-brand-lime hover:border-brand-lime/30 transition-all duration-300"
                      >
                        {s.substring(0, 2)}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Trust & Availability Grid */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaGlobe />,
                title: "Nationwide Strategy",
                desc: "We serve B2B and SaaS brands across all 50 states with localized map campaigns."
              },
              {
                icon: <FaClock />,
                title: "24-Hour Responses",
                desc: "We analyze all website audit requests and respond with a complete draft report inside 1 business day."
              },
              {
                icon: <FaPhoneAlt />,
                title: "Free Strategy Calls",
                desc: "Every new engagement begins with a 30-minute diagnostic session to chart your keyword ranking roadmap."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-100 text-center hover-lift">
                <div className="w-14 h-14 mx-auto rounded-xl bg-brand-blue-light text-brand-blue-accent flex items-center justify-center text-2xl mb-5">
                  {item.icon}
                </div>
                <h3 className="text-brand-blue-deep font-extrabold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
