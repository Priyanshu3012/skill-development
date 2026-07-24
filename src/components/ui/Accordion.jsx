"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-slate-900 transition-colors hover:bg-slate-50 sm:px-6"
            >
              <span dangerouslySetInnerHTML={{ __html: item.question }} />
              <Icon
                icon="ph:caret-down-bold"
                className={clsx(
                  "size-4 flex-none text-brand-600 transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              id={`faq-panel-${item.id}`}
              className={clsx(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div
                  className="prose-legacy px-5 pb-5 text-sm text-slate-600 sm:px-6"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
