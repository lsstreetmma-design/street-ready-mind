import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const About = () => {
  const symptoms = [
    "Rapid breathing caused by an adrenaline dump",
    "Narrow vision",
    "A feeling of being frozen",
    "Fine motor skills breaking down",
    "Complex techniques failing",
    "Fear taking over",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl font-bold">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-10 text-gradient-orange">
            ABOUT ME
          </h1>

          <div className="border-t border-grit mb-10 mx-auto w-24" />

          <img
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop"
            alt="MMA training placeholder"
            className="mx-auto mb-4 w-full max-w-md rounded-xl object-cover shadow-lg md:max-w-lg"
          />

          <p className="text-center font-heading text-2xl md:text-3xl font-bold text-white mb-10">Lee Sommers</p>

          <div className="space-y-5 text-white font-body text-base md:text-lg leading-relaxed">
            <p>
              I founded LS Street MMA because I saw a gap between what's being taught and what actually happens when
              violence finds you.
            </p>
            <p>If you've ever been in a physical confrontation, you will have experienced these symptoms:</p>

            <ul className="space-y-2">
              {symptoms.map((symptom) => (
                <li key={symptom} className="flex items-start gap-3">
                  <Check className="text-primary mt-1 shrink-0" size={18} />
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6">
              I didn't start training to compete. Referees and rules don't exist in real confrontations — I don't train
              for points. I wanted to know — without doubt — that I could defend myself if it ever came to it.
            </p>
            <p className="text-foreground font-heading text-xl font-semibold mt-8">Because freezing isn't an option.</p>

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
