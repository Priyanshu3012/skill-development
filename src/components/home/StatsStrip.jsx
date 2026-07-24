"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/shared/Container";
import { siteSettings } from "@/constants/content";

function Counter({ value }) {
  const numeric = parseInt(String(value).replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = String(value).replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        if (prefersReducedMotion) {
          setCount(numeric);
          return;
        }

        const duration = 1000;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setCount(Math.floor(progress * numeric));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [numeric]);

  return (
    <span ref={ref} className="text-3xl font-extrabold text-white sm:text-4xl">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  const stats = siteSettings.stats.filter((s) => s.value);
  if (!stats.length) return null;

  return (
    <section className="bg-gradient-to-br from-brand-700 to-brand-900 py-14">
      <Container className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <Counter value={stat.value} />
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-brand-100 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
