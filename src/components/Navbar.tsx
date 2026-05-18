import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import banner from "@/assets/banner.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT ME" },
    { to: "/gallery", label: "GALLERY" },
  ];

  return (
    <nav className="w-full m-0 p-0 relative" style={{ backgroundColor: "#000000" }}>
      <div className="absolute top-3 right-3 z-20">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="p-2 border border-primary text-primary hover:bg-primary hover:text-black transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {open && (
          <div className="absolute right-0 mt-2 min-w-[180px] border border-primary bg-black shadow-lg">
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 font-heading tracking-wide text-white hover:bg-primary hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="w-full flex justify-center m-0 p-0" style={{ backgroundColor: "#000000" }}>
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
