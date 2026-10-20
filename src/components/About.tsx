import { ShieldCheckIcon } from "./icons";
import { aboutGuarantee, aboutParagraphs, stats } from "@/lib/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#06060a]">
      <div
        className="absolute inset-y-0 left-0 w-full bg-cover bg-center opacity-70 md:w-[58%]"
        style={{ backgroundImage: "url('/images/about-office.jpg')" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(270deg,#06060a_6%,rgba(6,6,10,0.55)_55%,rgba(6,6,10,0.92)_100%)]" />
      </div>

      <div className="container-ayric relative z-10">
        <div className="grid gap-10 py-[90px] md:grid-cols-2">
          <Reveal>
            <h2 className="sec-title">درباره ما</h2>

            <div className="mt-5 max-w-[540px] space-y-4">
              {aboutParagraphs.map((p) => (
                <p key={p} className="text-[15px] leading-[2.1] text-[#b4b4be]">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-6 flex max-w-[540px] items-start gap-3.5 rounded-lg border border-brand/35 bg-[linear-gradient(150deg,rgba(224,16,36,0.14),rgba(10,10,14,0.6))] p-5">
              <ShieldCheckIcon className="mt-2 h-5 w-5 shrink-0 text-brand-bright" />

              <p className="text-[14.5px] leading-[2.3] text-[#dcdce4]">
                {aboutGuarantee.lead}{" "}
                {aboutGuarantee.items.map((item) => (
                  <span
                    key={item}
                    className="mx-0.5 inline-block rounded-full border border-brand/40 bg-brand/[0.12] px-2.5 text-[13px] font-bold text-white"
                  >
                    {item}
                  </span>
                ))}{" "}
                {aboutGuarantee.tail}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-6 py-2 text-center ${
                    i === stats.length - 1 ? "" : "border-l border-brand/45"
                  }`}
                >
                  <b className="block text-[27px] font-extrabold text-white">{s.value}</b>
                  <span className="text-[12.5px] text-muted">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <div />
        </div>
      </div>
    </section>
  );
}
