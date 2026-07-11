"use client";

import { useState } from "react";
import type { Locale } from "../data/content";
import { LightboxImage } from "./ImageLightbox";

const prototypeItems = [
  {
    number: "01",
    name: { en: "Job Matching Tool", zh: "求职经历匹配工具" },
    type: "WEB APP",
    status: "FUNCTIONAL DEMO",
    image: "/media/job-matching-overview.png"
  },
  {
    number: "02",
    name: { en: "Medical Diet Restriction Record Demo", zh: "医嘱限制饮食记录与营养估算 Demo" },
    type: "HEALTH TECH",
    status: "PUBLIC BETA",
    image: "/media/medical-diet-used-overview.png"
  },
  {
    number: "03",
    name: { en: "LUMA Coffee PR Materials", zh: "LUMA Coffee PR 材料" },
    type: "PR MATERIALS",
    status: "CASE STUDY",
    image: "/media/luma-cover.png"
  },
  {
    number: "04",
    name: { en: "Portfolio Website", zh: "个人作品集网站" },
    type: "PERSONAL SITE",
    status: "LIVE",
    image: "/media/portfolio-homepage-preview.png"
  }
] as const;

export function PrototypeLibrary({ locale }: { locale: Locale }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = prototypeItems[activeIndex];

  return (
    <section className="prototype-library" aria-labelledby="prototype-library-title">
      <p className="detail-kicker">GPT–CODEX / 04</p>
      <h2 id="prototype-library-title">{locale === "en" ? "Prototype Library" : "原型项目库"}</h2>
      <p>{locale === "en" ? "A growing collection of lightweight projects built through GPT–Codex collaboration." : "通过 GPT 与 Codex 协作持续搭建的轻量项目集合。"}</p>
      <div className="prototype-library-list" role="list">
        {prototypeItems.map((item, index) => (
          <button
            className={`prototype-library-item${activeIndex === index ? " is-active" : ""}`}
            type="button"
            role="listitem"
            key={item.number}
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            aria-pressed={activeIndex === index}
          >
            <span>{item.number}</span>
            <strong>{item.name[locale]}</strong>
            <small>{item.type} · {item.status}</small>
          </button>
        ))}
      </div>
      <div className="prototype-library-preview" key={activeItem.image}>
        <LightboxImage
          locale={locale}
          group="codex-prototype-library"
          order={activeIndex}
          src={activeItem.image}
          alt={activeItem.name[locale]}
          title={activeItem.name[locale]}
          className="prototype-library-preview-image"
        />
      </div>
    </section>
  );
}
