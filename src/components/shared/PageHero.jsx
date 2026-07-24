import Container from "@/components/shared/Container";

export default function PageHero({ title, description }) {
  return (
    <section className="bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 py-14 sm:py-16">
      <Container>
        <h1 className="text-2xl font-extrabold text-white sm:text-4xl">{title}</h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm text-brand-100 sm:text-base">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}
