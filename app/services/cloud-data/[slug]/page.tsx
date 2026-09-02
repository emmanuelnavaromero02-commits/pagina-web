import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AwsMigrationPage } from "@/components/services/AwsMigrationPage";
import { SpecializedServicePage } from "@/components/services/SpecializedServicePage";
import { CLOUD_DATA_PAGES } from "@/lib/data/specialized-services";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(CLOUD_DATA_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = CLOUD_DATA_PAGES[slug];
  if (!page) return {};
  if (slug === "aws") {
    return createPageMetadata({
      path: "/services/cloud-data/aws",
      title: l(
        "Migración y modernización en AWS",
        "AWS migration and modernization",
      ),
      description: l(
        "Assessment, landing zone, migración de SAP y aplicaciones, modernización, continuidad, operación administrada y FinOps en AWS.",
        "Assessment, landing zone, SAP and application migration, modernization, continuity, managed operations, and FinOps on AWS.",
      ),
    });
  }
  return createPageMetadata({
    path: `/services/cloud-data/${page.slug}`,
    title: `${page.title} · ${l("Nube y datos gobernados", "Cloud & Governed Data")}`,
    description: page.intro,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = CLOUD_DATA_PAGES[slug];
  if (!page) notFound();
  if (slug === "aws") return <AwsMigrationPage data={page} />;
  return <SpecializedServicePage data={page} />;
}
