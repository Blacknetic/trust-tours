import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { byCategory, getPackage } from "@/data/packages";
import PackagePageView from "@/components/PackagePageView";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return byCategory("trekking").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return {};

  const title = `${pkg.shortName} – Tanzania Trek`;
  const description = pkg.summary.slice(0, 155);
  const canonical = `/trekking/${pkg.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, type: "website", url: canonical },
  };
}

export default async function TrekkingPage({ params }: Props) {
  const { slug } = await params;
  const pkg = getPackage(slug);

  if (!pkg || pkg.category !== "trekking") notFound();

  return <PackagePageView pkg={pkg} />;
}
