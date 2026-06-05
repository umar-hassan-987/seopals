import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-navy-900 aspect-[4/3]">
              {/* Decorative content instead of image */}
              <div className="absolute inset-0 bg-hero-gradient flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                  <div className="text-white text-3xl font-bold mb-2">15+ Years</div>
                  <div className="text-blue-300 text-sm">Delivering SEO Excellence</div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="glass-card rounded-xl p-4">
                      <div className="text-lime-400 font-bold text-2xl">500+</div>
                      <div className="text-gray-400 text-xs">Projects Done</div>
                    </div>
                    <div className="glass-card rounded-xl p-4">
                      <div className="text-blue-400 font-bold text-2xl">50+</div>
                      <div className="text-gray-400 text-xs">Team Members</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-lime-400/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-xl -z-10" />
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-500 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              About SEOPals
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-6 leading-tight">
              We Build SEO Strategies That{" "}
              <span className="text-blue-500">Actually Work</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Since 2009, SEOPals has been the trusted partner for businesses seeking sustainable organic growth. We don&apos;t believe in shortcuts — our methodology is built on deep technical expertise, creative content strategies, and transparent reporting.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team of certified SEO specialists, content strategists, and data analysts work together to deliver measurable results. We treat every client&apos;s business as our own and are committed to long-term success.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Data-Driven Approach",
                "Certified Specialists",
                "Transparent Reporting",
                "Proven Track Record",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-lime-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-navy-800 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-900 text-white font-semibold text-sm rounded-lg hover:bg-navy-800 transition-all duration-300 group"
            >
              Learn More About Us
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
