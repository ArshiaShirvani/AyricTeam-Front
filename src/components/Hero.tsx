import Image from "next/image";
import { slogan } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-[18px]"
      style={{
        background:
          "radial-gradient(1000px 520px at 22% 42%, rgba(224,16,36,0.16), transparent 70%), #030304",
      }}
    >
      {/* خطوط لیزری */}
      <span className="laser top-[24%] -right-[25%] animate-glow" />
      <span className="laser top-[58%] -right-[35%] opacity-60" />
      <span className="laser top-[86%] -right-[15%] opacity-40" />

      {/* شبکه نقطه‌ای */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(70% 60% at 50% 50%, #000, transparent)",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 50% 50%, #000, transparent)",
        }}
      />

      <div className="container-ayric relative z-10">
        <div className="grid items-center gap-10 py-20 md:grid-cols-2">
          {/* ---- متن ---- */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.03] px-4 py-1.5 text-[12.5px] font-semibold text-[#c9c9d1]">
              <i className="inline-block h-[6px] w-[6px] rounded-full bg-brand-bright shadow-[0_0_12px_#ff1f38]" />
              آیریک · تیم توسعه وب
            </div>

            <h1 className="mt-6 text-balance text-[clamp(24px,3.3vw,40px)] font-extrabold leading-[1.7]">
              <span className="block text-[#dcdce4]">{slogan.first}</span>
              <span className="mt-1 block bg-gradient-to-b from-white to-[#ffb0ba] bg-clip-text pb-1 text-transparent">
                {slogan.second}
              </span>
            </h1>

            <div className="mt-6 flex items-center gap-4 text-[15px] font-bold text-[#ededf1]">
              <span>طراحی</span>
              <i className="inline-block h-[7px] w-[7px] rounded-full bg-brand-bright shadow-[0_0_12px_#ff1f38]" />
              <span>توسعه</span>
              <i className="inline-block h-[7px] w-[7px] rounded-full bg-brand-bright shadow-[0_0_12px_#ff1f38]" />
              <span>رشد</span>
            </div>

            <p className="mt-5 max-w-[470px] text-[15px] text-[#b7b7c0]">
              با ترکیب خلاقیت، تکنولوژی روز و نگاه دقیق به جزئیات، تجربه‌های
              دیجیتال متمایز برای برندها می‌سازیم.
            </p>

            <div className="mt-8 flex whitespace-nowrap gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-8 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-bright hover:shadow-[0_10px_34px_rgba(224,16,36,0.45)] max-lg:px-4 max-lg:py-1 max-lg:text-sm"
              >
                شروع پروژه <span>←</span>
              </a>
              <a
                href="#works"
                className="inline-flex items-center gap-2 rounded-md border border-brand px-8 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand/15"
              >
                مشاهده نمونه‌کارها
              </a>
            </div>
          </div>

          {/* ---- تصویر با لایه‌های چرخیده ---- */}
          <div className="hero-stack max-sm:my-10">
            {/* نور پس‌زمینه */}
            <div className="absolute inset-0 -z-10 animate-glow rounded-full bg-brand/25 blur-[110px]" />

            {/* لایه‌ها — یکی‌یکی ظاهر می‌شن */}
            <div className="hero-stack-layer hero-stack-layer-5" />
            <div className="hero-stack-layer hero-stack-layer-4" />
            <div className="hero-stack-layer hero-stack-layer-3" />
            <div className="hero-stack-layer hero-stack-layer-2" />
            <div className="hero-stack-layer hero-stack-layer-1" />

            {/* تصویر اصلی — بعد از لایه‌ها */}
            <div className="hero-stack-img">
              <Image
                src="/images/hero-logo.webp"
                alt="لوگوی سه‌بعدی آیریک"
                width={1024}
                height={640}
                sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) 45vw, 546px"
                preload
                className="hero-fade w-full rounded-[16px]"
              />
              <div className="hero-fade-overlay" />
              <div className="hero-red-glow" />
            </div>
          </div>
        </div>
      </div>

      {/* اسکرول ایندیکاتور */}
      <div className="absolute bottom-9 left-1/2 z-10 flex h-10 w-6 -translate-x-1/2 justify-center rounded-full border-[1.5px] border-brand pt-[7px]">
        <span className="animate-scroll-dot h-[7px] w-[3px] rounded-full bg-brand-bright" />
      </div>
    </section>
  );
}
