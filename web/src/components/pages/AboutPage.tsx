export const AboutPage = () => {
  const values = [
    {
      title: "Local Connection",
      text: "We bring people together through small, welcoming museum and city experiences in Berlin.",
    },
    {
      title: "Curious Exploration",
      text: "Every tour is designed to help you discover culture, stories, and places you might otherwise miss.",
    },
    {
      title: "Meaningful Community",
      text: "JoinMi is about meeting people, sharing perspectives, and making your time in the city feel less lonely and more alive.",
    },
  ];

  const highlights = [
    "Small-group museum and cultural tours",
    "A friendly space for locals, newcomers, and travelers",
    "Simple booking and community-driven experiences",
  ];

  return (
    <div className=" min-h-screen bg-cyan-50/80 text-neutral-900">
      <section className="container relative overflow-hidden border-b border-neutral-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.04),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.03),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
                About JoinMi
              </p>
              <h1 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
                Discover Berlin together, not alone.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
                JoinMi creates museum and cultural tour experiences that make it
                easier to explore Berlin, connect with others, and enjoy the
                city in a more human way.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#story"
                  className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  Our Story
                </a>
                <a
                  href="#values"
                  className="rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
                >
                  What We Believe
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[28px] border border-neutral-200 bg-cyan/10 p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-800">
                  Why JoinMi
                </p>
                <p className="mt-4 text-2xl font-semibold leading-snug">
                  More than a tour platform — a simple way to meet, explore, and
                  belong.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
                  >
                    <p className="text-sm leading-6 text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
              Our Story
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              Built for people who want to experience the city with others.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-7 text-neutral-700">
            <p>
              JoinMi started from a simple idea: exploring a city feels better
              when you do it together. Museums, exhibitions, and cultural spaces
              can be inspiring, but they can also feel overwhelming or distant
              when you go alone.
            </p>
            <p>
              We wanted to create a welcoming way for people to join small
              cultural experiences in Berlin, whether they are new in town,
              visiting for a short time, or simply looking for more meaningful
              ways to spend their weekends.
            </p>
            <p>
              That is why JoinMi focuses on accessible, community-centered tours
              that turn cultural discovery into a shared experience.
            </p>
          </div>
        </div>
      </section>

      <section id="values" className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
              What We Believe
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              Cultural experiences should feel open, social, and easy to join.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[28px] border border-neutral-200 bg-cyan/10 p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="grid gap-6 rounded-3xl border border-neutral-200 bg-neutral-900 p-8 text-white shadow-xl md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-400">
              Join the Journey
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              Explore museums, meet people, and experience Berlin differently.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-300 md:text-base">
              Whether you are looking for inspiration, connection, or simply a
              new way to spend your day, JoinMi helps you discover the city with
              others.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <a
              href="/tours"
              className="rounded-2xl bg-white px-5 py-3 text-center text-sm font-medium text-neutral-900 transition hover:-translate-y-0.5"
            >
              View Tours
            </a>
            <a
              href="/booking"
              className="rounded-2xl border border-white/20 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
            >
              Reserve a Spot
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
