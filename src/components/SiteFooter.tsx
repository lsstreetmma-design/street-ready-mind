import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-wordmark-dark.webp";
import { SITE } from "@/lib/site";

// Grey footer, a shade darker than the page's light grey (Lee 11-05: no black; 11-09: "a little darker")
const SiteFooter = () => (
  <footer className="border-t border-black/10 bg-[hsl(40_6%_83%)] text-foreground/80">
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
      <div>
        <img src={logo} alt="LS Street MMA Self Defence" width={960} height={320} loading="lazy" className="h-16 w-auto" />
        <p className="mt-4 text-sm leading-relaxed">
          Practical MMA-based self-defence training in {SITE.area}. No experience needed. All fitness levels welcome.
        </p>
      </div>

      <div>
        <h2 className="text-foreground text-xl mb-4">Contact</h2>
        {/* min-h-11 = 44px rows, big enough to tap with a thumb */}
        <ul className="text-sm">
          <li>
            <a href={SITE.phoneHref} className="flex min-h-11 items-center gap-3 hover:text-primary">
              <Phone size={18} className="text-primary shrink-0" /> {SITE.phoneDisplay}
            </a>
          </li>
          <li>
            <a href={`mailto:${SITE.email}`} className="flex min-h-11 items-center gap-3 hover:text-primary break-all">
              <Mail size={18} className="text-primary shrink-0" /> {SITE.email}
            </a>
          </li>
          <li>
            <a href={SITE.mapsListing} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center gap-3 hover:text-primary">
              <MapPin size={18} className="text-primary shrink-0" /> Find us on Google Maps
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-foreground text-xl mb-4">Training</h2>
        <p className="text-sm font-semibold text-foreground">Classes</p>
        <p className="text-sm">{SITE.classDays}, {SITE.classTime}</p>
        <p className="mt-3 text-sm font-semibold text-foreground">{SITE.oneToOne}</p>
        <p className="text-sm">{SITE.oneToOneDays}, {SITE.oneToOneTime}</p>
        <p className="text-sm">{SITE.homeTraining}</p>
        <nav className="mt-3 flex flex-wrap gap-x-5 text-sm" aria-label="Footer">
          <Link to="/" className="inline-flex min-h-11 min-w-11 items-center hover:text-primary underline-offset-4 hover:underline">Home</Link>
          <Link to="/coach" className="inline-flex min-h-11 min-w-11 items-center hover:text-primary underline-offset-4 hover:underline">Head Coach</Link>
          <Link to="/#book" className="inline-flex min-h-11 items-center font-semibold text-primary hover:underline underline-offset-4">Book free session</Link>
        </nav>
      </div>
    </div>
    <p className="border-t border-black/10 py-5 text-center text-xs text-foreground/70">
      © {new Date().getFullYear()} LS Street MMA. All rights reserved.
    </p>
  </footer>
);

export default SiteFooter;
