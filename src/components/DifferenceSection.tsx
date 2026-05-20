const DifferenceSection = () => {
  return (
    <section
      id="different"
      className="py-24 px-4"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-gradient-orange leading-tight">
          THIS IS WHERE LS STREET MMA IS DIFFERENT
        </h2>

        <div className="border-t border-grit mb-12 mx-auto w-24" />

        <div className="space-y-8 text-white font-body text-base md:text-lg leading-loose">
          <p className="whitespace-pre-line">
            {`We don't train for perfect conditions. We train for reality.\n\n\nThat includes understanding the reality of weapons — especially knives.\n\nNot fantasy disarms.\nNot choreographed sequences.\n\nBut awareness, avoidance, positioning, and last-resort survival principles\nwhen escape isn’t immediately possible.`}
          </p>
          <p>
            We train how to stay functional under pressure — how to think, move, and act when everything feels chaotic.
          </p>
          <p>
            We strip things back to what actually works — simple, effective movements you can rely on when stress hits.
          </p>
          <p className="text-foreground font-heading text-xl md:text-2xl font-semibold tracking-wide">
            Then we pressure-test it.
          </p>
          <p>
            Controlled but realistic scenarios that build your ability to stay calm, make decisions, and respond under stress. Not just technique — but awareness, positioning, timing, and control.
          </p>
        </div>

        <div className="border-t border-grit my-12 mx-auto w-24" />

        <p className="font-heading text-xl md:text-2xl font-bold text-foreground leading-relaxed">
          So instead of freezing… you respond.
          <br />
          Instead of panicking… you act.
          <br />
          Instead of guessing… you know what to do.
        </p>
      </div>
    </section>
  );
};

export default DifferenceSection;
