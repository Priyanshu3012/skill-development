import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import { categories } from "@/constants/content";

export function generateStaticParams() {
  return categories.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = categories.find((c) => c.id === id);
  if (!course) return {};
  return {
    title: course.name,
    description: course.tagLine || `${course.name} course details at Skill Development Sansthan.`,
  };
}

export default async function CourseDetailPage({ params }) {
  const { id } = await params;
  const course = categories.find((c) => c.id === id);
  if (!course) notFound();

  const otherCourses = categories.filter((c) => c.id !== course.id).slice(0, 15);

  return (
    <>
      <PageHero title={course.name} description={course.tagLine} />
      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {course.image ? (
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-2xl sm:h-80">
                <Image src={course.image} alt={course.name} fill className="object-cover" />
              </div>
            ) : null}
            <div
              className="prose-legacy text-[15px] text-slate-600"
              dangerouslySetInnerHTML={{ __html: course.content }}
            />
          </div>
          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Other Courses
              </h3>
              <ul className="mt-4 space-y-1">
                {otherCourses.map((c) => (
                  <li key={c.id}>
                    <Link
                      href={`/courses/${c.id}`}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
