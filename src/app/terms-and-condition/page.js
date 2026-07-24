import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import { siteSettings } from "@/constants/content";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions of Skill Development Sansthan.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div
            className="prose-legacy text-[15px] text-slate-600"
            dangerouslySetInnerHTML={{ __html: siteSettings.term }}
          />
        </Container>
      </section>
    </>
  );
}
