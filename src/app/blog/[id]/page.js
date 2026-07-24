import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import { posts } from "@/constants/content";

export function generateStaticParams() {
  return posts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);
  if (!post) return {};
  return { title: post.title };
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);
  if (!post) notFound();

  const recent = posts.filter((p) => p.id !== post.id).slice(0, 15);

  return (
    <>
      <PageHero title={post.title} />
      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <article className="lg:col-span-8">
            {post.image ? (
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-2xl sm:h-80">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
            ) : null}
            <div className="mb-6 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <Icon icon="ph:calendar-blank-bold" className="size-4" />
                {post.date}
              </span>
              {post.author ? (
                <span className="flex items-center gap-1.5">
                  <Icon icon="ph:user-bold" className="size-4" />
                  Posted by {post.author}
                </span>
              ) : null}
            </div>
            <div
              className="prose-legacy text-[15px] text-slate-600"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Recent Posts
              </h3>
              <ul className="mt-4 space-y-3">
                {recent.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/blog/${p.id}`}
                      className="flex items-center gap-3 rounded-lg p-2 hover:bg-brand-50"
                    >
                      {p.image ? (
                        <div className="relative size-14 flex-none overflow-hidden rounded-lg">
                          <Image src={p.image} alt={p.title} fill className="object-cover" />
                        </div>
                      ) : null}
                      <div>
                        <p className="line-clamp-2 text-sm font-semibold text-slate-700">
                          {p.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">{p.date}</p>
                      </div>
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
