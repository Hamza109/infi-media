import { testimonials } from "@/data/testimonials"

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-white px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 text-center">
        <h2
          id="testimonials-title"
          className="text-3xl font-black text-[#1f1f37] sm:text-4xl"
        >
          What our clients say
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative h-full rounded-2xl border border-[#ece9ff] bg-white px-6 py-6 text-left shadow-[0_15px_40px_rgba(113,63,191,0.06)]"
            >
              <div className="absolute -top-4 left-6 flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-[#a931f5] to-[#5a18e5] text-xs font-semibold uppercase text-white">
                Image
              </div>
              <p className="mt-6 text-sm leading-6 text-[#4a4d60]">{item.quote}</p>
              <div className="mt-4 text-sm font-semibold text-[#1f1f37]">{item.name}</div>
              <div className="text-xs uppercase tracking-[0.08em] text-[#7c35e4]/80">
                {item.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

