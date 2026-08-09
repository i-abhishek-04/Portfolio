import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import TerminalStats from "./components/TerminalStats";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import BottomBand from "./components/BottomBand";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Sidebar />
      <main className="space-y-6">
        <Hero />
        <TerminalStats />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
        <BottomBand />
      </main>
      <Footer />
    </div>
  );
}
