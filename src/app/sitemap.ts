import type { MetadataRoute } from "next";
import { getPortfolios } from "@/services";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-dynamic";

function toValidDate(value?: string): Date | undefined {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  try {
    const { data } = await getPortfolios();

    for (const portfolio of data ?? []) {
      if (portfolio?.id == null) continue;

      routes.push({
        url: `${SITE_URL}/portfolios/${portfolio.id}`,
        lastModified:
          toValidDate(portfolio.updated_at) ??
          toValidDate(portfolio.created_at),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  } catch (error) {
    console.error("خطا در دریافت نمونه‌کارها برای سایت‌مپ:", error);
  }

  return routes;
}
