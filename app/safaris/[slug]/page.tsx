import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { byCategory, getPackage } from "@/data/packages";
import PackagePageView from "@/components/PackagePageView";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [...byCategory("safari"), ...byCategory("zanzibar")].map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return {};

  const title = `${pkg.shortName} – Tanzania Safari`;
  const description = pkg.summary.slice(0, 155);

  return { title, description, openGraph: { title, description, type: "website" } };
}

export default async function SafariPage({ params }: Props) {
  const { slug } = await params;
  const pkg = getPackage(slug);

  if (!pkg || (pkg.category !== "safari" && pkg.category !== "zanzibar")) notFound();

  return <PackagePageView pkg={pkg} />;
}
