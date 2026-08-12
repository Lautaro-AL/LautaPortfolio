import { LanguageProvider } from './i18n/context';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Work from './components/sections/Work';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Projects />
        <Skills />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
