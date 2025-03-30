import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import ProjectsGrid from "@/components/sections/ProjectsGrid";

export default function Home() {
  return (
    <>
      <Header />
      <main className="lg:py-24 pt-24 lg:w-[52%]">
        <About />
        <ProjectsGrid />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}
