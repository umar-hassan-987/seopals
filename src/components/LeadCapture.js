"use client";

import { useState } from "react";
import { FaLock, FaBolt, FaBullseye, FaCheck } from "react-icons/fa";

export default function LeadCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative bg-navy-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-400/10 text-lime-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
            Get Started Today
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Grow Your{" "}
            <span className="text-blue-400">Organic Traffic?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Join 100+ businesses that trust SEOPals to drive their search engine success. Get your free SEO audit today.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-lime-400 text-navy-900 font-bold text-sm rounded-lg hover:bg-lime-500 transition-all duration-300 hover:shadow-xl hover:shadow-lime-400/20 whitespace-nowrap"
              >
                {submitted ? <><FaCheck className="inline mr-2" /> Sent!</> : "Get Free Audit"}
              </button>
            </div>
            <p className="text-gray-600 text-xs mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </form>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
            {[
              { icon: <FaLock />, text: "SSL Secured" },
              { icon: <FaBolt />, text: "Results in 90 Days" },
              { icon: <FaBullseye />, text: "No Lock-in Contracts" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-gray-500 text-sm">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
