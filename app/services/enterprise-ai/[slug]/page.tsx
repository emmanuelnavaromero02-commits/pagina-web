import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SpecializedServicePage } from "@/components/services/SpecializedServicePage";
import { ENTERPRISE_AI_PAGES } from "@/lib/data/specialized-services";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(ENTERPRISE_AI_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = ENTERPRISE_AI_PAGES[slug];
  if (!page) return {};
  return {
    title: `${page.title} · Operational AI`,
    description: page.intro,
    alternates: {
      canonical: `/services/enterprise-ai/${page.slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = ENTERPRISE_AI_PAGES[slug];
  if (!page) notFound();
  return <SpecializedServicePage data={page} />;
}
