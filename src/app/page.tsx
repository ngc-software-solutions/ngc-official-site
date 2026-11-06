import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Workflow from "@/components/sections/Workflow";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Workflow />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
