import { Star } from "lucide-react";

import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8'
      aria-labelledby='testimonials-title'
    >
      <div className='pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(700px_at_20%_20%,rgba(124,53,228,0.12),transparent_45%),radial-gradient(600px_at_80%_10%,rgba(249,82,190,0.12),transparent_40%)]' />

      <div className='mx-auto flex max-w-6xl flex-col gap-10 text-center'>
        <h2
          id='testimonials-title'
          className='text-3xl font-black text-[#1f1f37] sm:text-4xl'
        >
          What our clients say
        </h2>

        <div className='grid gap-6 md:grid-cols-3'>
          {testimonials.map((item) => (
            <div
              key={item.id}
              className='relative h-full overflow-visible rounded-2xl border border-[#ece9ff] bg-white/80 px-6 py-6 text-left shadow-[0_15px_40px_rgba(113,63,191,0.08)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(113,63,191,0.12)]'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-[#f4edff]/60 via-white/30 to-white/10' />
              <div className='relative'>
                <div className='absolute -top-17 left-6 flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-[#a931f5] to-[#5a18e5] text-xs font-semibold uppercase text-white'>
                  Img
                </div>
                <div className='mt-6 flex items-center gap-2 text-[#f7b500]'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className='size-4 fill-[#f7b500] text-[#f7b500]'
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-6 text-[#4a4d60]'">
                  {item.quote}
                </p>
                <div className='mt-4 text-sm font-semibold text-[#1f1f37]'>
                  {item.name}
                </div>
                <div className='text-xs uppercase tracking-[0.08em] text-[#7c35e4]/80'>
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
