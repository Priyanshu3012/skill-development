import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import Card from "@/components/shared/Card";
import { categories } from "@/constants/content";

export const metadata = {
  title: "Courses",
  description: "Browse all certified diploma and degree courses offered by Skill Development Sansthan.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero title="Our Courses" description="Certified diploma and degree programmes" />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((course) => (
              <Card
                key={course.id}
                as={Link}
                href={`/courses/${course.id}`}
                className="group overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10"
              >
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  {course.image ? (
                    <Image
                      src={course.image}
                      alt={course.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Icon icon="ph:graduation-cap-bold" className="size-10 text-brand-300" />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between gap-2 p-5">
                  <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">
                    {course.name}
                  </h3>
                  <Icon
                    icon="ph:arrow-right-bold"
                    className="size-4 flex-none text-slate-300 transition-colors group-hover:text-brand-600"
                  />
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
