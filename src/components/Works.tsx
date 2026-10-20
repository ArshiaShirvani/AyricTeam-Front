"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { getPortfolios } from "@/services";
import { Portfolio } from "@/types";

export function Works() {
  const [works, setWorks] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getPortfolios()
      .then((res) => setWorks(res.data))
      .catch((err) => console.error("خطا در دریافت نمونه‌کارها:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="works" className="bg-ink-3 py-[86px]">
      <div className="container-ayric">
        <Reveal className="mb-10">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <h2 className="sec-title">نمونه‌کارها</h2>
              <p className="mt-2.5 text-[14.5px] text-muted">برخی از پروژه‌های موفق ما</p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-brand-bright transition-all hover:gap-3"
            >
              مشاهده همه ←
            </a>
          </div>
        </Reveal>

        {loading ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="aspect-[16/11] animate-pulse rounded border border-white/[0.07] bg-white/5"
              />
            ))}
          </div>
        ) : works.length === 0 ? (
          <p className="rounded border border-white/[0.07] bg-white/[0.02] px-6 py-10 text-center text-[13.5px] text-muted">
            به‌زودی نمونه‌ای از پروژه‌های ما اینجا نمایش داده می‌شود.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {works.map((w, i) => (
              <Reveal key={w.id} delay={i * 90}>
                <Link
                  href={`/portfolios/${w.id}`}
                  className="group relative block aspect-[16/11] overflow-hidden rounded border border-white/[0.07] bg-[#0a0a0e]"
                >
                  <img
                    src={w.cover_image}
                    alt={w.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-[linear-gradient(0deg,rgba(4,4,6,0.95)_0%,rgba(4,4,6,0.15)_55%,transparent_100%)] p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <b className="text-[15px]">{w.title}</b>
                    {w.technologies?.length > 0 && (
                      <small className="text-[12px] text-brand-bright">
                        {w.technologies.map((t) => t.name).join(" - ")}
                      </small>
                    )}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}