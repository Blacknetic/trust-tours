import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { byCategory, getPackage } from "@/data/packages";
import PackagePageView from "@/components/PackagePageView";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return byCategory("zanzibar").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return {};

  const title = `${pkg.shortName} – Zanzibar Beach Holiday`;
  const description = pkg.summary.slice(0, 155);
  const canonical = `/zanzibar/${pkg.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, type: "website", url: canonical },
  };
}

export default async function ZanzibarPage({ params }: Props) {
  const { slug } = await params;
  const pkg = getPackage(slug);

  if (!pkg || pkg.category !== "zanzibar") notFound();

  return <PackagePageView pkg={pkg} />;
}
