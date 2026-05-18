const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-orange uppercase">
          WHAT WILL YOU LEARN AT LS STREET MMA?
        </h2>

        <div className="border-t border-grit mb-10" />

        <div className="space-y-6 text-white font-body text-base md:text-lg leading-relaxed">
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>How to stay calm under pressure</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>You'll learn real confidence — not false confidence</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>You'll lean simple & reliable skills, which work when real chaos strikes</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>You will build awareness & decision-making in real time</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>You will build a mindset that doesn't freeze when things go wrong</span>
            </div>
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

          <div className="flex flex-wrap gap-x-6 gap-y-1 font-semibold">
            <span className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Messy.</span>
            <span className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Fast.</span>
            <span className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Unpredictable.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
