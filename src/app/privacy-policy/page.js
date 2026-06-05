import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Privacy Policy | SEOPals",
  description: "Privacy Policy for SEOPals.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-brand-blue-deep overflow-hidden">
      <PageHero
        title="Privacy Policy"
        description="Last updated: October 2023"
        bgImage="/images/about_hero.png"
      />

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-2xl font-black text-brand-blue-deep mb-4">1. Information We Collect</h2>
            <p className="mb-6">
              At SEOPals, we take your privacy seriously. We collect information that you provide directly to us when you fill out a form, request an audit, or communicate with us. This may include your name, email address, phone number, website URL, and any other details you choose to provide.
            </p>

            <h2 className="text-2xl font-black text-brand-blue-deep mb-4">2. How We Use Your Information</h2>
            <p className="mb-6">
              We use the information we collect to provide, maintain, and improve our services. Specifically, we use it to conduct SEO audits, communicate with you about your campaigns, and send you technical updates and marketing communications (which you can opt out of at any time).
            </p>

            <h2 className="text-2xl font-black text-brand-blue-deep mb-4">3. Data Security</h2>
            <p className="mb-6">
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We do not sell or rent your personal information to third parties.
            </p>

            <h2 className="text-2xl font-black text-brand-blue-deep mb-4">4. Cookies and Tracking</h2>
            <p className="mb-6">
              Our website uses cookies to enhance your browsing experience, analyze site traffic, and understand where our audience comes from. You can control cookie preferences through your browser settings.
            </p>

            <h2 className="text-2xl font-black text-brand-blue-deep mb-4">5. Contact Us</h2>
            <p className="mb-6">
              If you have any questions or concerns about this Privacy Policy, please contact us at info@seopals.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
