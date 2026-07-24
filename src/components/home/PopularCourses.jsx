import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Container from "@/components/shared/Container";
import Card from "@/components/shared/Card";
import SectionTitle from "@/components/shared/SectionTitle";
import { categories } from "@/constants/content";

export default function PopularCourses() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Programmes"
          title="Popular Courses"
          description="Explore certified diploma and degree programmes designed for real career outcomes."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((course) => (
            <Card
              key={course.id}
              as={Link}
              href={`/courses/${course.id}`}
              className="group overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10"
            >
              <div className="relative h-40 w-full overflow-hidden bg-slate-100">
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
              <div className="flex items-center justify-between gap-2 p-4">
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-brand-700">
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
  );
}
