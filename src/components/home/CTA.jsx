import { Icon } from "@iconify/react";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

export default function CTA() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent-600 to-accent-700 px-8 py-14 text-center sm:px-16">
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 size-56 rounded-full bg-white/10" />
          <h2 className="relative text-2xl font-bold text-white sm:text-3xl">
            Ready to start your certified career journey?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-sm text-accent-50 sm:text-base">
            Reach out to our admissions team or explore our full catalogue of programmes.
          </p>
          <div className="relative mt-7 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="white">
              Contact Admissions
              <Icon icon="ph:arrow-right-bold" className="size-4" />
            </Button>
            <Button href="/courses" variant="outline" className="border-white/40 text-white hover:border-white hover:text-white hover:bg-white/10">
              Browse Courses
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
