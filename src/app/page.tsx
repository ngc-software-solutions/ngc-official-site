import Hero from "@/components/sections/Hero";
import FeaturedCase from "@/components/sections/FeaturedCase";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Services from "@/components/sections/Services";
import Tagline from "@/components/sections/Tagline";
import Models from "@/components/sections/Models";
import Portfolio from "@/components/sections/Portfolio";
import Team from "@/components/sections/Team";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Workflow from "@/components/sections/Workflow";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCase />
      <ProblemSolution />
      <Services />
      <Tagline />
      <Models />
      <Portfolio />
      <Workflow />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
