import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Background from "@/components/ui/Background";

export default function Home() {
  return (
    <>
      <Header />
      <main className="lg:py-24 pt-24 lg:w-[52%]">
        <About />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
