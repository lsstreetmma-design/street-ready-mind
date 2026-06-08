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
        <div className="relative w-full overflow-hidden rounded-lg border-2 border-primary/40 shadow-2xl">
          <div className="aspect-[16/10] md:aspect-[16/9] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.24357416972!2d0.015259977051410493!3d51.40775311732644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8aa6c0ce8d0e9%3A0x8fbd94d149e072da!2sBromley%20United%20Reformed%20Church!5e0!3m2!1sen!2suk!4v1717872000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LS Street MMA training location – Bromley United Reformed Church"
            />
          </div>
        </div>
        <div className="text-center mt-6">
          <a
            href="https://maps.app.goo.gl/J4uuQdA2CCg92TqbA"
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
