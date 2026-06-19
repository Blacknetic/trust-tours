import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { byCategory, getPackage } from "@/data/packages";
import PackagePageView from "@/components/PackagePageView";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return byCategory("cultural").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return {};

  const title = `${pkg.shortName} – Tanzania Cultural Tour`;
  const description = pkg.summary.slice(0, 155);
  const canonical = `/cultural/${pkg.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, type: "website", url: canonical },
  };
}

export default async function CulturalPage({ params }: Props) {
  const { slug } = await params;
  const pkg = getPackage(slug);

  if (!pkg || pkg.category !== "cultural") notFound();

  return <PackagePageView pkg={pkg} />;
}
