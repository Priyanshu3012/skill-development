import Link from "next/link";
import { Icon } from "@iconify/react";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import Card from "@/components/shared/Card";
import { centers } from "@/constants/content";

export const metadata = {
  title: "Our Centers",
  description: "Affiliated centers of Skill Development Sansthan across regions.",
};

export default function CentersPage() {
  return (
    <>
      <PageHero title="Our Centers" description="Affiliated training centers by region" />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {centers.map((c) => (
              <Card
                key={c.region}
                as={Link}
                href={`/center/${encodeURIComponent(c.region)}`}
                className="group flex items-center justify-between gap-3 p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10"
              >
                <div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">
                    {c.region}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">{c.centers.length} centers</p>
                </div>
                <Icon
                  icon="ph:arrow-right-bold"
                  className="size-4 flex-none text-slate-300 transition-colors group-hover:text-brand-600"
                />
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
