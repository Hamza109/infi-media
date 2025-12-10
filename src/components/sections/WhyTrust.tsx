import { trustPoints } from "@/data/trust-points"

const WhyTrust = () => {
  return (
    <section
      id="why-us"
      className="bg-white px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="why-trust-title"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 text-center">
        <div className="space-y-3">
          <h2
            id="why-trust-title"
            className="text-3xl font-black text-[#1f1f37] sm:text-4xl"
          >
            Why brands trust INFI-D MEDIA
          </h2>
          <p className="text-base text-[#5b5f73]">
            Not just pretty visuals. We combine storytelling, strategy, and systems so your
            content actually performs, not just posts.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {trustPoints.map((point) => (
            <div
              key={point.id}
              className="rounded-2xl border border-[#ece9ff] bg-white px-6 py-6 text-left shadow-[0_15px_40px_rgba(113,63,191,0.06)]"
            >
              <h3 className="text-lg font-semibold text-[#1f1f37]">{point.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5b5f73]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyTrust

