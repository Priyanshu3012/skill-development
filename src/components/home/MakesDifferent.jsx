import Container from "@/components/shared/Container";
import { siteSettings } from "@/constants/content";

export default function MakesDifferent() {
  if (!siteSettings.payment) return null;
  return (
    <section className="bg-slate-900 py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {siteSettings.makesDifferentTag}
          </h2>
        </div>
        <div className="lg:col-span-3">
          <div
            className="prose-legacy text-sm leading-relaxed text-slate-300 sm:text-base"
            dangerouslySetInnerHTML={{ __html: siteSettings.payment }}
          />
        </div>
      </Container>
    </section>
  );
}
