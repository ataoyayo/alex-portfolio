import Link from "next/link";
import type { CSSProperties } from "react";
import { experiences, homeContent, projects, type Locale, whatIDid } from "../data/content";
import { assetPath } from "../lib/assetPath";
import { HeroText } from "./HeroText";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MediaPlaceholder } from "./MediaPlaceholder";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const content = homeContent[locale];
  const placeholderVariantBySlug = {
    "ai-short-form-video-workflow": "workflow",
    "codex-projects": "codex",
    "tiki-boom": "tiki"
  } as const;

  return (
    <main className="site-shell">
      <section
        className={`hero-section hero-section--${locale}`}
        style={{ "--hero-portrait-url": `url("${assetPath("/images/alex-portrait.jpg")}")` } as CSSProperties}
      >
        <div className="hero-portrait" aria-hidden="true" />
        <header className="topbar">
          <Link className="name-badge" href={`/${locale}`}>
            {content.badge}
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#projects">{content.nav.projects}</a>
            <a href="#experience">{content.nav.experience}</a>
            <a href="#contact">{content.nav.contact}</a>
          </nav>
          <LanguageSwitcher locale={locale} />
        </header>

        <HeroText locale={locale} hero={content.hero} />
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">01</p>
          <h2>{content.projectsTitle}</h2>
          <p>{content.projectsSubtitle}</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <Link className={`project-card project-card--${project.size}`} href={`/${locale}/projects/${project.slug}`} key={project.slug}>
              <MediaPlaceholder
                label={project.previewType[locale]}
                variant={placeholderVariantBySlug[project.slug]}
                imageFit="cover"
                locale={locale}
              />
              <div className="project-card-content">
                <div>
                  <p className="project-meta">
                    {("homeMeta" in project ? project.homeMeta[locale] : project.meta[locale]).join(" / ")}
                  </p>
                  <h3>{project.title[locale]}</h3>
                </div>
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <p>{project.summary[locale]}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="proof-strip" aria-label={content.proofTitle}>
        {content.proofItems.map((item, index) => (
          <span className="proof-pill" key={item}>
            <strong>{String(index + 1).padStart(2, "0")}</strong>
            {item}
          </span>
        ))}
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">02</p>
          <h2>{content.experienceTitle}</h2>
        </div>
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item" key={experience.company.en}>
              <div className="timeline-company">
                <div className="logo-placeholder">
                  <img src={assetPath(experience.logoSrc)} alt={`${experience.company[locale]} logo`} />
                </div>
                <div>
                  <h3>{experience.company[locale]}</h3>
                  <p>{experience.time[locale]}</p>
                </div>
              </div>
              <div className="timeline-node" aria-hidden="true" />
              <div className="timeline-content">
                <h4>{experience.role[locale]}</h4>
                <ul>
                  {experience.bullets[locale].map((bullet) => (
                    <li key={bullet.text}>
                      {bullet.emphasis ? (
                        <>
                          {bullet.text.slice(0, bullet.text.indexOf(bullet.emphasis))}
                          <strong>{bullet.emphasis}</strong>
                          {bullet.text.slice(bullet.text.indexOf(bullet.emphasis) + bullet.emphasis.length)}
                        </>
                      ) : (
                        bullet.text
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section what-section">
        <div className="section-heading compact">
          <p className="eyebrow">03</p>
          <h2>{content.whatTitle}</h2>
        </div>
        <div className="achievement-list">
          {whatIDid.map((item) => (
            // TODO: Replace placeholder hrefs with final project, case study, or demo links.
            <a className="achievement-row" href="#" key={item.name.en}>
              <span className="achievement-icon" aria-hidden="true">
                ◆
              </span>
              <span className="achievement-name">{item.name[locale]}</span>
              <span className="achievement-type">{item.type[locale]}</span>
              <span className="achievement-year">{item.year}</span>
              <span className="achievement-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer" id="contact">
        <div>
          <p className="footer-name">{content.footer.name}</p>
          <p>{content.footer.line}</p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/tao-a-891407408" target="_blank" rel="noopener noreferrer">
              {content.footer.linkedin}
            </a>
            <a href="mailto:tao_a@outlook.com">{content.footer.email}</a>
          </div>
        </div>
        <div className="footer-mark">
          <span>{content.footer.closing}</span>
          <i aria-hidden="true" />
        </div>
      </footer>
    </main>
  );
}
