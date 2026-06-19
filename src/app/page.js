"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaCheckCircle,
  FaGoogle,
  FaStar,
  FaLock,
  FaSearch,
  FaCogs,
  FaMapMarkedAlt,
  FaLink,
  FaCheck,
  FaFileAlt,
  FaServer,
  FaFacebook,
  FaAward,
  FaSlidersH,
  FaWrench,
  FaChartLine,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHubspot
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiSemrush } from "react-icons/si";
import { FaMeta } from "react-icons/fa6";

const partnersList = [
  { label: "Google Partner", logo: <FcGoogle className="text-3xl shrink-0" /> },
  { label: "HubSpot Partner", logo: <FaHubspot className="text-3xl text-[#ff7a59] shrink-0" /> },
  { label: "Semrush Partner", logo: <SiSemrush className="text-3xl text-[#ff642d] shrink-0" /> },
  { label: "Ahrefs Certified", logo: <span className="font-serif text-[#ff6a00] text-3xl font-bold tracking-tighter shrink-0">ahrefs</span> },
  { label: "Moz Pro", logo: <span className="font-black text-[#1d91d0] text-3xl tracking-tighter shrink-0">MOZ</span> },
  { label: "Clutch Top Agency", logo: <span className="font-black text-gray-900 text-3xl tracking-tighter shrink-0">Clutch</span> },
  { label: "Meta Business Partner", logo: <FaMeta className="text-3xl text-[#0668E1] shrink-0" /> },
];

export default function Home() {
  // Bottom Proposal Form State
  const [proposalForm, setProposalForm] = useState({ name: "", email: "", website: "", phone: "", message: "" });
  const [proposalSubmitted, setProposalSubmitted] = useState(false);

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState(null);

  const handleProposalSubmit = (e) => {
    e.preventDefault();
    setProposalSubmitted(true);
    setTimeout(() => {
      setProposalSubmitted(false);
      setProposalForm({ name: "", email: "", website: "", phone: "", message: "" });
    }, 3000);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How long does it take to see organic ranking results?",
      a: "Most businesses start seeing significant ranking improvements on Google Maps and organic search results within 90 days. Achieving page 1 domination for highly competitive industry keywords typically takes between 4 to 6 months of consistent on-page optimization, technical repairs, and authority link outreach."
    },
    {
      q: "What is your link building and digital PR process?",
      a: "We use 100% white-hat manual outreach. Our in-house content team writes editorial-quality resources and pitches them directly to high-authority business blogs, industry journals, and local directories to secure clean, high-equity backlinks that safely boost your domain authority."
    },
    {
      q: "Do you offer location-specific local SEO campaigns?",
      a: "Yes. For multi-location businesses and local services, we focus heavily on Google Business Profile optimization, localized citation consistency, and geo-targeted landing page creation to ensure your branches rank in the top '3-pack' map results for your target markets."
    },
    {
      q: "Are sitemaps and technical schema templates customized?",
      a: "Yes, absolutely. We do not use cookie-cutter plugins. Our developers customize sitemap configurations, robots.txt crawl directives, and deploy advanced JSON-LD structured schema markup (Organization, LocalBusiness, Product) tailored to your industry."
    },
    {
      q: "Are there long-term contracts?",
      a: "No. We work on a flexible month-to-month retainer model. We believe in earning your partnership every month through transparent, data-driven ranking growth and lead metrics."
    }
  ];

  return (
    <div className="bg-white text-brand-blue-deep overflow-hidden">
      
      {/* SECTION 1: HERO BLOCK */}
      <section 
        className="relative flex flex-col justify-center min-h-[calc(100vh-104px)] py-12 lg:py-16 overflow-hidden border-b border-white/5 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero_bg.png')" }}
      >
        {/* Dark Teal/Blue Overlay */}
        <div className="absolute inset-0 bg-brand-blue-deep/90 backdrop-blur-[1px]"></div>
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-left space-y-6 animate-fade-in-up">
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
                ARCHITECT SEO<br />
                <span className="text-brand-lime">SERVICES COMPANY</span>
              </h1>
              
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
                Double, Triple or Quadruple Your Lead Generations and Customer Inquiries With an SEO Partner that Actually Delivers Results.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-4 max-w-xl">
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-brand-lime">234%</div>
                  <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-bold mt-1">
                    Avg Traffic Increase
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white">475+</div>
                  <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-bold mt-1">
                    SEO Campaigns Run
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white">12,300+</div>
                  <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-bold mt-1">
                    Page 1 Keywords
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-brand-lime">150+</div>
                  <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-bold mt-1">
                    Active Businesses
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card CTA */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto animate-slide-in-right">
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl border border-gray-100 glow-blue-strong text-center flex flex-col justify-between h-full space-y-8">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue-light text-brand-blue-accent text-xs font-extrabold uppercase rounded-full mb-4">
                    Limited Offer
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-brand-blue-deep leading-tight">
                    Get Your Free SEO Ranking Roadmap
                  </h3>
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                    Ready to scale traffic and bookings? Claim your customized organic analysis and maps roadmap prepared by our specialist SEO architects.
                  </p>
                </div>

                <div className="space-y-4 text-left bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-brand-lime text-lg shrink-0" />
                    <span className="text-brand-blue-deep font-bold text-sm">30-Min Diagnostic Audit Call</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-brand-lime text-lg shrink-0" />
                    <span className="text-brand-blue-deep font-bold text-sm">Competitor Backlink Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-brand-lime text-lg shrink-0" />
                    <span className="text-brand-blue-deep font-bold text-sm">Google Maps Keyword Blueprint</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-5 bg-brand-lime text-brand-blue-deep font-black text-sm uppercase tracking-wider rounded-lg hover:bg-brand-lime-hover hover:shadow-lg shadow-brand-lime/20 transition-all duration-300"
                >
                  CLAIM FREE AUDIT NOW
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

          </div>

          {/* Hero Bottom Badges */}
          <div className="mt-8 lg:mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
            {[
              { label: "1st Page Rankings Guarantee", icon: <FaAward className="text-xl text-brand-lime inline" /> },
              { label: "Google Certified Partner", icon: <FaGoogle className="text-xl text-brand-lime inline" /> },
              { label: "Clutch Top SEO Agency", icon: <FaStar className="text-xl text-brand-lime inline" /> },
              { label: "100% White-Hat SEO Methods", icon: <FaLock className="text-xl text-brand-lime inline" /> },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center justify-center gap-2.5 text-white/80">
                {badge.icon}
                <span className="text-xs sm:text-sm font-bold tracking-wide">{badge.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 2: PLATFORM PARTNERSHIPS & KEY HIGHLIGHTS */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-center text-gray-400 text-xs sm:text-sm uppercase tracking-widest font-extrabold mb-10">
            Certified Technologies We Use & Platform Partnerships
          </h4>
          
          {/* Logo Marquee */}
          <div className="flex overflow-hidden relative transition-opacity group">
            <div className="flex animate-marquee gap-6 md:gap-8 pr-6 md:pr-8 flex-shrink-0 group-hover:[animation-play-state:paused] py-4">
              {[...partnersList, ...partnersList].map((p, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white px-8 py-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  {p.logo}
                  <span className="font-bold text-gray-800 tracking-tight text-lg whitespace-nowrap">{p.label}</span>
                </div>
              ))}
            </div>
            <div className="flex animate-marquee gap-6 md:gap-8 pr-6 md:pr-8 flex-shrink-0 group-hover:[animation-play-state:paused] py-4" aria-hidden="true">
              {[...partnersList, ...partnersList].map((p, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white px-8 py-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  {p.logo}
                  <span className="font-bold text-gray-800 tracking-tight text-lg whitespace-nowrap">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Highlighted Boxes */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { title: "Deep Keyword Research", desc: "We target high-intent search terms to capture active consumer inquiries.", icon: <FaSearch className="text-2xl text-brand-blue-accent" /> },
              { title: "Technical Optimization", desc: "Fast rendering, canonical redirect cleans, indexation scans, and schema markups.", icon: <FaCogs className="text-2xl text-brand-blue-accent" /> },
              { title: "Local SEO & Map Packs", desc: "Command the maps index by aligning listings, profiles, and localized keywords.", icon: <FaMapMarkedAlt className="text-2xl text-brand-blue-accent" /> },
              { title: "Link Building & PR", desc: "High-equity outreach targeting authority portals to secure safe link networks.", icon: <FaLink className="text-2xl text-brand-blue-accent" /> },
            ].map((box, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2.5 py-1 bg-brand-blue-light text-brand-blue-accent text-[10px] font-extrabold uppercase rounded">
                    Blueprint {idx + 1}
                  </span>
                  {box.icon}
                </div>
                <h4 className="text-brand-blue-deep font-extrabold text-lg mb-2">{box.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PRACTICE GROWTH METHODOLOGY (LAPTOP MOCKUP) */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Graphic */}
            <div className="relative">
              <div className="rounded-2xl shadow-2xl overflow-hidden aspect-[4/3] border border-gray-100 bg-gray-50 flex items-center justify-center">
                <img src="/images/seo_analytics.png" alt="SEO Analytics Dashboard" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-lime/20 rounded-2xl -z-10 animate-pulse-slow"></div>
            </div>

            {/* Right Copy */}
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue-light text-brand-blue-accent text-xs font-extrabold uppercase rounded-full">
                SEO Growth Engine
              </span>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight text-brand-blue-deep">
                How We Dominate Your Industry's Search Landscape
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                General agencies use standard cookie-cutter templates. At <strong className="text-brand-blue-deep font-black">SEOPals</strong>, we architect customized sitemap structures, content clusters, and outreach networks designed specifically for your corporate target audience.
              </p>

              {/* Checklist */}
              <ul className="space-y-3.5">
                {[
                  "Transactional Intent Keyword Targeting",
                  "Structured Schema Deployments & Rich Results Markup",
                  "Dedicated Account Director & Search Specialists",
                  "Transparent Live Tracking Dashboards & Reports",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheck className="text-brand-blue-accent text-sm mt-1 shrink-0" />
                    <span className="text-brand-blue-deep font-bold text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-lime text-brand-blue-deep font-black text-sm uppercase rounded-lg hover:bg-brand-lime-hover shadow-lg shadow-brand-lime/20"
                >
                  SCHEDULE A STRATEGY CALL
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: LEADS BANNER with background image */}
      <section 
        className="py-20 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/leads_puzzle.png')" }}
      >
        {/* Medium Blue Overlay */}
        <div className="absolute inset-0 bg-brand-blue-medium/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase">
              NEED MORE QUALIFIED LEADS?
            </h3>
            <p className="text-white/80 text-sm sm:text-base max-w-xl">
              Let us run a detailed audit scan on your website to identify competition ranking gaps today.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 bg-brand-lime text-brand-blue-deep font-black text-sm uppercase rounded-lg hover:bg-brand-lime-hover shadow-lg shadow-brand-lime/10 shrink-0 text-center"
          >
            GET YOUR FREE AUDIT REPORT
          </Link>
        </div>
      </section>

      {/* SECTION 5: SERVICES GRID */}
      <section className="section-padding bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue-light text-brand-blue-accent text-xs font-extrabold uppercase rounded-full mb-4">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-deep">
              Our SEO Services Include
            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "On-Page Optimization",
                desc: "Optimizing header tags, meta descriptions, image alts, semantic layouts, and copy structures to convert traffic.",
                icon: <FaFileAlt />
              },
              {
                title: "Link Building & Digital PR",
                desc: "Securing authoritative backlinks from high-domain blogs, business directories, and editorial sites.",
                icon: <FaLink />
              },
              {
                title: "Technical SEO & Speed",
                desc: "Core Web Vitals acceleration, site speed audits, schema markup implementation, and indexation checks.",
                icon: <FaServer />
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-100 hover-lift flex flex-col justify-between space-y-6">
                <div>
                  <div className="w-12 h-12 bg-brand-blue-light text-brand-blue-accent rounded-lg flex items-center justify-center text-xl font-bold">
                    {service.icon}
                  </div>
                  <h4 className="text-brand-blue-deep font-extrabold text-xl mb-3 mt-4">{service.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
                <Link
                  href="/services"
                  className="text-brand-blue-accent font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:text-brand-blue-deep transition-colors"
                >
                  Learn More <span>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-blue-deep text-white font-bold text-sm uppercase rounded-lg hover:bg-brand-navy transition-colors"
            >
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: CLIENT TESTIMONIALS */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue-light text-brand-blue-accent text-xs font-extrabold uppercase rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-deep">
              What Our Clients Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "SEOPals took our B2B SaaS platform from page 3 to the top spot on search results in under 5 months. Our organic lead acquisition count rose by over 180%. The live reporting dashboards keep us completely in sync.",
                author: "Sarah Miller",
                role: "Director of Marketing, Techflow Solutions"
              },
              {
                quote: "We had tried multiple search agencies before finding SEOPals, but their technical architectures and local listing cleanups made all the difference. Our customer acquisitions rose dramatically.",
                author: "James Carter",
                role: "Founder, Carter Logistics Co."
              },
              {
                quote: "Their content writers build thorough, high-authority articles that naturally convert searchers into buyers. Their client support and weekly update schedule are outstanding.",
                author: "Emily Chen",
                role: "VP of Growth, Chen Capital Group"
              }
            ].map((test, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-between hover-lift">
                <div className="space-y-6">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => <FaStar key={s} className="text-brand-lime text-sm" />)}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-200/50 mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue-deep text-brand-lime flex items-center justify-center font-bold text-xs">
                    {test.author.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-brand-blue-deep font-bold text-sm">{test.author}</h5>
                    <p className="text-gray-400 text-xs">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: RATINGS PROOF BANNER */}
      <section className="bg-brand-blue-deep py-12 text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Rating Badges */}
          <div className="flex flex-wrap justify-center gap-10 md:gap-14">
            <div className="text-center">
              <div className="text-2xl font-black text-brand-lime flex items-center justify-center gap-1.5">
                <FaGoogle className="text-lg" /> 5.0
              </div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">Google (150+ Reviews)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-brand-lime flex items-center justify-center gap-1.5">
                <FaFacebook className="text-lg" /> 5.0
              </div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">Facebook (80+ Reviews)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-brand-lime flex items-center justify-center gap-1.5">
                <FaAward className="text-lg" /> 4.9
              </div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">Clutch (65+ Reviews)</div>
            </div>
          </div>

          {/* Stacked Avatars & Button */}
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3 overflow-hidden">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-brand-blue-medium border-2 border-brand-blue-deep flex items-center justify-center text-[10px] font-bold text-white">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="px-6 py-3.5 bg-brand-lime text-brand-blue-deep font-black text-xs uppercase rounded-lg hover:bg-brand-lime-hover shadow-md"
            >
              VIEW CASE STUDIES
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: 4-STEP BLUEPRINT */}
      <section className="section-padding bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue-light text-brand-blue-accent text-xs font-extrabold uppercase rounded-full mb-4">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-deep">
              Our 4-Step SEO Growth Blueprint
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery & Audit", desc: "We scan current indexations, duplicate tag configurations, load speeds, and competitor link gaps.", icon: <FaSearch /> },
              { step: "02", title: "Strategy & Tag Setup", desc: "Map transactional target terms, fix redirect canonical errors, and configure tracking triggers.", icon: <FaSlidersH /> },
              { step: "03", title: "Optimizations & Clusters", desc: "Deploy treatment content siloing systems, clean technical crawler blockages, and secure backlinks.", icon: <FaWrench /> },
              { step: "04", title: "Authority & Scale", desc: "Analyze ranking changes monthly, update schemas, and expand into neighboring market zones.", icon: <FaChartLine /> }
            ].map((step, idx) => (
              <div key={idx} className="relative bg-white rounded-xl p-8 border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between text-brand-blue-accent">
                  <span className="text-xl">{step.icon}</span>
                  <span className="text-3xl font-black text-gray-100">{step.step}</span>
                </div>
                <h4 className="text-brand-blue-deep font-extrabold text-lg">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: ALTERNATING DETAILED SECTIONS WITH GENERATED IMAGES */}
      <section className="section-padding bg-white space-y-24 sm:space-y-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Row 1: Technical */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <div className="space-y-6">
              <span className="text-brand-blue-accent font-extrabold text-xs uppercase tracking-widest block">Foundation</span>
              <h3 className="text-2xl sm:text-3xl font-black text-brand-blue-deep">Technical SEO Audits & Architecture</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Google won&apos;t rank pages if search crawlers encounter error patterns. We repair load bottleneck speeds, duplicate tag arrays, sitemap loops, and broken canonical links.
              </p>
              <ul className="space-y-3 text-sm">
                {["Core Web Vitals rendering optimizations", "Comprehensive search console diagnostics", "Structured schema markup deployment", "SSL canonical redirects configuration"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-green-500 text-xs shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link href="/contact" className="px-6 py-3 bg-brand-lime text-brand-blue-deep font-bold text-xs uppercase rounded hover:bg-brand-lime-hover shadow-sm inline-block">
                  Request Tech Audit
                </Link>
              </div>
            </div>
            {/* Visual Box with Image */}
            <div className="rounded-2xl aspect-[4/3] shadow-lg border border-gray-100 overflow-hidden bg-gray-50 flex">
              <img src="/images/technical_architecture.png" alt="Technical SEO Audits & Architecture" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Row 2: Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:direction-rtl">
            <div className="lg:order-2 space-y-6">
              <span className="text-brand-blue-accent font-extrabold text-xs uppercase tracking-widest block">Engagement</span>
              <h3 className="text-2xl sm:text-3xl font-black text-brand-blue-deep">High-Quality Content & Keyword Targeting</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Your consumers research options before choosing a vendor. Our copywriters design high-intent blogs, articles, and category descriptions to rank for high-intent search queries.
              </p>
              <ul className="space-y-3 text-sm">
                {["User search intent layout optimization", "Conversion-focused landing page copy", "Competitor keywords gap analysis", "Editorial-quality content production"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-green-500 text-xs shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link href="/contact" className="px-6 py-3 bg-brand-lime text-brand-blue-deep font-bold text-xs uppercase rounded hover:bg-brand-lime-hover shadow-sm inline-block">
                  See Content Blueprint
                </Link>
              </div>
            </div>
            {/* Visual Box with Image */}
            <div className="lg:order-1 rounded-2xl aspect-[4/3] shadow-lg border border-gray-100 overflow-hidden bg-gray-50 flex">
              <img src="/images/content_writing.png" alt="High-Quality Content & Keyword Targeting" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Row 3: Local Map Pack */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <span className="text-brand-blue-accent font-extrabold text-xs uppercase tracking-widest block">Map Packs</span>
              <h3 className="text-2xl sm:text-3xl font-black text-brand-blue-deep">Local SEO & Map Pack Domination</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Local maps generate massive amounts of booking clicks. We organize profile categories, citation listings, review triggers, and location schemas to place your business on top.
              </p>
              <ul className="space-y-3 text-sm">
                {["Google Maps ranking optimization", "Listing NAP consistency audits", "Organic review triggers setups", "Custom schema markup configurations"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-green-500 text-xs shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link href="/contact" className="px-6 py-3 bg-brand-lime text-brand-blue-deep font-bold text-xs uppercase rounded hover:bg-brand-lime-hover shadow-sm inline-block">
                  Claim My Free Audit
                </Link>
              </div>
            </div>
            {/* Visual Box with Image */}
            <div className="rounded-2xl aspect-[4/3] shadow-lg border border-gray-100 overflow-hidden bg-gray-50 flex">
              <img src="/images/local_maps.png" alt="Local SEO & Map Pack Domination" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <section className="section-padding bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue-light text-brand-blue-accent text-xs font-extrabold uppercase rounded-full mb-4">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-deep">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left font-extrabold text-brand-blue-deep hover:text-brand-blue-accent flex justify-between items-center transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span>{activeFaq === idx ? <FaChevronUp className="text-sm text-gray-400" /> : <FaChevronDown className="text-sm text-gray-400" />}</span>
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 text-gray-500 text-sm sm:text-base leading-relaxed border-t border-gray-50 pt-4 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: FROM THE BLOG / INSIGHTS */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue-light text-brand-blue-accent text-xs font-extrabold uppercase rounded-full mb-4">
              Resources
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-deep">
              From the SEO Blog
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Organic Search Optimization Guidelines for 2026",
                category: "Marketing Strategies",
                desc: "An end-to-end blueprint showing how to capture active search terms, structure layouts, and optimize metadata indexes."
              },
              {
                title: "Evaluating Technical Core Web Vitals Performance",
                category: "Technical Auditing",
                desc: "A detailed layout audit exploring image sizing, load times parameters, sitemap configurations, and redirect patterns."
              },
              {
                title: "How Long Does Local Map Pack Optimization Take?",
                category: "Ranking Timeline",
                desc: "An analysis of citation setups, directory listings audits, review triggers, and rating optimizations timeline."
              }
            ].map((blog, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover-lift flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-brand-blue-accent text-xs font-extrabold uppercase tracking-wide block mb-3">
                    {blog.category}
                  </span>
                  <h4 className="text-brand-blue-deep font-extrabold text-lg mb-3 leading-tight">
                    {blog.title}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {blog.desc}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="text-brand-blue-deep font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:text-brand-blue-accent"
                >
                  Read Article <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: BOTTOM AUDIT PROPOSAL FORM */}
      <section className="bg-brand-blue-light py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Pitch */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white text-brand-blue-accent text-xs font-extrabold uppercase rounded-full">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-deep uppercase">
                Ready to Dominate Search?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Connect with our certified SEO specialists today. We will run a deep audit on your current ranking blockages, identify key competition gaps, and build a customized proposal plan for your review.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <FaPhoneAlt className="text-brand-blue-accent" />
                  <span>Call Us: <span className="font-extrabold text-brand-blue-deep">+1 (555) 123-4567</span></span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <FaEnvelope className="text-brand-blue-accent" />
                  <span>Email: <span className="font-extrabold text-brand-blue-deep">hello@seopals.com</span></span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <FaMapMarkerAlt className="text-brand-blue-accent" />
                  <span>Location: <span className="font-extrabold text-brand-blue-deep">123 SEO Boulevard, Suite 400, NY 10001</span></span>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl">
                <h3 className="text-2xl font-black text-brand-blue-deep mb-6">Request A Free Proposal</h3>
                
                <form onSubmit={handleProposalSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-brand-blue-deep uppercase tracking-wider mb-1.5">Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={proposalForm.name}
                        onChange={(e) => setProposalForm({ ...proposalForm, name: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold text-brand-blue-deep uppercase tracking-wider mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={proposalForm.email}
                        onChange={(e) => setProposalForm({ ...proposalForm, email: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue-accent"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-brand-blue-deep uppercase tracking-wider mb-1.5">Website URL *</label>
                      <input
                        type="url"
                        required
                        placeholder="https://www.company.com"
                        value={proposalForm.website}
                        onChange={(e) => setProposalForm({ ...proposalForm, website: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold text-brand-blue-deep uppercase tracking-wider mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={proposalForm.phone}
                        onChange={(e) => setProposalForm({ ...proposalForm, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-brand-blue-deep uppercase tracking-wider mb-1.5">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your business sitemaps, current organic rankings targets, and lead targets..."
                      value={proposalForm.message}
                      onChange={(e) => setProposalForm({ ...proposalForm, message: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue-accent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-4 mt-2 font-black text-sm uppercase tracking-wider rounded-lg transition-all ${
                      proposalSubmitted
                        ? "bg-green-600 text-white"
                        : "bg-brand-lime text-brand-blue-deep hover:bg-brand-lime-hover shadow-md"
                    }`}
                  >
                    {proposalSubmitted ? <><FaCheck className="inline mr-2" /> Proposal Requested!</> : "SUBMIT REQUEST"}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
