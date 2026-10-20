import { contactInfo, faqs } from "@/lib/content";
import { Accordion } from "./Accordion";
import { Reveal } from "./Reveal";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export function Faq() {
  return (
    <section id="faq" className="bg-ink-3 py-[86px]">
      {/* داده ساختاریافته برای موتورهای جست‌وجو */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-ayric">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.5fr]">
          <Reveal>
            <h2 className="sec-title whitespace-nowrap">سوالات متداول</h2>
            <p className="mt-4 text-[14.5px] leading-[2] text-[#b0b0ba]">
              پاسخ پرتکرارترین سوال‌هایی که پیش از شروع پروژه از ما پرسیده می‌شود. اگر پاسخ
              سوال‌تان را پیدا نکردید، در واتساپ یا تلگرام از ما بپرسید.
            </p>

            <a
              href={contactInfo.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-brand/45 px-5 py-2.5 text-[13px] font-bold text-brand-bright transition-all hover:-translate-y-0.5 hover:bg-brand/10 hover:text-white"
            >
              پرسیدن سوال در واتساپ ←
            </a>
          </Reveal>

          <Reveal delay={120}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
