import { Icon } from "@iconify/react";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

export default function PortalNotice({ title, description, icon }) {
  return (
    <section className="flex min-h-[60vh] items-center py-16">
      <Container className="mx-auto max-w-lg text-center">
        <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
          <Icon icon={icon} className="size-8" />
        </span>
        <h1 className="mt-6 text-2xl font-bold text-slate-900">{title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/contact" variant="primary">
            Contact Admissions
          </Button>
          <Button href="/" variant="outline">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
