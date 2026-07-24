import { Icon } from "@iconify/react";
import Container from "@/components/shared/Container";
import Card from "@/components/shared/Card";
import SectionTitle from "@/components/shared/SectionTitle";
import { testimonials } from "@/constants/content";

export default function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Testimonials"
          title="What our students say"
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.id} className="flex flex-col gap-4 p-6">
              <Icon icon="ph:quotes-fill" className="size-7 text-brand-200" />
              <p className="flex-1 text-sm leading-relaxed text-slate-600">
                {t.content}
              </p>
              <p className="text-sm font-semibold text-slate-900">{t.name}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
