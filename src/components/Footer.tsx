
import { contactInfo, navLinks } from "@/lib/content";
import {
  GlobeIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "./icons";
import { Logo } from "./Logo";

const socialItems = [
  { Icon: InstagramIcon, href: contactInfo.socials.instagram, label: "اینستاگرام" },
  { Icon: TelegramIcon, href: contactInfo.socials.telegram, label: "تلگرام" },
  { Icon: WhatsAppIcon, href: contactInfo.socials.whatsapp, label: "واتساپ" },
];

const year = new Date()
  .getFullYear()
  .toLocaleString("fa-IR", { useGrouping: false });

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-ink pt-14 pb-6">
      <div className="container-ayric">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1.2fr]">
          {/* برند */}
          <div>
            <Logo />
            <p className="mt-5 max-w-[320px] text-[13.5px] leading-[2] text-[#9a9aa5]">
              آیریک، تیم توسعه وب؛ طراحی خلاقانه، تکنولوژی روز و نگاه دقیق به جزئیات برای ساختن
              تجربه‌ای متفاوت برای برند شما.
            </p>
          </div>

          {/* دسترسی سریع */}
          <div>
            <h3 className="mb-4 text-[14.5px] font-extrabold text-white">
              دسترسی سریع
            </h3>

            <nav className="grid gap-2.5 text-[13px] text-muted">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="transition-colors hover:text-brand-bright"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* اطلاعات تماس */}
          <div>
            <h3 className="mb-4 text-[14.5px] font-extrabold text-white">
              تماس با ما
            </h3>

            <a
              href={contactInfo.phone.href}
              className="mb-3 flex items-center gap-3 text-[13.5px] text-muted transition-colors hover:text-brand-bright"
            >
              <PhoneIcon className="h-[18px] w-[18px] shrink-0 text-brand-bright" />
              <span dir="ltr">{contactInfo.phone.display}</span>
            </a>

            <a
              href={contactInfo.email.href}
              className="mb-3 flex items-center gap-3 text-[13.5px] text-muted transition-colors hover:text-brand-bright"
            >
              <MailIcon className="h-[18px] w-[18px] shrink-0 text-brand-bright" />
              <span dir="ltr">{contactInfo.email.display}</span>
            </a>

            <a
              href={contactInfo.website.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 flex items-center gap-3 text-[13.5px] text-muted transition-colors hover:text-brand-bright"
            >
              <GlobeIcon className="h-[18px] w-[18px] shrink-0 text-brand-bright" />
              <span dir="ltr">{contactInfo.website.display}</span>
            </a>

            <div className="flex items-center gap-3">
              {socialItems.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid h-[34px] w-[34px] place-items-center rounded-md border border-white/[0.08] text-brand-bright transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* نماد اعتماد الکترونیکی */}
        <div className="mt-10 flex justify-center border-t border-white/[0.07] pt-8 md:justify-start">
          <a
            referrerPolicy="origin"
            target="_blank"
            rel="noopener noreferrer"
            href="https://trustseal.enamad.ir/?id=8208516&Code=oZ2rf8YnkInvr3ku5oPjocEwACtIYVbv"
            aria-label="مشاهده نماد اعتماد الکترونیکی آیریک"
            className="inline-flex items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] p-3 transition-colors hover:border-brand-bright/40"
          >
            <img
              referrerPolicy="origin"
              src="https://trustseal.enamad.ir/logo.aspx?id=8208516&Code=oZ2rf8YnkInvr3ku5oPjocEwACtIYVbv"
              alt="نماد اعتماد الکترونیکی"
              style={{
                cursor: "pointer",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </a>
        </div>

        {/* کپی‌رایت */}
        <div className="mt-8 border-t border-white/[0.07] pt-5 text-center text-[12.5px] text-[#7c7c87]">
          © {year} Ayric. تمامی حقوق محفوظ است
        </div>
      </div>
    </footer>
  );
}
