import { MapPin } from "lucide-react";

const LocationSection = () => {
  const embedUrl = "https://maps.google.com/maps?q=51.4058891,0.0171094&z=16&output=embed";
  const mapUrl = "https://maps.app.goo.gl/rTJoR7du1xnW8nET8";

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

        <div className="w-full rounded-xl overflow-hidden border border-zinc-600/60 mb-6">
          <iframe
            src={embedUrl}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing Bromley United Reformed Church"
            className="block w-full"
          />
        </div>

        <div className="flex justify-center">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 uppercase tracking-wide"
          >
              <MapPin size={18} />
              Open Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
