export default function PageHero({ badge, title, highlight, description, bgImage }) {
  return (
    <section 
      className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}
    >
      <div className="absolute inset-0 bg-brand-blue-deep/90 backdrop-blur-[2px]"></div>
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-brand-blue-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-brand-lime/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">


        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
          {title}{" "}
          {highlight && <span className="text-brand-lime">{highlight}</span>}
        </h1>

        {description && (
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}

        {/* Breadcrumbs */}
        <div className="mt-10 flex items-center justify-center gap-2 text-gray-500 text-sm font-bold">
          <a href="/" className="hover:text-brand-lime transition-colors">Home</a>
          <span className="text-gray-600">/</span>
          <span className="text-gray-300">{badge || title}</span>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
