import Link from "next/link";
import { FaRocket, FaChartLine } from "react-icons/fa";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "97%", label: "Client Retention" },
  { value: "12,100+", label: "Keywords Ranked" },
  { value: "100+", label: "Clients Served" },
];

export default function HeroSection() {
  return (
    <section className="relative bg-hero-gradient min-h-screen flex items-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-lime-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium uppercase tracking-wider mb-8">
              <span className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse-slow" />
              #1 Rated SEO Agency
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Digital{" "}
              <span className="text-gradient">SEO Services</span>
              <br />
              Company
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
              We architect data-driven SEO strategies that propel your business to the top of search results. More visibility. More traffic. More revenue.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-lime-400 text-navy-900 font-bold text-sm rounded-lg hover:bg-lime-500 transition-all duration-300 hover:shadow-xl hover:shadow-lime-400/20 group"
              >
                Start Your Project
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold text-sm rounded-lg hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Decorative */}
          <div className="hidden lg:flex justify-center animate-slide-in-right">
            <div className="relative">
              {/* Main card */}
              <div className="w-[420px] h-[480px] rounded-2xl bg-gradient-to-br from-navy-700/80 to-navy-800/80 backdrop-blur border border-white/10 p-8 flex flex-col justify-between glow-blue">
                {/* Chart mockup */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-white font-bold text-lg">Traffic Growth</div>
                      <div className="text-gray-400 text-sm">Last 12 months</div>
                    </div>
                    <div className="px-3 py-1 bg-lime-400/10 text-lime-400 text-xs font-bold rounded-full">
                      +247%
                    </div>
                  </div>
                  {/* Simplified chart */}
                  <div className="flex items-end gap-2 h-40 px-2">
                    {[25, 35, 30, 45, 42, 55, 60, 52, 70, 78, 85, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm transition-all duration-500"
                        style={{
                          height: `${h}%`,
                          background: i >= 9 ? "linear-gradient(to top, #2B7FFF, #5A9FFF)" : "rgba(43, 127, 255, 0.2)",
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <div className="text-lime-400 font-bold text-lg">1.2M</div>
                    <div className="text-gray-500 text-xs">Impressions</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-bold text-lg">48K</div>
                    <div className="text-gray-500 text-xs">Clicks</div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">4.2%</div>
                    <div className="text-gray-500 text-xs">CTR</div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -left-4 px-4 py-2 bg-lime-400 text-navy-900 font-bold text-sm rounded-lg shadow-lg shadow-lime-400/20 animate-float flex items-center gap-1.5">
                <FaRocket /> Top Rankings
              </div>

              {/* Floating badge bottom */}
              <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-blue-500 text-white font-bold text-sm rounded-lg shadow-lg shadow-blue-500/20 animate-float flex items-center gap-1.5" style={{ animationDelay: "3s" }}>
                <FaChartLine /> +247% Growth
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
