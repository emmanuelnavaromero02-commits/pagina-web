import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SpecializedServicePage } from "@/components/services/SpecializedServicePage";
import { SOFTWARE_FACTORY_PAGES } from "@/lib/data/specialized-services";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(SOFTWARE_FACTORY_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = SOFTWARE_FACTORY_PAGES[slug];
  if (!page) return {};
  return createPageMetadata({
    path: `/services/software-factory/${page.slug}`,
    title: `${page.title} · ${l("Fábrica de software", "Software Factory")}`,
    description: page.intro,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = SOFTWARE_FACTORY_PAGES[slug];
  if (!page) notFound();
  return <SpecializedServicePage data={page} />;
}
