import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // اجازه دادن به دامنه پیش‌نمایش/پراکسی برای دسترسی به فایل‌های dev
  allowedDevOrigins: ["*.e2b.app", "localhost:3000", "127.0.0.1:3000"],

  async headers() {
    return [
      {
        // صفحه اصلی: همیشه تازه باشد تا پیش‌نمایش هیچ‌وقت نسخه قدیمی نشان ندهد.
        // فایل‌های جاوااسکریپت/CSS در پروداکشن هش محتوا دارند و immutable می‌مانند.
        source: "/",
        headers: [{ key: "Cache-Control", value: "no-cache, must-revalidate" }],
      },
      {
        source: "/portfolios/:path*",
        headers: [{ key: "Cache-Control", value: "no-cache, must-revalidate" }],
      },
    ];
  },
};

export default nextConfig;
