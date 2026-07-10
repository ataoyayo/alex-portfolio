import { notFound } from "next/navigation";
import { ProjectDetailPage } from "../../../components/ProjectDetailPage";
import { detailContent, locales, type Locale } from "../../../data/content";

type ProjectSlug = keyof typeof detailContent;

type PageProps = {
  params: Promise<{
    locale: Locale;
    slug: ProjectSlug;
  }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Object.keys(detailContent).map((slug) => ({
      locale,
      slug
    }))
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!locales.includes(locale) || !(slug in detailContent)) {
    notFound();
  }

  return <ProjectDetailPage locale={locale} slug={slug} />;
}
