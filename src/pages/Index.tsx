import { Link } from "react-router-dom";
import { ArrowRight, Brain, CalendarDays, Clock, Dumbbell, MapPin, Shield, Users } from "lucide-react";
import Layout from "@/components/Layout";
import BookingForm from "@/components/BookingForm";
import hero from "@/assets/hero.webp";
import badge from "@/assets/logo-badge.webp";
import lee from "@/assets/lee-coach.webp";
import { SITE } from "@/lib/site";

// All wording on this page comes from Lee's "LS STREET MMA" Word document (Nov 2026).

const gains = [
  {
    icon: Shield,
    title: "MMA for Self-Defence",
    text: "Learn practical striking, movement, clinching and ground skills that can help you deal with real-life situations.",
  },
  {
    icon: Dumbbell,
    title: "Improve Your Fitness",
    text: "Build strength, stamina and coordination while learning something useful.",
  },
  {
    icon: Brain,
    title: "Build Confidence",
    text: "Learn to manage fear and adrenaline, stay calm and think clearly when it matters.",
  },
  {
    icon: Users,
    title: "Train in a Supportive Environment",
    text: "Train alongside people of different abilities in a friendly, welcoming atmosphere.",
  },
];

const quickFacts = [
  { icon: CalendarDays, label: "Wed & Thu" },
  { icon: Clock, label: "7pm – 8pm" },
  { icon: MapPin, label: SITE.area },
  { icon: Shield, label: "First session free" },
];

const Index = () => (
  <Layout
    title="LS Street MMA | MMA Self-Defence Classes in Bromley | First Session Free"
    description="Practical MMA-based self-defence training in Bromley. Build confidence, improve your fitness and learn skills that make a real difference. No experience needed. First session free."
  >
    {/* HERO */}
    <section className="relative isolate overflow-hidden bg-ink text-white torn-bottom">
      <img src={hero} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-24 md:pt-24 md:pb-32">
        <p className="kicker">LS Street MMA · {SITE.area}</p>
        <h1 className="mt-6 max-w-3xl text-5xl sm:text-6xl md:text-7xl">
          <span className="brush-underline">Real-World</span> <span className="whitespace-nowrap">Self-Defence</span> Training
        </h1>
        <p className="mt-6 max-w-xl text-lg md:text-xl text-white/90 leading-relaxed">
          Practical MMA-based self-defence training designed to build your confidence, improve your fitness and teach you
          skills that can make a real difference.
        </p>
        <p className="mt-3 font-semibold text-white">No experience needed. All fitness levels welcome.</p>

        <div className="mt-9 flex flex-col sm:flex-row gap-4">
          <a href="#book" className="btn-primary">
            Try Your First Session Free <ArrowRight size={20} />
          </a>
          <a href={SITE.phoneHref} className="btn-ghost text-white">
            Call {SITE.phoneDisplay}
          </a>
        </div>

        <ul className="mt-12 grid max-w-2xl grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-md bg-white/15 text-sm">
          {quickFacts.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 bg-ink/80 px-4 py-3">
              <Icon size={18} className="text-primary shrink-0" />
              <span className="font-semibold">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* MMA FOR SELF-DEFENCE */}
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-[1.3fr_1fr] md:py-28">
      <div>
        <p className="kicker">What we do</p>
        <h2 className="mt-5 text-4xl md:text-5xl">MMA for Self-Defence</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>At LS Street MMA, we focus on practical self-defence using MMA principles.</p>
          <p>
            Our training helps you develop the skills, confidence and mindset to respond effectively under pressure.
          </p>
          <p>
            Whether you're looking to learn self-defence, improve your fitness or simply try something new, you'll find a
            welcoming and supportive environment.
          </p>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-sm">
        <div className="absolute -inset-3 -rotate-3 rounded-lg bg-primary" aria-hidden="true" />
        <img
          src={badge}
          alt="LS Street MMA Self Defence badge"
          width={512}
          height={512}
          loading="lazy"
          className="relative w-full rounded-lg"
        />
      </div>
    </section>

    {/* WHAT YOU'LL GAIN */}
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="text-center">
          <p className="kicker">Why train with us</p>
          <h2 className="mt-5 text-4xl md:text-5xl">What You'll Gain</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gains.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-lg border border-white/10 bg-ink-soft p-7 transition-colors hover:border-primary/60"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-md bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon size={28} />
              </span>
              <h3 className="mt-6 text-2xl">{title}</h3>
              <p className="mt-3 leading-relaxed text-white/75">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* FIRST SESSION */}
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-[1.3fr_1fr] md:py-28">
      <div>
        <p className="kicker">First session</p>
        <h2 className="mt-5 text-4xl md:text-5xl">Not sure what to expect?</h2>
        <p className="mt-2 font-display uppercase text-2xl text-primary">That's completely normal.</p>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>Trying something new can feel intimidating, especially if you've never trained in MMA before.</p>
          <p>
            At LS Street MMA, you don't need experience, exceptional fitness or any previous martial arts knowledge.
          </p>
          <p>
            You'll be introduced to practical techniques in a structured, supportive environment where you can learn at
            your own pace.
          </p>
          <p className="font-semibold text-foreground">Just turn up, give it a go and see what you think.</p>
        </div>
      </div>

      <Link
        to="/coach"
        className="group self-start overflow-hidden rounded-lg bg-ink text-white shadow-xl transition-transform hover:-translate-y-1"
      >
        <img
          src={lee}
          alt="Lee, head coach at LS Street MMA"
          width={800}
          height={1200}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover object-top"
        />
        <div className="flex items-center justify-between gap-4 p-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">Head Coach</p>
            <p className="font-display uppercase text-3xl">Hi I'm Lee</p>
          </div>
          <ArrowRight className="text-primary transition-transform group-hover:translate-x-1" size={28} />
        </div>
      </Link>
    </section>

    {/* FIRST SESSION FREE */}
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-y-0 -left-10 w-1/3 -skew-x-12 bg-ink/10" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center lg:flex-row lg:justify-between lg:text-left">
        <h2 className="text-5xl md:text-6xl">First Session Free</h2>
        <a
          href="#book"
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-ink px-7 py-4 font-display uppercase tracking-wider text-lg text-white transition-transform hover:-translate-y-0.5"
        >
          Book Your Free Session <ArrowRight size={20} />
        </a>
      </div>
    </section>

    {/* WHERE & WHEN + BOOKING */}
    <section id="book" className="mx-auto grid max-w-2xl lg:max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2 md:py-28">
      <div>
        <p className="kicker">Where &amp; when</p>
        <h2 className="mt-5 text-4xl md:text-5xl">Come and train</h2>

        <ul className="mt-8 space-y-4">
          <li className="flex gap-4 rounded-lg border bg-card p-5">
            <MapPin className="mt-1 text-primary shrink-0" size={26} />
            <div>
              <p className="font-display uppercase text-xl">Location: {SITE.area}</p>
              <p className="text-muted-foreground">Full training address provided upon booking.</p>
              <a
                href={SITE.mapsListing}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1 font-semibold text-primary hover:underline underline-offset-4"
              >
                See LS Street MMA on Google Maps <ArrowRight size={16} />
              </a>
            </div>
          </li>
          <li className="flex gap-4 rounded-lg border bg-card p-5">
            <CalendarDays className="mt-1 text-primary shrink-0" size={26} />
            <div>
              <p className="font-display uppercase text-xl">Training Days</p>
              <p className="text-muted-foreground">{SITE.trainingDays}</p>
            </div>
          </li>
          <li className="flex gap-4 rounded-lg border bg-card p-5">
            <Clock className="mt-1 text-primary shrink-0" size={26} />
            <div>
              <p className="font-display uppercase text-xl">Time</p>
              <p className="text-muted-foreground">{SITE.trainingTime}</p>
            </div>
          </li>
        </ul>
      </div>

      {/* On phones and tablets the form comes first, so "Book" buttons land right on it */}
      <div className="order-first lg:order-none rounded-xl border-t-4 border-primary bg-card p-6 shadow-xl md:p-8">
        <h2 className="text-3xl md:text-4xl">Book Your Free Session</h2>
        <p className="mt-2 mb-6 text-muted-foreground">
          Leave your details and Lee will get back to you with everything you need for your first session.
        </p>
        <BookingForm />
      </div>
    </section>
  </Layout>
);

export default Index;
