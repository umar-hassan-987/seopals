import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "On-Page SEO",
    description: "Strategic optimization of your content, meta tags, headings, and internal linking to maximize relevance and search visibility.",
    color: "blue-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.25-3.032a.75.75 0 010-1.276l5.25-3.032a1.5 1.5 0 011.56 0l5.25 3.032a.75.75 0 010 1.276l-5.25 3.032a1.5 1.5 0 01-1.56 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.72 17.47l5.25 3.032a1.5 1.5 0 001.56 0l5.25-3.032" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.72 13.47l5.25 3.032a1.5 1.5 0 001.56 0l5.25-3.032" />
      </svg>
    ),
    title: "Technical SEO",
    description: "Deep technical audits covering site speed, Core Web Vitals, crawlability, indexation, and structured data implementation.",
    color: "lime-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.193-5.193a4.5 4.5 0 00-6.364-6.364L3.444 6.42a4.5 4.5 0 001.06 7.09" />
      </svg>
    ),
    title: "Link Building",
    description: "White-hat outreach campaigns that earn authoritative backlinks from high-domain-authority sites in your niche.",
    color: "blue-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Local SEO",
    description: "Dominate local search with Google Business Profile optimization, local citations, reviews management, and geo-targeted strategies.",
    color: "lime-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
    title: "Content Strategy",
    description: "Data-driven content planning, creation, and optimization that attracts qualified traffic and establishes thought leadership.",
    color: "blue-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Analytics & Reporting",
    description: "Transparent, real-time performance dashboards with actionable insights on rankings, traffic, conversions, and ROI.",
    color: "lime-400",
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-500 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-4">
            Comprehensive SEO Services
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From technical foundations to creative content, we cover every dimension of search engine optimization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl p-8 border border-gray-100 hover-lift hover:border-blue-500/20 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-${service.color}/10 text-${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                style={{
                  backgroundColor: service.color === "blue-500" ? "rgba(43,127,255,0.1)" : "rgba(184,230,46,0.1)",
                  color: service.color === "blue-500" ? "#2B7FFF" : "#9ECB23"
                }}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-blue-500 text-sm font-semibold group-hover:gap-2 transition-all duration-300"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
