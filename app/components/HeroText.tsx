"use client";

import { useEffect, useMemo, useState } from "react";
import type { Locale } from "../data/content";

type HeroTextProps = {
  locale: Locale;
  hero: {
    title: string;
    titleLines: readonly string[];
    description: string;
    supporting: string;
    issue: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

const REVEAL_DISTANCE = 180;

function clamp(value: number) {
  return Math.min(Math.max(value, 0), 1);
}

export function HeroText({ locale, hero }: HeroTextProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setProgress(clamp(window.scrollY / REVEAL_DISTANCE));
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const opacity = useMemo(
    () => ({
      title: 1,
      subtitle: 0.98 + progress * 0.02,
      meta: 0.98 + progress * 0.02
    }),
    [progress]
  );

  return (
    <div className="hero-content reveal">
      <div className="hero-editorial-meta" style={{ opacity: opacity.meta }}>
        <span>{hero.issue}</span>
      </div>
      <h1 className={`hero-title hero-title--${locale}`} aria-label={hero.title} style={{ opacity: opacity.title }}>
        {hero.titleLines.map((line) => (
          <span className="hero-title-line" key={line}>
            {line}
          </span>
        ))}
      </h1>
      <p className="hero-description" style={{ opacity: opacity.subtitle }}>
        {hero.description}
      </p>
      <p className="hero-supporting" style={{ opacity: opacity.meta }}>
        {hero.supporting}
      </p>
      <div className="hero-actions" style={{ opacity: opacity.meta }}>
        <a className="hero-cta" href="#experience">{hero.primaryCta}</a>
        <a className="hero-cta hero-cta--secondary" href="#projects">{hero.secondaryCta}</a>
      </div>
    </div>
  );
}
