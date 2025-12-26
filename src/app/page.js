import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <Portfolio limit={3} />
      <Testimonials />
      <About />
      <Contact />
    </>
  );
}
