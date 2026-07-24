import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import { siteSettings } from "@/constants/content";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of Skill Development Sansthan.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div
            className="prose-legacy text-[15px] text-slate-600"
            dangerouslySetInnerHTML={{ __html: siteSettings.privacyPolicy }}
          />
        </Container>
      </section>
    </>
  );
}
