"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { Logo } from "./Logo";
import { CloseIcon, MenuIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 20);
      const pos = window.scrollY + 130;
      let current = "#home";
      for (const link of navLinks) {
        const el = document.querySelector<HTMLElement>(link.href);
        if (el && pos >= el.offsetTop) current = link.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? "border-white/[0.07] bg-ink/85 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-ayric flex h-[68px] items-center justify-between gap-5">
        <Logo />

        <nav className="hidden items-center gap-5 text-[13px] lg:flex xl:gap-7 xl:text-[13.5px]">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`transition-colors hover:text-white ${
                active === l.href ? "text-brand-bright" : "text-[#c9c9d1]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-[6px] bg-brand px-6 py-2.5 text-[13.5px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-bright hover:shadow-[0_8px_28px_rgba(224,16,36,0.45)] lg:inline-flex lg:items-center lg:gap-2"
        >
          شروع پروژه <span>←</span>
        </a>

        <button
          type="button"
          aria-label="منو"
          onClick={() => setOpen((v) => !v)}
          className="text-white lg:hidden"
        >
          {open ? <CloseIcon width={26} height={26} /> : <MenuIcon width={26} height={26} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-3.5 border-b border-white/[0.07] bg-ink-2 px-6 py-5 text-sm lg:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={active === l.href ? "text-brand-bright" : "text-[#c9c9d1]"}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-[6px] bg-brand px-5 py-2.5 text-center font-semibold text-white"
          >
            شروع پروژه
          </a>
        </nav>
      )}
    </header>
  );
}
