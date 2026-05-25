import { Check } from "lucide-react";

const features = [
  "Complete beginners",
  "People who want real-world confidence",
  "Anyone who knows deep down their current training isn't enough",
  "Those who want to feel in control — not helpless — in unpredictable situations",
];

const WhoForSection = () => {
  return (
    <section className="py-20 px-4 bg-[hsl(0,0%,16%)]">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-orange">
          WHO THIS IS FOR
        </h2>
        <p className="text-center font-heading text-xl md:text-2xl font-semibold text-foreground mb-10">
          No experience? Perfect.
        </p>

        <div className="border-t border-grit mb-10" />

        <div className="space-y-6 text-slate-50 font-body text-base md:text-lg leading-relaxed text-center">
          <p>
            We start from zero — building a solid foundation of movement, awareness, and tactical thinking.
          </p>
          <p>
            This isn't about being the toughest person in the room. It's about becoming capable, composed, and prepared.
          </p>
        </div>

        <ul className="mt-10 space-y-4 max-w-xl mx-auto">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-white">
              <Check className="text-primary mt-1 shrink-0" size={18} />
              <span className="text-slate-50">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhoForSection;
