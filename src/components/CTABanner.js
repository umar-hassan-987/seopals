import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-cta-gradient py-20 lg:py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)", backgroundSize: "30px 30px" }} />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Need More{" "}
            <span className="text-lime-400">Qualified Leads?</span>
          </h2>
          <p className="text-blue-100/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Our proven SEO strategies have helped 100+ businesses increase organic traffic by an average of 247%. Let&apos;s do the same for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-lime-400 text-navy-900 font-bold text-sm rounded-lg hover:bg-lime-500 transition-all duration-300 hover:shadow-xl hover:shadow-lime-400/20 group"
            >
              Get Your Free SEO Audit
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white/10 border border-white/20 text-white font-semibold text-sm rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
