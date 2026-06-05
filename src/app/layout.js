import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SEOPals | Architect SEO Services — Dominate Search Rankings",
  description:
    "SEOPals is a premier SEO agency delivering data-driven strategies that drive organic traffic, boost rankings, and generate qualified leads. 15+ years of proven results.",
  keywords: "SEO agency, SEO services, search engine optimization, organic traffic, link building, technical SEO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
