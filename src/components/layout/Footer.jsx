import Link from "next/link";
import { Icon } from "@iconify/react";
import Container from "@/components/shared/Container";
import { siteSettings } from "@/constants/content";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Our Center", href: "/center" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-condition" },
  { label: "Document Required", href: "/document" },
  { label: "FAQ", href: "/faq" },
];

const socialIcons = ["ph:facebook-logo-fill", "ph:twitter-logo-fill", "ph:instagram-logo-fill"];

function stripHtml(html) {
  return (html || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export default function Footer() {
  return (
    <footer className="mt-24 bg-slate-950 text-slate-300">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-xl bg-brand-600 text-lg font-black text-white">
              SD
            </span>
            <span className="text-base font-bold text-white">Skill Development Sansthan</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
            {stripHtml(siteSettings.aboutUs).slice(0, 260)}...
          </p>
          <div className="mt-6 flex gap-3">
            {socialIcons.map((icon, idx) => (
              <a
                key={icon}
                href={siteSettings.socialLinks?.[idx] || "#"}
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-600"
                aria-label={icon}
              >
                <Icon icon={icon} className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-400 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Resources
          </h3>
          <ul className="mt-4 space-y-2.5">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-400 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-2 text-sm text-slate-400">
            <p className="flex items-start gap-2">
              <Icon icon="ph:map-pin-bold" className="mt-0.5 size-4 flex-none text-brand-400" />
              {siteSettings.address}
            </p>
            <p className="flex items-center gap-2">
              <Icon icon="ph:envelope-simple-bold" className="size-4 flex-none text-brand-400" />
              {siteSettings.email}
            </p>
            <p className="flex items-center gap-2">
              <Icon icon="ph:phone-bold" className="size-4 flex-none text-brand-400" />
              {siteSettings.phone}
            </p>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-5">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Skill Development Sansthan. All rights reserved.</p>
          <p>{stripHtml(siteSettings.footerContent)}</p>
        </Container>
      </div>
    </footer>
  );
}
