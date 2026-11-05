import { toast } from "sonner";
import { Check } from "lucide-react";

export const showSentToast = () => {
  toast.custom(
    () => (
      <div className="flex items-center gap-3 rounded-md border bg-white px-4 py-3 text-foreground shadow-lg">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-600/15">
          <Check className="text-green-600" size={14} strokeWidth={3} />
        </span>
        <span className="text-sm font-medium tracking-wide">Thanks! Lee will be in touch soon.</span>
      </div>
    ),
    { duration: 3500, position: "bottom-center" }
  );
};
