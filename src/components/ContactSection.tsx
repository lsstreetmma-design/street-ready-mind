import { useState, useEffect, useRef } from "react";
import { Phone, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const openForm = () => {
    setSent(false);
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
    data.append("access_key", "432d0bb8-452a-47ca-b90f-94ea45ce31fa");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = await res.json();
      if (res.ok && json.success) {
        form.reset();
        setSent(true);
        setShowForm(false);
        setTimeout(() => setSent(false), 3000);
      } else {
        toast({ title: "Failed to send", description: json.message || "Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Network error", description: "Please try again.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  const bookingFeatures = [
    "No experience needed",
    "1:1 Pressure-Tested Coaching • £35/hr",
    "Train at your pace",
    "Knife threat awareness & defence principles",
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="flex flex-col items-center gap-y-12 text-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gradient-orange">
              Ready to Train?
            </h2>
            <p className="text-white">
              If you're serious about learning real self defence — let's start.
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
            ) : sent ? (
              <div className="bg-card/80 backdrop-blur border border-primary/30 rounded-lg p-6 text-center animate-fade-in w-full max-w-lg flex flex-col items-center">
                <Check className="text-green-400 mb-3" size={56} strokeWidth={3} />
                <h3 className="font-heading text-2xl font-bold text-gradient-orange mb-2">MESSAGE SENT!</h3>
                <p className="text-white">We'll get back to you shortly.</p>
              </div>
            ) : (
              <button
                onClick={openForm}
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg tracking-widest px-10 py-4 rounded transition-all glow-orange hover:scale-105 animate-fade-in"
              >
                BOOK YOUR SESSION NOW
              </button>
            )}
          </div>

          <ul className="max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 justify-center text-left">
            {bookingFeatures.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-white text-xs leading-snug"
              >
                <Check className="text-primary shrink-0 mt-0.5" size={14} strokeWidth={3} />
                <span className="whitespace-nowrap">{f}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
