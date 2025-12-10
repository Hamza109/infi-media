import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id='hero'
      className='mx-auto mt-6 flex max-w-7xl flex-col px-4 pb-24 pt-6 sm:px-6 lg:px-8'
    >
      <div className='relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#8b4dff] via-[#8845f6] to-[#f136b8] px-6 py-12 shadow-[0_30px_60px_rgba(88,35,191,0.35)] sm:px-10 sm:py-14 md:px-14 md:py-16'>
        <div className='flex max-w-3xl flex-col gap-6'>
          <h1 className='text-balance text-2xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-4xl'>
            Content That Makes Your Brand Unforgettable
          </h1>
          <p className='text-lg leading-7 text-white/85 sm:text-xl sm:leading-8'>
            Modern storytelling & visuals crafted for creators, startups, and
            brands who want to stand out with style, clarity, and impact.
          </p>
          <div className='flex flex-wrap items-center gap-4 pt-2'>
            <Button
              size='lg'
              className='h-12 rounded-full bg-white px-6 text-lg font-semibold text-[#4d2c94] hover:bg-white/90'
            >
              Start Your Project
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='h-12 rounded-full border-2 border-white/70 bg-transparent px-6 text-lg font-semibold text-white hover:border-white hover:bg-white/10'
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
