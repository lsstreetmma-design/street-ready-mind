const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-orange uppercase">
          WHAT WILL YOU LEARN AT LS STREET MMA?
        </h2>

        <div className="border-t border-grit mb-10" />

        <div className="space-y-5 text-white font-body text-base md:text-lg leading-relaxed">
          <div className="flex items-start gap-2 text-white font-semibold mb-8">
            <span className="text-primary mt-1">✓</span>
            <span>How to stay calm under pressure</span>
          </div>

          <p>
            Self-defence classes give a false sense of security. It's clean, controlled, and predictable — but real situations aren't.
          </p>
          <p>
            Real violence is sudden, chaotic, and overwhelming. There are no warm-ups. No rules. No second chances.
          </p>

          <p className="text-foreground font-heading text-xl font-semibold mt-6 uppercase">
            REAL VIOLENCE IS:
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-1 text-white font-semibold">
            <span><span className="text-primary">✓</span> Messy.</span>
            <span><span className="text-primary">✓</span> Fast.</span>
            <span><span className="text-primary">✓</span> Unpredictable.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
