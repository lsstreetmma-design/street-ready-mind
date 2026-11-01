import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-wordmark.webp";
import { SITE } from "@/lib/site";

const SiteFooter = () => (
  <footer className="bg-ink text-white/80 pb-24 md:pb-0 [@media(max-height:500px)]:pb-0">
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
      <div>
        <img src={logo} alt="LS Street MMA Self Defence" width={960} height={320} loading="lazy" className="h-16 w-auto" />
        <p className="mt-4 text-sm leading-relaxed">
          Practical MMA-based self-defence training in {SITE.area}. No experience needed. All fitness levels welcome.
        </p>
      </div>

      <div>
        <h2 className="text-white text-xl mb-4">Contact</h2>
        {/* min-h-11 = 44px rows, big enough to tap with a thumb */}
        <ul className="text-sm">
          <li>
            <a href={SITE.phoneHref} className="flex min-h-11 items-center gap-3 hover:text-white">
              <Phone size={18} className="text-primary shrink-0" /> {SITE.phoneDisplay}
            </a>
          </li>
          <li>
            <a href={`mailto:${SITE.email}`} className="flex min-h-11 items-center gap-3 hover:text-white break-all">
              <Mail size={18} className="text-primary shrink-0" /> {SITE.email}
            </a>
          </li>
          <li>
            <a href={SITE.mapsListing} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center gap-3 hover:text-white">
              <MapPin size={18} className="text-primary shrink-0" /> Find us on Google Maps
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-white text-xl mb-4">Training</h2>
        <p className="text-sm">{SITE.trainingDays}</p>
        <p className="text-sm">{SITE.trainingTime}</p>
        <nav className="mt-3 flex flex-wrap gap-x-5 text-sm" aria-label="Footer">
          <Link to="/" className="inline-flex min-h-11 min-w-11 items-center hover:text-white underline-offset-4 hover:underline">Home</Link>
          <Link to="/coach" className="inline-flex min-h-11 min-w-11 items-center hover:text-white underline-offset-4 hover:underline">Head Coach</Link>
          <Link to="/#book" className="inline-flex min-h-11 items-center text-primary hover:underline underline-offset-4">Book free session</Link>
        </nav>
      </div>
    </div>
    <p className="border-t border-white/10 py-5 text-center text-xs text-white/50">
      © {new Date().getFullYear()} LS Street MMA. All rights reserved.
    </p>
  </footer>
);

export default SiteFooter;
