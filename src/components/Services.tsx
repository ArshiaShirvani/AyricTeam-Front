import { services } from "@/lib/content";
import { iconMap } from "./icons";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="py-[86px]">
      <div className="container-ayric">
        <Reveal className="mb-11">
          <h2 className="sec-title whitespace-nowrap">خدمات ما</h2>
          <p className="mt-2.5 text-[14.5px] text-muted">
            راهکارهای جامع برای حضور قدرتمندتر در دنیای دیجیتال
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal key={s.slug} delay={i * 90}>
                <article className="corner-card group h-full overflow-hidden rounded border border-white/[0.07] bg-[linear-gradient(160deg,#101016,#0a0a0e)] p-6 pt-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-[0_22px_50px_rgba(224,16,36,0.16)]">
                  <Icon className="mb-4 h-[34px] w-[34px] text-brand-bright transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mb-2.5 text-[17.5px] font-extrabold">{s.title}</h3>
                  <p className="min-h-[78px] text-[13.5px] leading-8 text-muted">{s.desc}</p>
                  {/* <a
                    href="#contact"
                    className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-bright transition-all hover:gap-3"
                  >
                    جزئیات بیشتر ←
                  </a> */}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
