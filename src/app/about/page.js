import PageHero from "@/components/PageHero";
import Link from "next/link";
import { FaCheck, FaAward, FaStar, FaEye, FaBolt, FaLock, FaChartLine } from "react-icons/fa";

export const metadata = {
  title: "About Us | SEOPals — Specialist SEO Experts",
  description:
    "Learn about SEOPals — 15+ years of specialist SEO excellence ranking corporate websites, E-commerce stores, and SaaS businesses on the first page of Google.",
};

const values = [
  {
    icon: <FaEye className="text-2xl text-brand-blue-accent" />,
    title: "Absolute Transparency",
    description: "Real-time client ranking dashboards and sitemap audits. We don't hide our process behind black-box reports.",
  },
  {
    icon: <FaBolt className="text-2xl text-brand-blue-accent" />,
    title: "Speed & Innovation",
    description: "Algorithm updates occur constantly. We continuously adapt sitemaps, schemas, and tag architectures to keep you on page 1.",
  },
  {
    icon: <FaLock className="text-2xl text-brand-blue-accent" />,
    title: "Safe White-Hat SEO",
    description: "100% white-hat organic reach practices constructed with medical, SaaS, and E-commerce search standards in mind.",
  },
  {
    icon: <FaChartLine className="text-2xl text-brand-blue-accent" />,
    title: "Conversions First",
    description: "Rankings are useless without conversions. We focus on search intent layouts that drive active leads and sales queries.",
  },
];

const whyChooseUs = [
  {
    number: "01",
    title: "Specialist Industry Domain",
    description: "Over 15 years optimizing search engine visibility specifically for corporate brands, SaaS platforms, and retail companies.",
  },
  {
    number: "02",
    title: "Live Dashboard Tracking",
    description: "We set up direct reporting dashboards linking your rankings, clicks, sitemaps, and sales calls. You know exactly your ROI.",
  },
  {
    number: "03",
    title: "Certified Search Experts",
    description: "Our in-house technical developers and B2B copywriters are Google certified, bringing elite skills to your site's foundation.",
  },
  {
    number: "04",
    title: "Custom Intent Strategy",
    description: "No generic templates. Every SEO campaign starts with a deep keyword analysis mapping terms actual buyers look for.",
  },
];

const expertise = [
  { value: "15+", label: "Years in SEO" },
  { value: "475+", label: "Brands Ranked" },
  { value: "150+", label: "Active Businesses" },
  { value: "12K+", label: "Keywords Page 1" },
  { value: "234%", label: "Avg Traffic Growth" },
  { value: "97%", label: "Client Retention" },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-brand-blue-deep overflow-hidden">
      <PageHero
        badge="About SEOPals"
        title="We Architect Enterprise"
        highlight="Organic Search Success"
        description="Since 2009, SEOPals has been the trusted search marketing partner for ambitious brands, SaaS platforms, and local services seeking to scale conversions."
        bgImage="/images/about_hero.png"
      />

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual */}
            <div className="relative">
              <div 
                className="rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center p-10 shadow-xl border border-white/5 glow-blue bg-cover bg-center relative"
                style={{ backgroundImage: "url('/images/our_journey.png')" }}
              >
                <div className="absolute inset-0 bg-brand-blue-deep/80 backdrop-blur-[2px]"></div>
                <div className="text-center space-y-6 relative z-10">
                  <div className="w-24 h-24 mx-auto rounded-full bg-brand-lime/10 border-2 border-brand-lime/30 flex items-center justify-center text-4xl animate-float text-brand-lime">
                    <FaAward />
                  </div>
                  <div>
                    <h3 className="text-white text-2xl font-black mb-2">Our Journey</h3>
                    <p className="text-gray-200 text-sm max-w-xs mx-auto">
                      Founded to make search engine optimization highly transparent, secure, and results-focused.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-lime/10 rounded-2xl -z-10 animate-pulse-slow" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue-light text-brand-blue-accent text-xs font-extrabold uppercase rounded-full">
                Our History
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-deep leading-tight">
                An SEO Agency Designed For <span className="text-brand-blue-accent">Leads & Sales</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                SEOPals was established with a singular focus: to replace vague SEO promises with transparent, measurable organic lead growth. We recognized that general marketing agencies lacked the deep technical understanding required to optimize websites online.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Over 15 years, we have built a dedicated team of technical sitemap architects, copywriters, and local GBP experts who focus exclusively on the search landscape. We track how search engine algorithms evolve so your company remains on page 1.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Today, we manage rankings for over 150 active brands across the United States. We serve what we represent: absolute commitment to your brand's long-term organic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover-lift space-y-4">
              <div className="w-14 h-14 rounded-xl bg-brand-blue-light text-brand-blue-accent flex items-center justify-center text-2xl">
                <FaAward />
              </div>
              <h3 className="text-2xl font-black text-brand-blue-deep">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To build high-performing SEO architectures that increase search engine visibility for brands. We aim to connect active user search intent with leading corporations in a safe, compliant manner.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover-lift space-y-4">
              <div className="w-14 h-14 rounded-xl bg-brand-lime/10 text-brand-blue-deep flex items-center justify-center text-2xl text-brand-blue-accent">
                <FaEye />
              </div>
              <h3 className="text-2xl font-black text-brand-blue-deep">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To set the industry gold-standard for organic search optimization—defined by deep data tracking, technical conformity, clean local citations, and verifiable customer conversion metrics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue-light text-brand-blue-accent text-xs font-extrabold uppercase rounded-full mb-4">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-deep">
              What Drives Our Campaigns
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-8 text-center hover-lift border border-transparent hover:border-brand-blue-light space-y-4"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-brand-blue-light text-brand-blue-accent flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="text-brand-blue-deep font-extrabold text-lg">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-blue-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-lime/10 text-brand-lime text-xs font-extrabold uppercase rounded-full mb-4">
              SEOPals Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Why Corporate Brands Partner With Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="text-3xl font-black text-brand-lime/20 group-hover:text-brand-lime/50 transition-colors">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-white font-extrabold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Board */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue-light text-brand-blue-accent text-xs font-extrabold uppercase rounded-full mb-4">
              Proven Metrics
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-deep">
              The Metrics of Our Growth
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {expertise.map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl bg-gray-50 hover-lift border border-gray-100"
              >
                <div className="text-3xl sm:text-4xl font-black text-brand-blue-deep mb-2">{item.value}</div>
                <div className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider font-extrabold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cta-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:30px_30px]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Ready to Partner with Specialist SEO Architects?
          </h2>
          <p className="text-gray-200 text-lg max-w-xl mx-auto">
            Get your free detailed organic traffic audit and learn how many new leads are searching in your local map zone.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-brand-lime text-brand-blue-deep font-black text-sm uppercase rounded-lg hover:bg-brand-lime-hover shadow-lg shadow-brand-lime/10"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
