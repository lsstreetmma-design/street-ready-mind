import { MapPin } from "lucide-react";

const LocationSection = () => {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Bromley+United+Reformed+Church,+20+Widmore+Rd,+Bromley+BR1+1RY";

  return (
    <section
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: "#565A60" }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display text-primary text-center mb-4 tracking-wide">
          FIND US
        </h2>
        <p className="text-white text-center mb-8 md:mb-10 text-base md:text-lg">
          Bromley United Reformed Church, 20 Widmore Rd, Bromley BR1 1RY
        </p>

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-xl overflow-hidden border border-zinc-600/60 group cursor-pointer relative"
          style={{ backgroundColor: "#3a3d42" }}
        >
          {/* Static map graphic placeholder */}
          <div className="relative w-full h-72 md:h-80">
            {/* Background grid pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Roads */}
            <div className="absolute top-1/2 left-0 right-0 h-3 bg-zinc-600/40 -translate-y-1/2" />
            <div className="absolute top-0 bottom-0 left-1/3 w-3 bg-zinc-600/40 -translate-x-1/2" />
            <div className="absolute top-0 bottom-0 right-1/4 w-2 bg-zinc-500/30 translate-x-1/2" />

            {/* Map pin marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
              <MapPin
                size={48}
                className="text-primary drop-shadow-lg"
                fill="currentColor"
                strokeWidth={1.5}
              />
            </div>

            {/* Central pulsing dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-lg" />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <div className="flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-full shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                <MapPin size={18} />
                <span>View Interactive Map / Get Directions</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default LocationSection;
