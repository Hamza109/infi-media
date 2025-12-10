import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { services } from "@/data/services";

const WhatWeDo = () => {
  return (
    <section
      id='services'
      className='bg-white px-4 py-16 sm:px-6 lg:px-8'
      aria-labelledby='what-we-do-title'
    >
      <div className='mx-auto flex max-w-6xl flex-col gap-10 text-center'>
        <div className='space-y-2'>
          <h2
            id='what-we-do-title'
            className='text-3xl font-black text-[#1f1f37] sm:text-4xl'
          >
            What We Do
          </h2>
        </div>

        <div className='relative p-2 '>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className='w-full'
          >
            <CarouselContent className='-ml-3 md:-ml-4 bg-transparent'>
              {services.map((service) => (
                <CarouselItem
                  key={service.id}
                  className='p-3 md:basis-1/2 md:pl-4 lg:basis-1/3'
                >
                  <Card className='h-full rounded-3xl border-[#ece9ff] bg-white px-6 py-8  text-left  transition hover:-translate-y-1 hover:shadow-[0_10px_15px_rgba(113,63,191,0.3)]'>
                    <CardContent className='p-0 space-y-4'>
                      <div className='inline-flex rounded-full bg-[#f4edff] px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#7c35e4]'>
                        {service.title}
                      </div>
                      <p className='text-sm leading-6 text-[#35384a]'>
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className='hidden md:flex -left-12 bg-white shadow-lg text-[#5b2aa5] hover:bg-white' />
            <CarouselNext className='hidden md:flex -right-12 bg-white shadow-lg text-[#5b2aa5] hover:bg-white' />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
