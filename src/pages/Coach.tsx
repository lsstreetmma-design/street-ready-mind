import Layout from "@/components/Layout";
import BookingForm from "@/components/BookingForm";
import lee from "@/assets/lee-coach.webp";

// All wording on this page comes from Lee's "LS STREET MMA" Word document (Nov 2026).

const Coach = () => (
  <Layout
    title="Head Coach Lee | LS Street MMA Self-Defence, Bromley"
    description="Meet Lee, head coach at LS Street MMA in Bromley. A friendly, supportive place to learn practical MMA-based self-defence at your own pace. First session free."
  >
    {/* HI I'M LEE */}
    <section className="bg-secondary torn-bottom">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-14 pb-24 md:grid-cols-[1.2fr_1fr] md:pt-20 md:pb-32">
        <div>
          <p className="kicker">Head Coach</p>
          <h1 className="mt-6 text-6xl md:text-7xl">
            Hi I'm <span className="brush-underline">Lee</span>
          </h1>
          <div className="mt-8 space-y-4 text-lg leading-relaxed text-foreground/80">
            <p>I believe training should be about more than just learning how to defend yourself.</p>
            <p>
              It's about building confidence, challenging yourself and developing skills that make a difference both inside
              and outside the gym.
            </p>
            <p>
              My approach is simple. I want to create an environment where everyone feels welcome, regardless of their
              experience, fitness or ability.
            </p>
            <p className="font-semibold text-foreground">
              You don't need to be the strongest, the fittest or the most confident person in the room. You just need to be
              willing to give it a go.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rotate-3 rounded-lg bg-primary" aria-hidden="true" />
          <img
            src={lee}
            alt="Lee, head coach at LS Street MMA, in his LS Street MMA hoodie"
            width={800}
            height={1200}
            className="relative w-full rounded-lg"
          />
        </div>
      </div>
    </section>

    {/* MY APPROACH */}
    <section className="mx-auto max-w-4xl px-4 py-20 md:py-28">
      <p className="kicker">My approach</p>
      <p className="mt-6 font-display uppercase text-4xl md:text-5xl leading-tight">
        Learn at your own pace. <span className="text-primary">Build confidence.</span> Keep progressing.
      </p>
      <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted-foreground">
        <p>I understand that walking into a martial arts class for the first time can feel intimidating.</p>
        <p>
          That's why I focus on creating a friendly, supportive environment where you can feel comfortable learning
          something new.
        </p>
        <p>
          Using practical MMA-based self-defence training, I'll help you develop your skills, improve your fitness and build
          confidence in your own abilities.
        </p>
        <p>
          I'll encourage you to challenge yourself, step outside your comfort zone and discover what you can achieve.
        </p>
        <p className="font-semibold text-foreground">
          But there's no pressure to keep up with anyone else. Your progress is your own.
        </p>
      </div>
    </section>

    {/* WHAT MATTERS TO ME */}
    <section className="bg-secondary">
      <div className="mx-auto max-w-4xl px-4 py-20 md:py-28">
        <p className="kicker">What matters to me</p>
        <blockquote className="mt-8 border-l-4 border-primary pl-6 font-display uppercase text-3xl md:text-4xl leading-tight">
          For me, teaching isn't just about showing someone a technique.
        </blockquote>
        <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            It's about seeing someone who was nervous on their first day gradually become more confident, more capable and
            more comfortable in themselves.
          </p>
          <p>It's about helping people realise they can do things they never thought possible.</p>
          <p>You don't have to get everything right. You don't have to be perfect.</p>
          <p className="font-semibold text-foreground">You just have to keep learning and moving forward.</p>
          <p>
            My job is to help you develop at your own pace, challenge yourself and leave each session feeling you've achieved
            something.
          </p>
        </div>
      </div>
    </section>

    {/* COME AND GIVE IT A GO */}
    <section id="coach-book" className="mx-auto grid max-w-2xl lg:max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2 md:py-28">
      <div>
        <h2 className="text-4xl md:text-5xl">
          Come and <span className="brush-underline whitespace-nowrap">give it a go</span>
        </h2>
        <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            Whether your goal is to learn practical self-defence, improve your fitness or build your confidence, I'd love to
            help you get started.
          </p>
          <p>No experience needed. No expectations. Just come along and see what you can achieve.</p>
        </div>
        <p className="mt-8 inline-block -rotate-2 bg-primary px-5 py-3 font-display uppercase text-3xl text-white">
          Your first session is free.
        </p>
      </div>

      <div className="rounded-xl border-t-4 border-primary bg-card p-6 shadow-xl md:p-8">
        <h2 className="text-3xl md:text-4xl">Book Your Free Session</h2>
        <p className="mt-2 mb-6 text-muted-foreground">Leave your details and I'll get back to you.</p>
        <BookingForm />
      </div>
    </section>
  </Layout>
);

export default Coach;
