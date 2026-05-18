import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const Gallery = () => {
  // Placeholder gallery items — replace src values with real training photos when ready.
  const items = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    alt: `Training session ${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-10 text-gradient-orange">
            GALLERY
          </h1>

          <div className="border-t border-grit mb-10 mx-auto w-24" />

          <p className="text-center text-white font-body mb-12 max-w-2xl mx-auto">
            A look inside LS Street MMA training — pressure-tested drills, real scenarios,
            and the work that builds confidence under stress.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="aspect-square border border-grit bg-black/60 flex items-center justify-center text-primary font-heading tracking-widest"
              >
                COMING SOON
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-block px-6 py-3 border border-primary text-primary font-heading tracking-wide hover:bg-primary hover:text-black transition-colors"
            >
              ← BACK TO HOME
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
