import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { guides, getGuide } from "@/data/guides";
import GuideView from "@/components/GuideView";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  const canonical = `/guides/${guide.slug}`;
  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: { canonical },
    openGraph: { title: guide.title, description: guide.excerpt, type: "article", url: canonical },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return <GuideView guide={guide} />;
}
