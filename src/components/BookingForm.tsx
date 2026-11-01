import { useState } from "react";
import { toast } from "sonner";
import { showSentToast } from "@/lib/sent-toast";
import { SITE } from "@/lib/site";

// One booking form used on both pages (the old site had two copies of this code).
// Sends to Web3Forms, which emails LS-STREET-MMA@hotmail.com.
const fieldClass =
  "w-full rounded-md border border-input bg-white px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary";

const BookingForm = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", SITE.web3formsKey);
    data.append("subject", `Free session booking - ${data.get("name")}`);
    data.append("from_name", "LS Street MMA website");

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        form.reset();
        showSentToast();
      } else {
        toast.error(json.message || "Sorry, that didn't send. Please try again or call us.");
      }
    } catch {
      toast.error("Network error. Please try again or call us.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {/* Spam trap: real people never see or tick this */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold">Name</span>
          <input name="name" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold">Phone</span>
          <input name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold">Email</span>
        <input name="email" type="email" required autoComplete="email" className={fieldClass} />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold">Which session suits you?</span>
        <select name="preferred_day" className={fieldClass} defaultValue="Wednesday">
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Either</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold">
          Anything you'd like Lee to know? <span className="font-normal text-muted-foreground">(optional)</span>
        </span>
        <textarea name="message" rows={3} className={fieldClass} />
      </label>

      <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-60">
        {sending ? "Sending..." : "Book My Free Session"}
      </button>
      <p className="text-center text-sm text-muted-foreground">
        Prefer to talk? Call or text{" "}
        <a href={SITE.phoneHref} className="inline-block py-3 font-semibold text-foreground underline underline-offset-2">
          {SITE.phoneDisplay}
        </a>
      </p>
    </form>
  );
};

export default BookingForm;
