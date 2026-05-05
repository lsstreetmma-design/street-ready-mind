import { useState, useEffect, useRef } from "react";
import { Phone, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const openForm = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  };

  useEffect(() => {
    const handler = () => openForm();
    window.addEventListener('open-contact-form', handler);
    return () => window.removeEventListener('open-contact-form', handler);
  }, []);

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
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gradient-orange">
          Ready to Train?
        </h2>
        <p className="text-muted-foreground mb-8">
          If you're serious about learning real self defence — let's start.
        </p>

        {!showForm && (
          <button
            onClick={openForm}
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg tracking-widest px-10 py-4 rounded transition-all glow-orange hover:scale-105 mb-10"
          >
            BOOK YOUR SESSION NOW
          </button>
        )}

        {showForm && (
          <div ref={formRef} className="mb-8">
            <form onSubmit={handleSubmit} className="bg-card/80 backdrop-blur border border-primary/30 rounded-lg p-6 text-left space-y-4 animate-fade-in max-w-lg mx-auto">
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
            <ul className="mt-10 max-w-lg mx-auto grid grid-cols-2 gap-x-6 gap-y-1.5 justify-center text-left">
              {[
                "No experience needed",
                "1–2–1 pressure tested coaching | £35 p/h",
                "Train at your pace",
                "Knife threat awareness & defence principles",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-foreground text-xs leading-snug"
                >
                  <Check className="text-primary shrink-0 mt-0.5" size={14} strokeWidth={3} />
                  <span className="whitespace-nowrap">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-primary" />
            <span>Call / WhatsApp: 000-000-0000</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
