const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-orange">
          MOST PEOPLE AREN'T PREPARED FOR VIOLENCE.
        </h2>

        <div className="border-t border-grit mb-10" />

        <div className="space-y-5 text-white font-body text-base md:text-lg leading-relaxed">
          <p>
            Self-defence classes give a false sense of security. It's clean, controlled, and predictable — but real situations aren't.
          </p>
          <p>
            Real violence is sudden, chaotic, and overwhelming. There are no warm-ups. No rules. No second chances.
          </p>

          <p className="text-foreground font-heading text-xl font-semibold mt-6">
            REAL VIOLENCE IS:
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-1 text-white font-semibold">
            <span><span className="text-primary">✓</span> It's messy.</span>
            <span><span className="text-primary">✓</span> It's fast.</span>
            <span><span className="text-primary">✓</span> It's unpredictable.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
