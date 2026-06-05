import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Terms of Service | SEOPals",
  description: "Terms of Service for SEOPals.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white text-brand-blue-deep overflow-hidden">
      <PageHero
        title="Terms of Service"
        description="Last updated: October 2023"
        bgImage="/images/about_hero.png"
      />

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-2xl font-black text-brand-blue-deep mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing and using the SEOPals website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-black text-brand-blue-deep mb-4">2. Services Provided</h2>
            <p className="mb-6">
              SEOPals provides search engine optimization (SEO) consulting, technical audits, content strategy, and link-building services. We reserve the right to modify or discontinue any service at any time without notice.
            </p>

            <h2 className="text-2xl font-black text-brand-blue-deep mb-4">3. Guarantees and Liability</h2>
            <p className="mb-6">
              While we use industry best practices and our extensive expertise to improve your search engine rankings, SEOPals cannot guarantee specific rankings or traffic volumes due to the unpredictable nature of search engine algorithms. We shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services.
            </p>

            <h2 className="text-2xl font-black text-brand-blue-deep mb-4">4. Client Responsibilities</h2>
            <p className="mb-6">
              Clients agree to provide necessary access to website platforms, analytics accounts, and relevant resources required to perform SEO services. Delays in providing access or approving content may impact campaign timelines and results.
            </p>

            <h2 className="text-2xl font-black text-brand-blue-deep mb-4">5. Governing Law</h2>
            <p className="mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which SEOPals operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
