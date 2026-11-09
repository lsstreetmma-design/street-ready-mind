import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

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
      {/* The phone-only fixed "Book Free Session" bar was removed at Lee's request (11-09) */}
    </div>
  );
};

export default Layout;
