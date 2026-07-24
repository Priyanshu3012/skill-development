import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import { centers } from "@/constants/content";

export function generateStaticParams() {
  return centers.map((c) => ({ name: encodeURIComponent(c.region) }));
}

export async function generateMetadata({ params }) {
  const { name } = await params;
  const region = decodeURIComponent(name);
  return { title: `${region} Center` };
}

export default async function CenterDetailPage({ params }) {
  const { name } = await params;
  const region = decodeURIComponent(name);
  const group = centers.find((c) => c.region === region);
  if (!group) notFound();

  return (
    <>
      <PageHero title={`${region} Center`} description="Affiliated centers in this region" />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.centers.map((center) => (
              <div
                key={center.id}
                className="rounded-2xl bg-brand-600 p-5 text-sm text-white"
                dangerouslySetInnerHTML={{ __html: center.content }}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
