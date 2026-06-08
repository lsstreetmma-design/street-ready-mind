import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: "#565A60" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display text-primary mb-4 tracking-wide">
          FIND US
        </h2>
        <p className="text-white mb-8 md:mb-10 text-base md:text-lg">
          Bromley United Reformed Church, 20 Widmore Rd, Bromley BR1 1RY
        </p>

        <a
          href="https://maps.app.goo.gl/Wd9kzXqKqNjZBpBt7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 uppercase tracking-wide"
        >
          <MapPin size={18} />
          Open Google Maps
        </a>
      </div>
    </section>
  );
};

export default LocationSection;
