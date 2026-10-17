import Link from "next/link";
import type { CSSProperties } from "react";
import { experiences, featuredCaseStudy, homeContent, projects, skillGroups, type Locale } from "../data/content";
import { assetPath } from "../lib/assetPath";
import { HeroText } from "./HeroText";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MediaPlaceholder } from "./MediaPlaceholder";

type HomePageProps = { locale: Locale };

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
          <Link className="name-badge" href={`/${locale}`}>{content.badge}</Link>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#experience">{content.nav.experience}</a>
            <a href="#case-study">{content.nav.caseStudy}</a>
            <a href="#projects">{content.nav.projects}</a>
            <a href="#skills">{content.nav.skills}</a>
            <a href="#about">{content.nav.about}</a>
            <a href="#contact">{content.nav.contact}</a>
          </nav>
          <LanguageSwitcher locale={locale} />
        </header>
        <HeroText locale={locale} hero={content.hero} />
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">01</p>
          <h2>{content.experienceTitle}</h2>
          <p>{content.experienceSubtitle}</p>
        </div>
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item" key={experience.company.en}>
              <div className="timeline-company">
                <div className="logo-placeholder">
                  {"logoSrc" in experience ? <img src={assetPath(experience.logoSrc)} alt={`${experience.company[locale]} logo`} /> : <span>{experience.logo}</span>}
                </div>
                <div><h3>{experience.company[locale]}</h3><p>{experience.time[locale]}</p></div>
              </div>
              <div className="timeline-node" aria-hidden="true" />
              <div className="timeline-content">
                <h4>{experience.role[locale]}</h4>
                <ul>
                  {experience.bullets[locale].map((bullet) => (
                    <li key={bullet.text}>
                      {bullet.emphasis ? <>{bullet.text.slice(0, bullet.text.indexOf(bullet.emphasis))}<strong>{bullet.emphasis}</strong>{bullet.text.slice(bullet.text.indexOf(bullet.emphasis) + bullet.emphasis.length)}</> : bullet.text}
                    </li>
                  ))}
                </ul>
                {"caseStudySlug" in experience && (
                  <Link className="experience-case-link" href={`/${locale}/projects/${experience.caseStudySlug}`}>
                    <span>{locale === "en" ? "Featured Case Study" : "重点案例"}</span>
                    <strong>{featuredCaseStudy.title[locale]}</strong>
                    <em>{featuredCaseStudy.cta[locale]}</em>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section featured-case-section" id="case-study">
        <div className="section-heading">
          <p className="eyebrow">02</p>
          <h2>{content.caseStudyTitle}</h2>
          <p>{content.caseStudySubtitle}</p>
        </div>
        <Link className="featured-case-card" href={`/${locale}/projects/${featuredCaseStudy.slug}`}>
          <div className="featured-case-copy">
            <p className="project-meta">{featuredCaseStudy.meta[locale].join(" / ")}</p>
            <h3>{featuredCaseStudy.title[locale]}</h3>
            <p className="featured-case-subtitle">{featuredCaseStudy.subtitle[locale]}</p>
            <p>{featuredCaseStudy.label[locale]}</p>
            <strong>{featuredCaseStudy.finding[locale]}</strong>
            <span>{featuredCaseStudy.cta[locale]}</span>
          </div>
          <div className="commercial-loop" aria-label={locale === "en" ? "Trigger, Amplifier, Validation" : "触发、放大、验证"}>
            {(locale === "en" ? ["Trigger", "Amplifier", "Validation"] : ["触发", "放大", "验证"]).map((item, index) => (
              <div key={item}><small>0{index + 1}</small><b>{item}</b></div>
            ))}
          </div>
        </Link>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">03</p>
          <h2>{content.projectsTitle}</h2>
          <p>{content.projectsSubtitle}</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <Link className={`project-card project-card--${project.size}`} href={`/${locale}/projects/${project.slug}`} key={project.slug}>
              <MediaPlaceholder label={project.previewType[locale]} variant={placeholderVariantBySlug[project.slug]} imageFit="cover" locale={locale} />
              <div className="project-card-content">
                <div><p className="project-meta">{("homeMeta" in project ? project.homeMeta[locale] : project.meta[locale]).join(" / ")}</p><h3>{project.title[locale]}</h3></div>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </div>
              <p>{project.summary[locale]}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">04</p>
          <h2>{content.skillsTitle}</h2>
          <p>{content.skillsSubtitle}</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title.en}>
              <span>0{index + 1}</span><h3>{group.title[locale]}</h3>
              <ul>{group.items[locale].map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <p className="eyebrow">05</p>
        <div><h2>{content.aboutTitle}</h2><p>{content.aboutBody}</p></div>
      </section>

      <footer className="footer" id="contact">
        <div>
          <p className="footer-name">{content.footer.name}</p>
          <p>{content.footer.line}</p>
          <div className="footer-links">
            <a href="mailto:tao_a@outlook.com">{content.footer.email}</a>
            <a href="https://www.linkedin.com/in/tao-a-891407408" target="_blank" rel="noopener noreferrer">{content.footer.linkedin}</a>
            <a href="https://github.com/ataoyayo" target="_blank" rel="noopener noreferrer">{content.footer.github}</a>
          </div>
        </div>
        <div className="footer-mark"><span>{content.footer.closing}</span><i aria-hidden="true" /></div>
      </footer>
    </main>
  );
}
