import { FaBullseye, FaChartBar, FaLink, FaBolt, FaGlobe, FaShieldAlt, FaMobileAlt, FaTrophy } from "react-icons/fa";

const features = [
  { icon: <FaBullseye />, title: "Precision Targeting", description: "Laser-focused keyword research that connects you with high-intent buyers." },
  { icon: <FaChartBar />, title: "Real-Time Analytics", description: "Live dashboards showing your rankings, traffic, and conversions 24/7." },
  { icon: <FaLink />, title: "Authority Building", description: "Ethical link acquisition from respected publications in your industry." },
  { icon: <FaBolt />, title: "Speed Optimization", description: "Core Web Vitals and page speed improvements for better user experience." },
  { icon: <FaGlobe />, title: "Global & Local Reach", description: "Multi-location SEO campaigns tailored to your target markets." },
  { icon: <FaShieldAlt />, title: "Penalty Recovery", description: "Expert diagnosis and recovery from algorithmic and manual penalties." },
  { icon: <FaMobileAlt />, title: "Mobile-First SEO", description: "Optimized for the mobile-first index to capture on-the-go searchers." },
  { icon: <FaTrophy />, title: "Competitive Analysis", description: "Deep competitor intelligence to find gaps and opportunities." },
];

const partners = [
  { name: "Google", label: "Google Partner" },
  { name: "Facebook", label: "Meta Partner" },
  { name: "Clutch", label: "Top Agency 2024" },
  { name: "Semrush", label: "Certified Agency" },
];

export default function FeaturesGrid() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-400/10 text-lime-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Why SEOPals
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Everything You Need to{" "}
            <span className="text-blue-400">Dominate Search</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our comprehensive toolkit and expertise covers every aspect of SEO success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {features.map((feature, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/20 transition-all duration-300 group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-sm mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Partner Badges */}
        <div className="border-t border-white/10 pt-12">
          <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-8">
            Certified & Recognized
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-3 px-6 py-3 glass-card rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">
                  {partner.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{partner.name}</div>
                  <div className="text-gray-500 text-xs">{partner.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
