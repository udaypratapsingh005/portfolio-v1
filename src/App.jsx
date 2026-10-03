import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import WhyMe from "./components/WhyMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <ScrollReveal variant="up">
          <About />
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <Skills />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <Projects />
        </ScrollReveal>

        {/* EXISTING 4 CARDS - UNCHANGED */}
        <ScrollReveal variant="up">
          <Journey />
        </ScrollReveal>

        {/* WHY ME */}
        <ScrollReveal variant="left">
          <WhyMe />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <Contact />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}

export default App;