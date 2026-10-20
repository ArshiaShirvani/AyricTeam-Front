import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "آیریک | طراحی سایت، توسعه وب و رشد برند",
  description:
    "ما وب‌سایت نمی‌سازیم؛ ما نقطه شروع یک تجربه متفاوت برای برند شما را می‌سازیم. آیریک، تیم توسعه وب حرفه‌ای در زمینه طراحی سایت و برنامه‌نویسی؛ همراه با خدمات سئو، امنیت، رشد و پشتیبانی مداوم.",
  keywords: [
    "طراحی سایت",
    "توسعه وب",
    "آیریک",
    "Ayric",
    "سئو",
    "پشتیبانی سایت",
    "UI/UX",
    "هزینه طراحی سایت",
    "تیم آیریک",
    "آیریک تیم",
    "برنامه نویسی",
    "برنامه نویسی آیریک",

  ],
  openGraph: {
    title: "آیریک | تیم توسعه وب",
    description:
      "ما نقطه شروع یک تجربه متفاوت برای برند شما را می‌سازیم. طراحی سایت، توسعه وب، سئو، امنیت و پشتیبانی مداوم.",
    siteName: "Ayric",
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ink font-sans text-[#f2f2f4] antialiased leading-[1.9]">
        {children}
      </body>
    </html>
  );
}
