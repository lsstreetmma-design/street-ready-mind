import { useState, useRef } from "react";
import { Check } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useToast } from "@/hooks/use-toast";

const bookingFeatures = [
  "No experience needed",
  "1–2–1 pressure tested coaching | £35 p/h",
  "Train at your pace",
  "Knife threat awareness & defence principles",
];

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleOpenForm = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mzdkkpgl", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        toast({ title: "Message sent!", description: "We'll get back to you soon." });
        form.reset();
        setShowForm(false);
      } else {
        toast({ title: "Failed to send", description: "Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Network error", description: "Please try again.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
      style={{ backgroundColor: "#000000" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Vignette overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.95) 100%)",
        }}
      />
      {/* Top fade into navbar */}
      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 100%)",
        }}
      />
      {/* Bottom fade into next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #000000 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Radial focal glow behind CTA */}
      <div
        className="absolute inset-x-0 bottom-0 top-1/3 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 55% at 50% 75%, hsl(27 100% 50% / 0.18) 0%, hsl(27 100% 50% / 0.06) 35%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20">
        <div className="flex flex-col items-center gap-y-20">
          <div>
            <h2 className="font-heading font-bold leading-[1.05] mb-5 tracking-wide">
              <span className="block text-gradient-orange text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.02em] normal-case" style={{ textTransform: "none" }}>
                Learn How to Defend Yourself
              </span>
              <span className="block text-foreground uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.06em]">
                In The Real World
              </span>
            </h2>

            <p className="text-foreground text-base md:text-lg max-w-xl mx-auto font-body">
              <span className="text-foreground font-semibold">Practical. Realistic.</span> <span className="text-primary font-semibold">Pressure-tested self defence training designed for</span> <span className="text-foreground font-semibold">real-life violence</span> <span className="text-foreground">— not sport, not fantasy.</span>
            </p>
          </div>

          <div ref={formRef} className="w-full flex justify-center">
            {showForm ? (
              <form onSubmit={handleSubmit} className="bg-card/80 backdrop-blur border border-primary/30 rounded-lg p-6 text-left space-y-4 animate-fade-in w-full max-w-lg">
                <h3 className="font-heading text-xl font-bold text-gradient-orange">Send Us a Message</h3>
                <Input name="name" placeholder="Your Name" required className="bg-background" />
                <Input name="email" type="email" placeholder="Your Email" required className="bg-background" />
                <Textarea name="message" placeholder="What would you like to say?" rows={5} required className="bg-background" />
                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={sending}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading tracking-widest px-8 py-3 rounded transition-all glow-orange hover:scale-105 disabled:opacity-50"
                  >
                    {sending ? "SENDING..." : "SEND"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="border border-border text-muted-foreground hover:text-foreground px-6 py-3 rounded transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <button
                onClick={handleOpenForm}
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-xl md:text-2xl font-bold tracking-[0.18em] uppercase px-12 py-5 rounded transition-all hover:scale-105"
                style={{
                  boxShadow:
                    "0 0 0 1px hsl(27 100% 45% / 0.6), 0 10px 30px hsl(0 0% 0% / 0.7), 0 0 60px hsl(27 100% 50% / 0.45), 0 0 120px hsl(27 100% 50% / 0.25)",
                  textShadow: "0 1px 2px hsl(0 0% 0% / 0.35)",
                }}
              >
                BOOK YOUR SESSION
              </button>
            )}
          </div>

          <ul className="mt-12 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 justify-center text-left">
            {bookingFeatures.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-white text-sm leading-snug"
              >
                <Check className="text-primary shrink-0 mt-0.5" size={16} strokeWidth={3} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
