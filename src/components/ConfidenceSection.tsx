import { Check } from "lucide-react";

const building = [
  "The ability to stay calm under pressure",
  "Real confidence — not false confidence",
  "Simple, reliable skills that hold up in chaos",
  "Awareness and decision-making in real time",
  "A mindset that doesn't freeze when things go wrong",
  "Understanding of weapon threats and how to respond under pressure",
];

const ConfidenceSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gradient-orange">
          WHAT YOU'RE BUILDING
        </h2>
        <p className="text-white text-lg mb-8">
          You're not just learning techniques. You're building:
        </p>

        <ul className="space-y-4 max-w-xl mx-auto text-left">
          {building.map((b) => (
            <li key={b} className="flex items-start gap-3 text-white">
              <Check className="text-primary mt-1 shrink-0" size={18} />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="my-14 border-t border-grit" />

        <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-gradient-orange">
          CONFIDENCE CHANGES EVERYTHING
        </h3>

        <div className="space-y-5 text-white text-base md:text-lg leading-relaxed">
          <p className="whitespace-pre-line">
            {`When you know you can defend yourself, you walk differently.\n\n\nYou carry yourself differently.\nYou think differently.`}
          </p>
          <p>
            You're not hoping you'll be okay.
          </p>
          <p>
            You know you will be.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConfidenceSection;
