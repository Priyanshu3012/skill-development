import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Container from "@/components/shared/Container";
import Card from "@/components/shared/Card";
import SectionTitle from "@/components/shared/SectionTitle";
import Button from "@/components/shared/Button";
import { posts } from "@/constants/content";

export default function BlogSection() {
  if (!posts.length) return null;
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Latest Updates" title="Our Blogs" />
          <Button href="/blog" variant="outline" size="sm">
            More Posts
            <Icon icon="ph:arrow-right-bold" className="size-4" />
          </Button>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.slice(0, 8).map((post) => (
            <Card
              key={post.id}
              as={Link}
              href={`/blog/${post.id}`}
              className="group overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10"
            >
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Icon
                      icon="ph:newspaper-bold"
                      className="size-10 text-brand-300"
                    />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 text-sm font-semibold text-slate-900 group-hover:text-brand-700">
                  {post.title}
                </h3>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
                  <Icon icon="ph:calendar-blank-bold" className="size-3.5" />
                  {post.date}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
