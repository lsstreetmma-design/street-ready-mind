const LocationSection = () => {
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
        <div className="w-full rounded-lg overflow-hidden border border-zinc-700">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=Bromley+United+Reformed+Church,+20+Widmore+Rd,+Bromley+BR1+1RY&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="LS Street MMA training location – Bromley United Reformed Church"
          />
        </div>
        <div className="text-center mt-6">
          <a
            href="https://maps.google.com/?cid=10357598344630530746&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-primary font-bold underline hover:opacity-80 transition-opacity"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
