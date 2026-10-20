"use client";

import { useState } from "react";
import { PlusIcon } from "./icons";

export type AccordionItem = { q: string; a: string };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;

        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-lg border bg-[#0d0d12] transition-colors duration-300 ${
              isOpen ? "border-brand/50" : "border-white/[0.07] hover:border-brand/30"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-right"
            >
              <span
                className={`text-[14.5px] font-bold transition-colors ${
                  isOpen ? "text-brand-bright" : "text-white"
                }`}
              >
                {item.q}
              </span>

              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "rotate-[135deg] border-brand bg-brand text-white"
                    : "border-white/15 text-brand-bright"
                }`}
              >
                <PlusIcon className="h-[15px] w-[15px]" />
              </span>
            </button>

            {/* محتوا برای سئو در DOM می‌ماند و فقط به‌صورت بصری بسته می‌شود */}
            <div
              id={`faq-panel-${i}`}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-[13.5px] leading-[2.1] text-muted">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
