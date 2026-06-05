import PageHero from "@/components/PageHero";
import Link from "next/link";
import { FaFileAlt, FaCogs, FaLink, FaMapMarkedAlt, FaChartLine, FaSlidersH, FaCheck, FaPhoneAlt } from "react-icons/fa";

export const metadata = {
  title: "Services | SEOPals — Specialist SEO Solutions",
  description:
    "Explore our specialized SEO capabilities including technical audits, local map pack optimization, corporate-intent content, and link outreach.",
};

const services = [
  {
    id: "on-page",
    title: "On-Page SEO & User Intent",
    tagline: "Optimize Layouts to Convert Browsers into Buyers",
    description:
      "We rewrite website metadata, adjust header tag hierarchies, optimize treatment-specific content clusters, and streamline call-to-actions. We ensure your pages align perfectly with search intent while convincing users to take action.",
    benefits: [
      "Custom buyer-intent keyword mapping",
      "Optimized service description headers & tags",
      "Compelling title and meta tags to improve CTR",
      "Internal linking architecture optimized for conversions",
      "Local schema markup and structured data",
      "Image alt-text optimization and loading speed checks",
    ],
    icon: <FaFileAlt />,
    color: "blue",
    image: "/images/onpage_seo.png",
  },
  {
    id: "technical",
    title: "Technical SEO & Sitemap Health",
    tagline: "Build a Flawless Search Architecture Foundation",
    description:
      "Search spiders cannot rank what they cannot crawl. We fix sitemap warnings, clear duplicate redirects, optimize load speeds, and resolve indexation failures so Google indexes your pages efficiently.",
    benefits: [
      "Core Web Vitals & site speed acceleration",
      "Search console crawability and indexation repairs",
      "Sitemap XML generation and robots.txt cleanup",
      "Duplicate path cleanups and redirect canonical loops fix",
      "Responsive layout validations and mobile-first optimization",
      "Structured data rich-snippet schemas deployment",
    ],
    icon: <FaCogs />,
    color: "lime",
    image: "/images/technical_architecture.png",
  },
  {
    id: "link-building",
    title: "High-Authority Link Outreach",
    tagline: "Earn Domain Trust Through Clean Editorial Links",
    description:
      "We execute manual outreach to secure authoritative backlinks from corporate blogs, business research platforms, and local chambers. We avoid spammy link pools to protect your ranking long-term.",
    benefits: [
      "Manual outreach targeting authority business blogs",
      "Guest outreach on niche-relevant industry directories",
      "Local citation list checks and cleanups",
      "Competitor backlink gap analysis",
      "Toxic link profile audits and disavow setup",
      "Digital PR outreach campaigns for local mentions",
    ],
    icon: <FaLink />,
    color: "blue",
    image: "/images/link_building.png",
  },
  {
    id: "local-seo",
    title: "Local SEO & Google Maps Domination",
    tagline: "Command the Google Map Pack Search Zone",
    description:
      "For local businesses, map packs generate massive volumes of sales calls. We optimize your Google Business Profile (GBP), sync directory lists, and trigger organic review generation strategies.",
    benefits: [
      "Google Business Profile setup and weekly posts",
      "Google Maps ranking optimizations",
      "Local directory listing synchronization",
      "Consistent NAP (Name, Address, Phone) citation audit",
      "Reviews trigger workflows and reputation advice",
      "Geo-targeted local landing page creation",
    ],
    icon: <FaMapMarkedAlt />,
    color: "lime",
    image: "/images/local_maps.png",
  },
  {
    id: "content",
    title: "Services Content Strategy",
    tagline: "Write Copy That Ranks & Educates Buyers",
    description:
      "Users research solutions, procedures, and costs before choosing a provider. Our copywriters build comprehensive educational articles, blog cluster networks, and product service pages.",
    benefits: [
      "Services-focused keyword editorial calendar",
      "Buyer educational blog articles creation",
      "High-intent landing pages copywriting",
      "Existing content refresh and updates",
      "Topic authority clusters linking structure",
      "Conversion-focused call-to-action optimization",
    ],
    icon: <FaSlidersH />,
    color: "blue",
    image: "/images/content_writing.png",
  },
  {
    id: "audits",
    title: "SEO Audits & Live Dashboards",
    tagline: "Absolute Transparency Over Campaigns ROI",
    description:
      "We provide comprehensive site visibility audits and link your analytics data into a direct, live reporting dashboard. You can review clicks, rankings, local maps, and keyword positions 24/7.",
    benefits: [
      "Detailed technical and indexation health check",
      "Competitor keywords and backlink gap analysis",
      "Custom analytics dashboard integration",
      "HIPAA-compliant client booking call tracking",
      "Monthly performance and progress summary",
      "Sitemap audit and ranking projection reports",
    ],
    icon: <FaChartLine />,
    color: "lime",
    image: "/images/seo_analytics.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-brand-blue-deep overflow-hidden">
      <PageHero
        badge="Our Capabilities"
        title="SEO Architectures That"
        highlight="Deliver Rankings"
        description="We don't do basic SEO. We build enterprise-grade search architectures designed to capture high-intent traffic and dominate competitive SERPs."
        bgImage="/images/services_hero.png"
      />

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Visual Side */}
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="rounded-2xl aspect-[4/3] shadow-lg border border-gray-100 overflow-hidden flex bg-gray-50">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-extrabold uppercase rounded-full mb-4 ${
                    service.color === "blue"
                      ? "bg-brand-blue-light text-brand-blue-accent"
                      : "bg-brand-lime/10 text-brand-blue-deep"
                  }`}
                >
                  Capability 0{i + 1}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-brand-blue-deep mb-4 leading-tight">
                  {service.tagline}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <FaCheck className="text-brand-blue-accent text-xs mt-1 shrink-0" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-tight">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 px-8 py-3.5 font-black text-sm uppercase rounded-lg transition-all duration-300 ${
                    service.color === "blue"
                      ? "bg-brand-blue-deep text-white hover:bg-brand-navy shadow-md"
                      : "bg-brand-lime text-brand-blue-deep hover:bg-brand-lime-hover shadow-md"
                  }`}
                >
                  Request Strategy Call
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why SEOPals Services (The Difference) */}
      <section id="difference" className="section-padding bg-brand-blue-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:40px_40px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-lime/10 text-brand-lime text-xs font-extrabold uppercase rounded-full mb-4">
              The SEOPals Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Engineered Specifically For Brand Growth
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { value: "97%", label: "Client Retention Rate", desc: "Our clients stay because we deliver measurable growth, month-over-month." },
              { value: "234%", label: "Average Traffic Increase", desc: "Our brands experience consistent organic user traffic growth within 12 months." },
              { value: "3.5x", label: "Average Campaign ROI", desc: "We track leads and phone calls to ensure a highly profitable customer capture rate." },
              { value: "90 Day", label: "Initial Results Timeline", desc: "Map rankings and on-page metadata optimization show organic growth in under 90 days." },
              { value: "24/7", label: "Dashboard Access", desc: "Real-time client portal access showing rankings, sitemap issues, backlinks, and traffic." },
              { value: "0", label: "Long-Term Contract Lock-ins", desc: "We work on a flexible, monthly-retainer model. We earn your business continuously." },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-black text-brand-lime mb-2">{item.value}</div>
                <div className="text-white font-extrabold text-sm mb-2">{item.label}</div>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue-light py-20 border-t border-gray-100">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-deep uppercase">
            Start Optimizing Your Business Today
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Schedule a free 30-minute organic search consultation and receive a custom sitemap, speed, and maps audit report.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-brand-lime text-brand-blue-deep font-black text-sm uppercase rounded-lg hover:bg-brand-lime-hover shadow-lg shadow-brand-lime/10"
            >
              Get Your Free Audit
            </Link>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white border border-gray-200 text-brand-blue-deep font-bold text-sm uppercase rounded-lg hover:bg-gray-50 shadow-sm"
            >
              <FaPhoneAlt /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
