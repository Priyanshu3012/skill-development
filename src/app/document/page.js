import { Icon } from "@iconify/react";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import { documents } from "@/constants/content";

export const metadata = {
  title: "Documents Required",
  description: "Documents required for admission at Skill Development Sansthan.",
};

export default function DocumentPage() {
  return (
    <>
      <PageHero title="Documents Required" description="Keep these documents ready for admission" />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <a
                key={doc.id}
                href={doc.href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-brand-600 px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                <Icon icon="ph:file-text-bold" className="size-5 flex-none" />
                {doc.name}
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
