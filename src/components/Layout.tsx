import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE } from "@/lib/site";

type LayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Layout = ({ title, description, children }: LayoutProps) => {
  const { pathname, hash } = useLocation();

  // Per-page title + description (the static HTML for each page also has these, see scripts/postbuild.mjs)
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [title, description]);

  // Go to #book etc. (jump straight there from the other page, glide within the same page),
  // otherwise start at the top
  // Each page has its own Layout, so the first run after it appears means "just arrived"
  const arrived = useRef(false);
  useEffect(() => {
    const samePage = arrived.current;
    arrived.current = true;
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: samePage ? "smooth" : "instant" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return (
    // overflow-x-clip stops the tilted orange photo frames causing sideways scroll on phones
    <div className="min-h-screen flex flex-col overflow-x-clip">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />

      {/* Phone-only bottom bar so booking is always one tap away
          (hidden on short sideways screens, where the header shows a Free Session button instead) */}
      <div className="md:hidden [@media(max-height:500px)]:hidden fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-white/10 bg-ink/95 backdrop-blur p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a href={SITE.phoneHref} className="btn-ghost !py-3 !px-4 text-white" aria-label={`Call ${SITE.phoneDisplay}`}>
          <Phone size={20} />
        </a>
        <Link to="/#book" className="btn-primary !py-3 flex-1">
          Book Free Session
        </Link>
      </div>
    </div>
  );
};

export default Layout;
