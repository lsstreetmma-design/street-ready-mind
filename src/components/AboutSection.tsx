import { Check } from "lucide-react";

const AboutSection = () => {
  const symptoms = [
    "Rapid breathing caused by an adrenaline dump",
    "Narrow vision",
    "A feeling of being frozen",
    "Fine motor skills breaking down",
    "Complex techniques failing",
    "Fear taking over",
  ];

  return (
    <section id="about" className="py-20 px-4 bg-[hsl(0,0%,16%)]">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-orange">
          MOST PEOPLE AREN'T PREPARED FOR VIOLENCE.
        </h2>

        <div className="border-t border-grit mb-10" />

        <div className="space-y-5 text-white font-body text-base md:text-lg leading-relaxed">
          <p>
            Often self-defence classes give a false sense of security. It's clean, controlled, and predictable — but real situations aren't.
          </p>
          <p>
            Real violence is sudden, chaotic, and overwhelming. There are no warm-ups. No rules. No second chances.
          </p>

          <div className="space-y-1 text-white font-semibold mt-6">
            <p>It's Messy.</p>
            <p>It's Fast.</p>
            <p>It's Unpredictable.</p>
          </div>


          <p className="mt-6 font-heading text-xl font-semibold text-foreground">
            And sometimes — weapons are involved.
          </p>

          <p className="mt-6">
            I founded LS Street MMA because I saw a gap between what's being taught and what actually happens when violence finds you.
          </p>
          <p>
            If you've ever been in a physical confrontation, you will have experienced these symptoms:
          </p>

          <ul className="space-y-2">
            {symptoms.map((symptom) => (
              <li key={symptom} className="flex items-start gap-3">
                <Check className="text-primary mt-1 shrink-0" size={18} />
                <span>{symptom}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6">
            I didn't start training to compete. Referees and rules don't exist in real confrontations — I don't train for points. I wanted to know — without doubt — that I could defend myself if it ever came to it.
          </p>
          <p>
            Because freezing isn't an option.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
