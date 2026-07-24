import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/constants/content";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Skill Development Sansthan programmes.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" description="Answers to common questions" />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Accordion items={faqs} />
        </Container>
      </section>
    </>
  );
}
