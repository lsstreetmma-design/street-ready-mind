import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/logo-wordmark.webp";
import { SITE } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/coach", label: "Head Coach" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur border-b border-white/10">
      {/* short screens (phone held sideways) get a slimmer header */}
      <div className="mx-auto flex h-16 md:h-20 [@media(max-height:500px)]:h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="LS Street MMA Self Defence" width={960} height={320} className="h-12 md:h-16 [@media(max-height:500px)]:h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6" aria-label="Main">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) =>
                `inline-flex min-h-11 items-center px-2 font-display uppercase tracking-wider text-base transition-colors ${
                  isActive ? "text-primary" : "text-white hover:text-primary"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          {/* Number only shows from 1024px; on tablets the header would be too tight */}
          <a href={SITE.phoneHref} className="hidden lg:flex min-h-11 items-center gap-2 text-white/80 hover:text-white text-sm">
            <Phone size={16} className="text-primary" /> {SITE.phoneDisplay}
          </a>
          <Link to="/#book" className="btn-primary min-h-11 !py-2.5 !px-5 !text-base whitespace-nowrap">
            Free Session
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          {/* Phone held sideways: the bottom booking bar is hidden (too tall), so the button lives here */}
          <Link
            to="/#book"
            onClick={() => setOpen(false)}
            className="btn-primary hidden [@media(max-height:500px)]:inline-flex min-h-11 !py-2 !px-4 !text-base whitespace-nowrap"
          >
            Free Session
          </Link>
          <button
            type="button"
            className="text-white p-2.5 -mr-2.5"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        // Scrolls inside itself if the phone is sideways and the screen is short
        <nav
          className="md:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-ink px-4 pb-5 pt-2"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 font-display uppercase tracking-wider text-lg border-b border-white/10 ${
                  isActive ? "text-primary" : "text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a href={SITE.phoneHref} className="flex items-center gap-2 py-3 text-white">
            <Phone size={18} className="text-primary" /> {SITE.phoneDisplay}
          </a>
          <Link to="/#book" onClick={() => setOpen(false)} className="btn-primary w-full mt-2">
            Book Your Free Session
          </Link>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
