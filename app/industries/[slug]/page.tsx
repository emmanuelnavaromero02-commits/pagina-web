import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SpecializedServicePage } from "@/components/services/SpecializedServicePage";
import { INDUSTRY_PAGES } from "@/lib/data/industry-pages";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(INDUSTRY_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = INDUSTRY_PAGES[slug];
  if (!page) return {};
  return createPageMetadata({
    path: `/industries/${page.slug}`,
    title: `${page.title} · ${l("Áreas de negocio", "Business areas")}`,
    description: page.intro,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = INDUSTRY_PAGES[slug];
  if (!page) notFound();
  return <SpecializedServicePage data={page} />;
}
