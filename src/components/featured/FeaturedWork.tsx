import { useEffect, useState } from "react";
import { Play } from "lucide-react";

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
                    <div className='absolute inset-0 bg-gradient-to-br from-[#0b0224]/25 via-transparent to-[#8d4bff]/25 opacity-0 transition duration-300 group-hover:opacity-100' />
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className='h-[420px] w-full object-cover transition duration-500 group-hover:scale-[1.03]'
                      loading='lazy'
                    />
                    <div className='absolute inset-0 flex flex-col justify-between p-6 text-left text-white'>
                      <div className='flex items-center justify-between'>
                        <span className='rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em]'>
                          Showreel
                        </span>
                        <span className='flex size-10 items-center justify-center rounded-full bg-white/80 text-[#5b2aa5] opacity-0 shadow-lg transition group-hover:opacity-100'>
                          <Play className='size-4' />
                        </span>
                      </div>
                      <div>
                        <p className='text-sm font-semibold uppercase tracking-[0.08em] text-white/85'>
                          {slide.subtitle}
                        </p>
                        <h3 className='text-xl font-extrabold leading-tight drop-shadow-md'>
                          {slide.title}
                        </h3>
                        {slide.tags && (
                          <div className='mt-3 flex flex-wrap gap-2'>
                            {slide.tags.map((tag) => (
                              <span
                                key={tag}
                                className='rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white/90 backdrop-blur'
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
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
