import { toast } from "sonner";
import { Check } from "lucide-react";

export const showSentToast = () => {
  toast.custom(
    () => (
      <div className="flex items-center gap-3 rounded-md border border-white/10 bg-black/80 backdrop-blur px-4 py-3 text-white shadow-lg">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
          <Check className="text-green-400" size={14} strokeWidth={3} />
        </span>
        <span className="text-sm font-medium tracking-wide">Your message has been sent</span>
      </div>
    ),
    { duration: 3500, position: "bottom-center" }
  );
};
