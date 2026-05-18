import { Link, useLocation } from "react-router-dom";
import banner from "@/assets/banner.png";

const Navbar = () => {
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT ME" },
    { to: "/gallery", label: "GALLERY" },
  ];

  return (
    <nav className="w-full m-0 p-0" style={{ backgroundColor: "#000000" }}>
      <div className="w-full border-b border-primary/60 bg-zinc-900/80 backdrop-blur-sm">
        <ul className="container mx-auto flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-6 md:gap-x-10">
          {links.map((link) => {
            const active = pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`block px-3 sm:px-5 py-2.5 font-heading tracking-widest text-sm sm:text-base transition-colors ${
                    active ? "text-primary" : "text-white hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-full flex justify-center m-0 p-0 pt-2" style={{ backgroundColor: "#000000" }}>
        <Link to="/" aria-label="LS Street MMA home">
          <img
            src={banner}
            alt="LS Street MMA - Self Defence"
            className="block h-auto max-h-48 md:max-h-64 lg:max-h-72 w-auto max-w-[95%] object-contain"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
