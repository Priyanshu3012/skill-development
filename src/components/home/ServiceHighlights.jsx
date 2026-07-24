import Image from "next/image";
import { Icon } from "@iconify/react";
import Container from "@/components/shared/Container";
import Card from "@/components/shared/Card";
import { services } from "@/constants/content";

export default function ServiceHighlights() {
  if (!services.length) return null;

  return (
    <section className="relative z-10 -mt-8 sm:-mt-12 md:-mt-16">
      <Container>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.id}
              as="a"
              href={service.pdf || "#"}
              target={service.pdf ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10"
            >
              <div className="flex size-12 flex-none items-center justify-center rounded-xl bg-brand-50">
                {service.image ? (
                  <Image src={service.image} alt="" width={28} height={28} className="object-contain" />
                ) : (
                  <Icon icon="ph:certificate-bold" className="size-6 text-brand-600" />
                )}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">
                  {service.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-slate-500">{service.content}</p>
              </div>
              <Icon
                icon="ph:arrow-up-right-bold"
                className="ml-auto size-4 flex-none text-slate-300 transition-colors group-hover:text-brand-600"
              />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
