import { Link } from "react-router-dom";
import { ArrowRight, Brain, CalendarDays, Dumbbell, MapPin, Shield, UserRound, Users } from "lucide-react";
import Layout from "@/components/Layout";
import BookingForm from "@/components/BookingForm";
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

const Index = () => (
  <Layout
    title="LS Street MMA | MMA Self-Defence Classes in Bromley | First Session Free"
    description="Practical MMA-based self-defence training in Bromley. Build confidence, improve your fitness and learn skills that make a real difference. No experience needed. First session free."
  >
    {/* HERO - light grey, no picture (Lee 11-05: Lee's picture is already further down the page) */}
    <section className="bg-secondary torn-bottom">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-20 md:pt-20 md:pb-28">
        <p className="kicker">LS Street MMA · {SITE.area}</p>
        <h1 className="mt-6 max-w-3xl text-5xl sm:text-6xl md:text-7xl">
          <span className="brush-underline">Real-World</span> <span className="whitespace-nowrap">Self-Defence</span> Training
        </h1>
        <p className="mt-6 max-w-xl text-lg md:text-xl text-foreground/80 leading-relaxed">
          Practical MMA-based self-defence training designed to build your confidence, improve your fitness and teach you
          skills that can make a real difference.
        </p>
        <p className="mt-3 font-semibold">No experience needed. All fitness levels welcome.</p>

        <div className="mt-9 flex flex-col sm:flex-row gap-4">
          <a href="#book" className="btn-primary">
            Try Your First Session Free <ArrowRight size={20} />
          </a>
          <a href={SITE.phoneHref} className="btn-ghost text-ink hover:bg-white">
            Call {SITE.phoneDisplay}
          </a>
        </div>

        {/* Key info boxes. The 1:1 coaching sits here with the class info (Lee 11-05).
            Phones: the two time boxes full width, Bromley + free session side by side. Tablet and up: 2 x 2. */}
        <ul className="mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-md border bg-border text-sm">
          <li className="col-span-2 sm:col-span-1 flex gap-3 bg-card px-4 py-3">
            <CalendarDays size={18} className="mt-0.5 text-primary shrink-0" />
            <div>
              <p className="font-semibold">Classes</p>
              <p className="text-muted-foreground">{SITE.classShort}</p>
            </div>
          </li>
          <li className="col-span-2 sm:col-span-1 flex gap-3 bg-card px-4 py-3">
            <UserRound size={18} className="mt-0.5 text-primary shrink-0" />
            <div>
              <p className="font-semibold">{SITE.oneToOne}</p>
              <p className="text-muted-foreground">{SITE.oneToOneShort}</p>
              <p className="text-muted-foreground">{SITE.homeTraining}</p>
            </div>
          </li>
          <li className="flex items-center gap-3 bg-card px-4 py-3">
            <MapPin size={18} className="text-primary shrink-0" />
            <span className="font-semibold">{SITE.area}</span>
          </li>
          <li className="flex items-center gap-3 bg-card px-4 py-3">
            <Shield size={18} className="text-primary shrink-0" />
            <span className="font-semibold">First session free</span>
          </li>
        </ul>
      </div>
    </section>

    {/* MMA FOR SELF-DEFENCE (badge picture removed at Lee's request 11-05) */}
    <section className="mx-auto max-w-4xl px-4 py-20 md:py-28">
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
    </section>

    {/* WHAT YOU'LL GAIN (light grey, no black backgrounds - Lee 11-05) */}
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="text-center">
          <p className="kicker">Why train with us</p>
          <h2 className="mt-5 text-4xl md:text-5xl">What You'll Gain</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gains.map(({ icon: Icon, title, text }) => (
            // Orange boxes at Lee's request (11-04); body text is near-black because white on this orange is hard to read
            <article
              key={title}
              className="rounded-lg bg-primary p-7 shadow-lg transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-md bg-white text-primary">
                <Icon size={28} />
              </span>
              <h3 className="mt-6 text-2xl text-white">{title}</h3>
              <p className="mt-3 font-medium leading-relaxed text-ink">{text}</p>
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
        className="group self-start overflow-hidden rounded-lg border bg-card shadow-xl transition-transform hover:-translate-y-1"
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

    {/* FIRST SESSION FREE - heading only; its "Book Your Free Session" button was removed at Lee's
        request (11-09) because the booking form starts right below it */}
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-y-0 -left-10 w-1/3 -skew-x-12 bg-white/10" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 text-center">
        <h2 className="text-5xl md:text-6xl">First Session Free</h2>
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
              <p className="font-display uppercase text-xl">Classes</p>
              <p className="text-muted-foreground">{SITE.classDays}</p>
              <p className="text-muted-foreground">{SITE.classTime}</p>
            </div>
          </li>
          <li className="flex gap-4 rounded-lg border-2 border-primary/40 bg-card p-5">
            <UserRound className="mt-1 text-primary shrink-0" size={26} />
            <div>
              <p className="font-display uppercase text-xl">1:1 Coaching</p>
              <p className="text-muted-foreground">{SITE.oneToOne}</p>
              <p className="text-muted-foreground">{SITE.oneToOneDays}</p>
              <p className="text-muted-foreground">{SITE.oneToOneTime}</p>
              <p className="mt-1 font-semibold text-foreground">{SITE.homeTraining}</p>
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
