"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import { categories, centers, siteSettings } from "@/constants/content";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Courses",
    href: "/courses",
    children: categories.map((c) => ({
      label: c.name,
      href: `/courses/${c.id}`,
    })),
  },
  { label: "Faq", href: "/faq" },
  { label: "Document", href: "/document" },
  {
    label: "Our Center",
    href: "/center",
    children: centers.map((c) => ({
      label: c.region,
      href: `/center/${encodeURIComponent(c.region)}`,
    })),
  },
  { label: "Contact Us", href: "/contact" },
];

const authLinks = [
  { label: "Student Login", href: "/login", icon: "ph:user-circle-bold" },
  { label: "Result", href: "/result", icon: "ph:exam-bold" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 shadow-sm shadow-slate-900/5">
      <div className="bg-white/90 backdrop-blur-md">
        <div className="hidden bg-brand-800 text-white sm:block">
          <Container className="flex items-center justify-between gap-6 py-2 text-xs">
            <div className="min-w-0 flex-1 overflow-hidden whitespace-nowrap">
              <span className="inline-block animate-marquee">
                {siteSettings.headerMarquee}
                <span className="mx-12" />
                {siteSettings.headerMarquee}
              </span>
            </div>
            <Link
              href="/institute-login"
              className="flex flex-none items-center gap-1.5 rounded-full bg-accent-600 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-accent-700"
            >
              <Icon icon="ph:bank-bold" className="size-3.5" />
              Institute Login
            </Link>
          </Container>
        </div>

        <Container className="flex items-center justify-between gap-4 py-3">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-xl bg-brand-600 text-lg font-black text-white">
              SD
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-slate-900 sm:text-base">
                Skill Development Sansthan
              </span>
              <span className="text-[11px] font-medium text-slate-500">
                Empowering Skills, Building Careers
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <div key={link.label} className="group relative">
                <Link
                  href={link.href}
                  className={clsx(
                    "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700",
                    pathname === link.href && "bg-brand-50 text-brand-700",
                  )}
                >
                  {link.label}
                  {link.children ? (
                    <Icon icon="ph:caret-down-bold" className="size-3" />
                  ) : null}
                </Link>
                {link.children ? (
                  <div className="invisible absolute left-0 top-full z-20 w-64 translate-y-1 rounded-2xl border border-slate-100 bg-white p-2 opacity-0 shadow-xl shadow-slate-900/10 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="max-h-80 overflow-y-auto">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            {authLinks.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                variant="outline"
                size="sm"
              >
                <Icon icon={link.icon} className="size-4" />
                {link.label}
              </Button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Open menu"
          >
            <Icon icon="ph:list-bold" className="size-5" />
          </button>
        </Container>
      </div>

      <div
        className={clsx(
          "fixed inset-0 z-50 lg:hidden",
          mobileOpen ? "visible" : "invisible",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={clsx(
            "absolute inset-0 bg-slate-900/50 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={clsx(
            "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-white p-5 shadow-2xl transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-slate-900">Menu</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex size-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
              aria-label="Close menu"
            >
              <Icon icon="ph:x-bold" className="size-4" />
            </button>
          </div>

          <nav className="mt-6 flex flex-1 flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    {link.label}
                  </Link>
                  {link.children ? (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenSubmenu(
                          openSubmenu === link.label ? null : link.label,
                        )
                      }
                      className="flex size-9 items-center justify-center text-slate-500"
                      aria-label={`Toggle ${link.label} submenu`}
                    >
                      <Icon
                        icon="ph:caret-down-bold"
                        className={clsx(
                          "size-4 transition-transform",
                          openSubmenu === link.label && "rotate-180",
                        )}
                      />
                    </button>
                  ) : null}
                </div>
                {link.children && openSubmenu === link.label ? (
                  <div className="ml-3 flex flex-col border-l border-slate-200 pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-2 border-t border-slate-100 pt-5">
            {[
              ...authLinks,
              {
                label: "Institute Login",
                href: "/institute-login",
                icon: "ph:bank-bold",
              },
            ].map((link) => (
              <Button
                key={link.href}
                href={link.href}
                variant="outline"
                size="sm"
              >
                <Icon icon={link.icon} className="size-4" />
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
