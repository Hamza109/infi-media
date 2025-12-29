import { CheckCircle2, Rocket, Shield, Sparkles } from "lucide-react";

import { trustPoints } from "@/data/trust-points";

const WhyTrust = () => {
  return (
    <section
      id='why-us'
      className='relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8'
      aria-labelledby='why-trust-title'
    >
      <div className='pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_at_20%_20%,rgba(124,53,228,0.12),transparent_50%),radial-gradient(600px_at_80%_10%,rgba(249,82,190,0.12),transparent_40%)]' />

      <div className='mx-auto flex max-w-6xl flex-col gap-10 text-center'>
        <div className='space-y-3'>
          <h2
            id='why-trust-title'
            className='text-3xl font-black text-[#1f1f37] sm:text-4xl'
          >
            Why brands trust INFI-D MEDIA
          </h2>
          <p className='text-base text-[#5b5f73]'>
            Not just pretty visuals. We combine storytelling, strategy, and
            systems so your content actually performs, not just posts.
          </p>
        </div>

        <div className='grid gap-4 rounded-[28px] border border-[#ede9ff] bg-white/80 p-4 shadow-[0_20px_60px_rgba(113,63,191,0.08)] backdrop-blur sm:grid-cols-3'>
          {trustPoints.map((point, idx) => {
            const icons = [Shield, Rocket, Sparkles];
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={point.id}
                className='rounded-2xl border border-[#ece9ff] bg-white px-6 py-6 text-left shadow-[0_12px_32px_rgba(113,63,191,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(113,63,191,0.14)]'
              >
                <div className='flex items-center gap-3'>
                  <span className='flex size-10 items-center justify-center rounded-xl bg-[#f4edff] text-[#7c35e4]'>
                    <Icon className='size-5' />
                  </span>
                  <h3 className='text-lg font-semibold text-[#1f1f37]'>
                    {point.title}
                  </h3>
                </div>
                <p className='mt-3 text-sm leading-6 text-[#5b5f73]'>
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className='grid gap-4 rounded-2xl bg-white/70 p-4 text-left shadow-[0_14px_30px_rgba(113,63,191,0.08)] sm:grid-cols-3 sm:p-6'>
          {[
            { label: "Projects delivered", value: "480+" },
            { label: "Avg. watch-time lift", value: "42%" },
            { label: "Markets served", value: "18 countries" },
          ].map((stat) => (
            <div key={stat.label} className='flex items-center gap-3'>
              <span className='flex size-9 items-center justify-center rounded-full bg-[#f4edff] text-[#7c35e4]'>
                <CheckCircle2 className='size-4' />
              </span>
              <div>
                <div className='text-lg font-bold text-[#1f1f37]'>
                  {stat.value}
                </div>
                <div className='text-xs uppercase tracking-[0.12em] text-[#6b6f85]'>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrust;
