import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import StatsStrip from "@/components/home/StatsStrip";
import { siteSettings } from "@/constants/content";

export const metadata = {
  title: "About Us",
  description: "Learn about Skill Development Sansthan's mission, programmes and reach.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" description="Who we are and what we stand for" />
      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold text-brand-700 sm:text-3xl">
              {siteSettings.aboutHeading}
            </h2>
            <div
              className="prose-legacy mt-5 text-[15px] text-slate-600"
              dangerouslySetInnerHTML={{ __html: siteSettings.aboutUs }}
            />
          </div>
          <div className="lg:col-span-5">
            {siteSettings.aboutImage ? (
              <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-lg shadow-slate-900/10 sm:h-96">
                <Image
                  src={siteSettings.aboutImage}
                  alt="About Skill Development Sansthan"
                  fill
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>
        </Container>
      </section>
      <StatsStrip />
    </>
  );
}
