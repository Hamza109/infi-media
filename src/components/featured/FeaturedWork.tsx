import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { featuredWorkSlides } from "@/data/featured-works";

const FeaturedWork = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section
      id='featured-work'
      className='bg-[#d8cbed] px-4 py-16 sm:px-6 lg:px-8'
    >
      <div className='mx-auto flex max-w-6xl flex-col items-center text-center'>
        <div className='space-y-2'>
          <h3 className='text-3xl font-semibold uppercase  text-white/90'>
            Featured Work
          </h3>
          <p className='text-base  leading-6 text-white/85 sm:text-lg sm:leading-7'>
            Swipe through a rotating selection of our favorite edits, trailers,
            <br />
            and content pieces created for digital-first brands.
          </p>
        </div>

        <div className='relative mt-10 w-full'>
          <Carousel
            opts={{ align: "center", loop: true }}
            className='w-full'
            setApi={setApi}
          >
            <CarouselContent className='-ml-3 md:-ml-4'>
              {featuredWorkSlides.map((slide) => (
                <CarouselItem
                  key={slide.id}
                  className='pl-3 md:basis-1/2 md:pl-4 lg:basis-1/3'
                >
                  <div className='group relative h-full overflow-hidden rounded-[28px] bg-white shadow-lg'>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className='h-[420px] w-full object-cover transition duration-500 group-hover:scale-[1.02]'
                      loading='lazy'
                    />
                    <div className='absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-br from-white/20 via-[#9e4cf1]/70 to-[#9e4cf1]' />
                    <div className='absolute inset-0 flex items-end'>
                      <div className='w-full px-6 pb-6 text-left text-white'>
                        <p className='text-sm font-semibold uppercase tracking-[0.08em] text-white/80'>
                          {slide.subtitle}
                        </p>
                        <h3 className='text-xl font-extrabold leading-tight'>
                          {slide.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className='hidden lg:flex bg-white/80 text-[#5b2aa5] hover:bg-white' />
            <CarouselNext className='hidden lg:flex bg-white/80 text-[#5b2aa5] hover:bg-white' />
          </Carousel>

          <div className='mt-6 flex justify-center gap-2'>
            {Array.from({ length: count }).map((_, idx) => (
              <button
                key={`dot-${idx}`}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => api?.scrollTo(idx)}
                className={`h-2 w-2 rounded-full transition ${
                  current === idx ? "w-4 bg-[#5b2aa5]" : "bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
