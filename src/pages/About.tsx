import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-10 text-gradient-orange">
            ABOUT ME
          </h1>

          <div className="border-t border-grit mb-10 mx-auto w-24" />

          <div className="space-y-5 text-white font-body text-base md:text-lg leading-relaxed">
            <p>
              I'm the founder and head coach at LS Street MMA. My focus is simple: teach
              people how to defend themselves in the real world — not in a ring, not in a
              fantasy scenario, but in the chaotic, unpredictable situations real violence creates.
            </p>
            <p>
              I've spent years training, pressure-testing, and refining what actually works
              when the pressure is on. I founded LS Street MMA because I saw a gap between
              what's typically taught in self-defence classes and what truly happens when
              violence finds you.
            </p>
            <p>
              Every session I run is built around realism — controlled, progressive, and
              tailored to the individual. Whether you're a complete beginner or someone
              looking to sharpen real-world skills, my goal is to help you move with
              confidence, awareness, and control.
            </p>
            <p className="text-foreground font-heading text-xl font-semibold mt-8">
              Train smart. Stay aware. Be ready.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-block px-6 py-3 border border-primary text-primary font-heading tracking-wide hover:bg-primary hover:text-black transition-colors"
            >
              ← BACK TO HOME
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
