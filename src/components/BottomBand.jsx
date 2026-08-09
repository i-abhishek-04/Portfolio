import TechStack from "./TechStack";
import Experience from "./Experience";
import Connect from "./Connect";
import Reveal from "./Reveal";

export default function BottomBand() {
  return (
    <section className="px-5 sm:px-8 lg:pl-32 mb-16">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 gap-5 items-stretch">
        <Reveal><TechStack /></Reveal>
        <Reveal delay={100}><Experience /></Reveal>
        <Reveal delay={200}><Connect /></Reveal>
      </div>
    </section>
  );
}
