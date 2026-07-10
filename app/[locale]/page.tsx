import { notFound } from "next/navigation";
import { HomePage } from "../components/HomePage";
import { locales, type Locale } from "../data/content";

type PageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleHome({ params }: PageProps) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  return <HomePage locale={locale} />;
}
