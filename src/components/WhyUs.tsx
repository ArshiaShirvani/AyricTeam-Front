import { whyAyric } from "@/lib/content";
import { iconMap } from "./icons";
import { Reveal } from "./Reveal";

export function WhyUs() {
  return (
    <section id="why" className="py-[86px]">
      <div className="container-ayric">
        <Reveal className="mb-11">
          <h2 className="sec-title whitespace-nowrap">چرا آیریک؟</h2>
          <p className="mt-2.5 text-[14.5px] text-muted">
            دلایلی که باعث می‌شود برندها آیریک را برای شروع تجربه دیجیتال خود انتخاب کنند
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyAyric.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.title} delay={i * 80} className="h-full">
                <article className="corner-card group flex h-full gap-4 rounded border border-white/[0.07] bg-[linear-gradient(160deg,#101016,#0a0a0e)] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-[0_22px_50px_rgba(224,16,36,0.16)]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-brand/35 bg-brand/[0.08] transition-colors duration-300 group-hover:bg-brand/20">
                    <Icon className="h-[22px] w-[22px] text-brand-bright transition-transform duration-300 group-hover:scale-110" />
                  </span>

                  <div>
                    <h3 className="mb-2 text-[16px] font-extrabold">{item.title}</h3>
                    <p className="text-[13.5px] leading-8 text-muted">{item.desc}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
