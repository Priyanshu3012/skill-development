import Image from "next/image";
import { Icon } from "@iconify/react";
import Container from "@/components/shared/Container";
import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";
import { siteSettings, notifications } from "@/constants/content";

function NoticeList({ title, icon, items }) {
  if (!items.length) return null;
  return (
    <Card className="p-5">
      <div className="flex items-center gap-2.5">
        <span className="flex size-9 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
          <Icon icon={icon} className="size-5" />
        </span>
        <h3 className="text-sm font-bold text-slate-900">{title}</h3>
      </div>
      <ul className="mt-4 max-h-64 space-y-3 overflow-y-auto pr-1">
        {items.map((item) => (
          <li
            key={item.id}
            className="border-b border-dashed border-slate-200 pb-3 last:border-0"
          >
            <a
              href={item.href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-700 hover:text-brand-600"
            >
              {item.heading}
            </a>
            {item.content ? (
              <p className="mt-1 text-xs text-slate-500">{item.content}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default function AboutAndNotices() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            About Us
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            {siteSettings.aboutHeading}
          </h2>
          {siteSettings.aboutImage ? (
            <div className="relative mt-6 h-64 w-full overflow-hidden rounded-2xl sm:h-80">
              <Image
                src={siteSettings.aboutImage}
                alt="About Skill Development Sansthan"
                fill
                className="object-cover"
              />
            </div>
          ) : null}
          <div
            className="prose-legacy mt-6 text-[15px] text-slate-600"
            dangerouslySetInnerHTML={{ __html: siteSettings.aboutUs }}
          />
          <Button href="/about" variant="outline" className="mt-2">
            Read More
            <Icon icon="ph:arrow-right-bold" className="size-4" />
          </Button>
        </div>

        <div className="flex flex-col gap-5">
          <NoticeList
            title="Notice Board"
            icon="ph:megaphone-bold"
            items={notifications.notice}
          />
          <NoticeList
            title="Main Menu"
            icon="ph:list-bullets-bold"
            items={notifications.main}
          />
          <NoticeList
            title="Public Section"
            icon="ph:users-three-bold"
            items={notifications.public}
          />
        </div>
      </Container>
    </section>
  );
}
