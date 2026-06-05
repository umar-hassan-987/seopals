"use client";

import { useState } from "react";

const testimonials = [
  {
    quote: "SEOPals transformed our online visibility. Within 6 months, our organic traffic increased by 312% and we saw a 4x improvement in lead generation. Their team is incredibly knowledgeable and transparent.",
    name: "Sarah Mitchell",
    role: "CMO",
    company: "TechVault Solutions",
    rating: 5,
    result: "+312% Traffic",
  },
  {
    quote: "After working with three other agencies with disappointing results, SEOPals delivered what they promised. Our e-commerce revenue from organic search doubled in the first year. Best investment we've made.",
    name: "James Rodriguez",
    role: "Founder & CEO",
    company: "NorthPeak Commerce",
    rating: 5,
    result: "2x Revenue",
  },
  {
    quote: "The level of detail in their reporting and the strategic thinking behind every recommendation sets SEOPals apart. They don't just rank keywords — they drive real business growth.",
    name: "Emily Chen",
    role: "VP of Marketing",
    company: "Clearbridge Analytics",
    rating: 5,
    result: "247% ROI",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-500 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Client Success
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Don&apos;t just take our word for it — hear from the businesses we&apos;ve helped grow.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`relative bg-white rounded-xl p-8 border cursor-pointer transition-all duration-300 ${
                active === i
                  ? "border-blue-500/30 shadow-xl shadow-blue-500/5 scale-[1.02]"
                  : "border-gray-100 hover:border-gray-200 hover:shadow-lg"
              }`}
            >
              {/* Result badge */}
              <div className="absolute -top-3 right-6 px-3 py-1 bg-lime-400 text-navy-900 text-xs font-bold rounded-full shadow-md">
                {t.result}
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-600 text-sm leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="text-navy-900 font-bold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
