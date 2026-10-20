"use client";

import { useState, type FormEvent } from "react";
import { subjects, contactInfo } from "@/lib/content";
import { Reveal } from "./Reveal";
import { submitTicket } from "@/services/";
import {
  ChevronDownIcon,
  GlobeIcon,
  InstagramIcon,
  MailIcon,
  MessageIcon,
  PhoneIcon,
  PinIcon,
  SendIcon,
  TelegramIcon,
  UserIcon,
  WhatsAppIcon,
} from "./icons";

type Status = { type: "idle" | "ok" | "err" | "loading"; text?: string };

const contactItems: {
  Icon: (p: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  title: string;
  sub: string;
  href: string;
  ltr?: boolean;
}[] = [
  {
    Icon: PhoneIcon,
    title: contactInfo.phone.display,
    sub: contactInfo.phone.note,
    href: contactInfo.phone.href,
  },
  {
    Icon: MailIcon,
    title: contactInfo.email.display,
    sub: contactInfo.email.note,
    href: contactInfo.email.href,
    ltr: true,
  },
  {
    Icon: GlobeIcon,
    title: contactInfo.website.display,
    sub: contactInfo.website.note,
    href: contactInfo.website.href,
    ltr: true,
  },
];

const socialItems = [
  { Icon: InstagramIcon, href: contactInfo.socials.instagram, label: "اینستاگرام" },
  { Icon: TelegramIcon, href: contactInfo.socials.telegram, label: "تلگرام" },
  { Icon: WhatsAppIcon, href: contactInfo.socials.whatsapp, label: "واتساپ" },
];

export function Contact() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;

    if (!name || !email || !phone || !subject || !message) {
      setStatus({ type: "err", text: "لطفاً تمام فیلدها را پر کنید." });
      return;
    }

    setStatus({ type: "loading", text: "در حال ارسال…" });

    try {
      const res = await submitTicket({ name, email, phone, subject, message });

      if (res.status === 201) {
        form.reset();
        setStatus({
          type: "ok",
          text: "پیام شما با موفقیت ثبت شد. به‌زودی با شما تماس می‌گیریم.",
        });
      } else {
        setStatus({ type: "err", text: "ارسال پیام ناموفق بود." });
      }
    } catch {
      setStatus({ type: "err", text: "ارتباط با سرور برقرار نشد." });
    }
  }

  return (
    <section
      id="contact"
      dir="rtl"
      lang="fa"
      className="border-t border-white/[0.07] bg-ink-2 py-[86px]"
    >
      <div className="container-ayric">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.5fr_0.95fr]">
          {/* عنوان */}
          <Reveal delay={180}>
            <h2 className="sec-title whitespace-nowrap">
              با ما در ارتباط باشید
            </h2>
            <p className="mt-4 text-right text-[14.5px] text-[#b0b0ba]">
              برای شروع پروژه یا دریافت مشاوره رایگان، فرم زیر را تکمیل کنید.
            </p>
          </Reveal>

          {/* فرم */}
          <Reveal delay={90}>
            <form onSubmit={onSubmit} noValidate>
              {/* نام و ایمیل */}
              <div className="grid gap-3.5 sm:grid-cols-2">
                <div className="relative">
                  <input
                    name="name"
                    type="text"
                    dir="rtl"
                    placeholder="نام و نام خانوادگی"
                    className="field-input pr-10 pl-4 text-right"
                  />
                  <UserIcon className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-[#5d5d68]" />
                </div>

                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    dir="ltr"
                    placeholder="email@example.com"
                    className="field-input pr-10 pl-4 text-left"
                  />
                  <MailIcon className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-[#5d5d68]" />
                </div>
              </div>

              {/* شماره تلفن و موضوع */}
              <div className="mt-3.5 grid gap-3.5 sm:grid-cols-2">
                <div className="relative">
                  <input
                    name="phone"
                    type="tel"
                    dir="ltr"
                    placeholder="09123456789"
                    className="field-input pr-10 pl-4 text-left"
                  />
                  <PhoneIcon className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-[#5d5d68]" />
                </div>

                <div className="relative">
                  <ChevronDownIcon className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-[#5d5d68]" />
                  <select
                    name="subject"
                    defaultValue=""
                    dir="rtl"
                    className="field-input pr-10 pl-4 text-muted"
                  >
                    <option value="" disabled>
                      موضوع
                    </option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* پیام */}
              <div className="relative mt-3.5">
                <textarea
                  name="message"
                  dir="rtl"
                  placeholder="پیام شما"
                  className="field-input min-h-[112px] resize-y pr-10 pl-4 text-right"
                />
                <MessageIcon className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-[#5d5d68]" />
              </div>

              {/* دکمه ارسال */}
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="mt-3.5 flex w-full items-center justify-center gap-2 rounded-[6px] bg-brand py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-bright hover:shadow-[0_10px_30px_rgba(224,16,36,0.4)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status.type === "loading" ? "در حال ارسال…" : "ارسال پیام"}
                <SendIcon className="h-[17px] w-[17px]" />
              </button>

              {/* پیام وضعیت */}
              <p
                className={`mt-2.5 min-h-[18px] text-right text-[12.5px] ${
                  status.type === "ok"
                    ? "text-[#3ddc84]"
                    : status.type === "err"
                      ? "text-[#ff6274]"
                      : "text-muted"
                }`}
              >
                {status.text ?? ""}
              </p>
            </form>
          </Reveal>

          {/* اطلاعات تماس */}
          <Reveal>
            {contactItems.map(({ Icon, title, sub, href, ltr }) => {
              const inner = (
                <>
                  <Icon className="mt-1 h-[26px] w-[26px] shrink-0 text-brand-bright" />
                  <div>
                    <b className="block text-right text-[14.5px]" dir={ltr ? "ltr" : "rtl"}>
                      {title}
                    </b>
                    <span className="text-right text-[12.5px] text-muted">{sub}</span>
                  </div>
                </>
              );

              return href ? (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group mb-6 flex items-start gap-3.5"
                >
                  {inner}
                </a>
              ) : (
                <div key={title} className="mb-6 flex items-start gap-3.5">
                  {inner}
                </div>
              );
            })}

            <div className="mt-2 flex items-center gap-3.5">
              {socialItems.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid h-[34px] w-[34px] place-items-center rounded-md text-brand-bright transition-all hover:-translate-y-0.5 hover:bg-brand/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}

            </div>

            <a
              href={contactInfo.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-brand-bright transition-all hover:gap-3 hover:text-white"
            >
              گفت‌وگوی سریع در واتساپ ←
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}