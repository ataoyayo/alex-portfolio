import Link from "next/link";
import { languageLabel, type Locale } from "../data/content";

type LanguageSwitcherProps = {
  locale: Locale;
  path?: string;
};

export function LanguageSwitcher({ locale, path = "" }: LanguageSwitcherProps) {
  const otherLocale: Locale = locale === "en" ? "zh" : "en";
  const currentHref = `/${locale}${path}`;
  const otherHref = `/${otherLocale}${path}`;

  return (
    <div className="language-switcher" aria-label="Language switcher">
      <Link className="language-link is-active" href={currentHref}>
        {languageLabel[locale]}
      </Link>
      <span aria-hidden="true">/</span>
      <Link className="language-link" href={otherHref}>
        {languageLabel[otherLocale]}
      </Link>
    </div>
  );
}
