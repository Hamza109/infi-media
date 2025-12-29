import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

const Hero = () => {
  const { openModal } = useContactModal();

  return (
    <section
      id='hero'
      className='mx-auto mt-6 flex max-w-7xl flex-col px-4 pb-24 pt-6 sm:px-6 lg:px-8'
    >
      <div className='relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#12002f] via-[#5a18e5] to-[#f136b8] px-6 py-14 shadow-[0_30px_80px_rgba(88,35,191,0.35)] sm:px-10 sm:py-16 md:px-16 md:py-18'>
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.05),transparent_30%)]' />
        <div className='relative flex max-w-4xl flex-col gap-7'>
          <div className='inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur'>
            Digital-first storytelling
          </div>
          <h1 className='text-balance text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl'>
            Content that stops the scroll & keeps them watching.
          </h1>
          <p className='max-w-3xl text-lg leading-7 text-white/85 sm:text-xl sm:leading-8'>
            We design ads, reels, showreels, and product stories that look
            premium and perform. From short-form hooks to cinematic edits and
            marketplaces.
          </p>
          <div className='flex flex-wrap items-center gap-4 pt-2'>
            <Button
              size='lg'
              className='h-12 rounded-full bg-white px-6 text-lg font-semibold text-[#4d2c94] hover:bg-white/90'
              onClick={openModal}
            >
              Start a Project
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='h-12 rounded-full border-2 border-white/70 bg-transparent px-6 text-lg font-semibold text-white hover:border-white hover:bg-white/10'
              asChild
            >
              <a
                href='#featured-work'
                className='inline-flex items-center gap-2'
              >
                <Play className='size-4' />
                View Showreel
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
