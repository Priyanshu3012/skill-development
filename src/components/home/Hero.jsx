"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import { slides } from "@/constants/content";

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback((i) => emblaApi && emblaApi.scrollTo(i), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 5500);
    return () => clearInterval(id);
  }, [emblaApi]);

  const items = slides.length ? slides : [{ id: "fallback", image: null }];

  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div
        className="relative h-[640px] min-h-[640px] w-full sm:h-[560px] sm:min-h-[560px] md:h-[52vh] md:min-h-[420px] md:max-h-[640px]"
        ref={emblaRef}
      >
        <div className="flex h-full">
          {items.map((slide) => (
            <div key={slide.id} className="relative h-full min-w-0 flex-[0_0_100%]">
              {slide.image ? (
                <Image
                  src={slide.image}
                  alt="Skill Development Sansthan"
                  fill
                  priority
                  className="object-cover opacity-70"
                  sizes="100vw"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/10" />
            </div>
          ))}
        </div>

        <Container className="absolute inset-0 flex flex-col items-start justify-center gap-6">
          <span className="animate-fade-up rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/20">
            Recognised Skill &amp; Paramedical Training
          </span>
          <h1 className="max-w-2xl animate-fade-up text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Building futures through certified skills &amp; careers
          </h1>
          <p className="max-w-xl animate-fade-up text-sm leading-relaxed text-slate-200 sm:text-base">
            Diploma, degree and vocational programmes delivered through a nationwide network of
            affiliated centers.
          </p>
          <div className="flex animate-fade-up flex-wrap gap-3">
            <Button href="/courses" variant="accent" size="lg">
              Explore Courses
              <Icon icon="ph:arrow-right-bold" className="size-4" />
            </Button>
            <Button href="/contact" variant="white" size="lg">
              Talk to Us
            </Button>
          </div>
        </Container>

        {items.length > 1 ? (
          <>
            <button
              type="button"
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 sm:flex"
              aria-label="Previous slide"
            >
              <Icon icon="ph:caret-left-bold" className="size-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="absolute right-4 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 sm:flex"
              aria-label="Next slide"
            >
              <Icon icon="ph:caret-right-bold" className="size-5" />
            </button>
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
              {items.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    selected === i ? "w-6 bg-white" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
