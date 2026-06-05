const logos = [
  "Google Partner",
  "HubSpot",
  "Semrush",
  "Ahrefs",
  "Moz",
  "Shopify",
];

export default function TrustLogos() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-sm uppercase tracking-widest font-medium mb-8">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors duration-300 group"
            >
              <div className="w-8 h-8 rounded-md bg-gray-100 group-hover:bg-blue-500/10 flex items-center justify-center transition-colors duration-300">
                <LogoIcon name={logo} />
              </div>
              <span className="font-semibold text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoIcon({ name }) {
  const colors = {
    "Google Partner": "#4285F4",
    HubSpot: "#FF7A59",
    Semrush: "#FF642D",
    Ahrefs: "#1A73E8",
    Moz: "#1DA1F2",
    Shopify: "#96BF48",
  };
  const color = colors[name] || "#2B7FFF";
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill={color}>
      <rect x="3" y="3" width="18" height="18" rx="4" opacity="0.8" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        {name.charAt(0)}
      </text>
    </svg>
  );
}
