import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  adjustFontFallback: false,
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dejesusbg.netlify.app.com"),
  title: "Ricardo Barrios",
  description:
    "Ricardo Barrios is a systems engineer and software developer that loves to build experiences that help others.",
  keywords:
    "Ricardo Barrios, software developer, systems engineer, web developer, Colombia",
  openGraph: {
    title: "Ricardo Barrios",
    description:
      "Ricardo Barrios is a systems engineer and software developer that loves to build experiences that help others.",
    type: "website",
    url: "https://dejesusbg.netlify.app.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header></Header>
        <main className="lg:w-[52%] lg:py-24 pt-24 ">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
