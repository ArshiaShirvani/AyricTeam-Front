"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPortfolioById } from "@/services";
import { Portfolio } from "@/types";

export default function PortfolioDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    if (!id) return;
    getPortfolioById(Number(id))
      .then((res) => {
        setPortfolio(res.data);
        setActiveImage(res.data.cover_image);
      })
      .catch((err) => console.error("خطا در دریافت نمونه‌کار:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <section className="bg-ink-3 min-h-screen py-[120px]">
        <div className="container-ayric">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="aspect-[16/10] animate-pulse rounded border border-white/[0.07] bg-white/5" />
            <div className="space-y-4">
              <div className="h-8 w-2/3 animate-pulse rounded bg-white/5" />
              <div className="h-4 w-full animate-pulse rounded bg-white/5" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-white/5" />
              <div className="h-4 w-4/6 animate-pulse rounded bg-white/5" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!portfolio) {
    return (
      <section className="bg-ink-3 flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted">نمونه‌کار پیدا نشد.</p>
          <Link
            href="/#works"
            className="mt-4 inline-block text-sm font-bold text-brand-bright hover:underline"
          >
            ← بازگشت به نمونه‌کارها
          </Link>
        </div>
      </section>
    );
  }

  const allImages = [
    { id: 0, image: portfolio.cover_image, order: -1 },
    ...(portfolio.images || []),
  ].sort((a, b) => a.order - b.order);

  return (
    <section className="bg-ink-3 min-h-screen py-[120px]">
      <div className="container-ayric">
        {/* بازگشت */}
        <Link
          href="/#works"
          className="mb-8 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-bright transition-all hover:gap-3"
        >
          ← بازگشت به نمونه‌کارها
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* گالری تصاویر */}
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded border border-white/[0.07] bg-[#0a0a0e]">
              <img
                src={activeImage}
                alt={portfolio.title}
                className="h-full w-full object-cover"
              />
            </div>

            {allImages.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {allImages.map((img) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImage(img.image)}
                    className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded border transition-all ${
                      activeImage === img.image
                        ? "border-brand-bright opacity-100"
                        : "border-white/[0.07] opacity-50 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={img.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* اطلاعات پروژه */}
          <div>
            <h1 className="text-2xl font-bold leading-relaxed md:text-3xl">
              {portfolio.title}
            </h1>

            {portfolio.technologies?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {portfolio.technologies.map((t) => (
                  <span
                    key={t.id}
                    className="rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 text-xs text-muted"
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            )}

            <p className="mt-6 text-[15px] leading-[1.85] text-muted">
              {portfolio.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {portfolio.link && (
                <a
                  href={portfolio.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-brand-bright px-6 py-2.5 text-sm font-bold text-ink-3 transition-all hover:brightness-110"
                >
                  مشاهده پروژه
                </a>
              )}
              {portfolio.github_link && (
                <a
                  href={portfolio.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-white/[0.12] px-6 py-2.5 text-sm font-bold text-white/80 transition-all hover:border-white/30 hover:text-white"
                >
                  GitHub
                </a>
              )}
            </div>

            <div className="mt-8 border-t border-white/[0.07] pt-5 text-xs text-muted">
              <p>
                تاریخ ایجاد:{" "}
                {new Date(portfolio.created_at).toLocaleDateString("fa-IR")}
              </p>
              {portfolio.updated_at && (
                <p className="mt-1">
                  آخرین بروزرسانی:{" "}
                  {new Date(portfolio.updated_at).toLocaleDateString("fa-IR")}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}