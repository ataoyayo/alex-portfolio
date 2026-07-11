"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { Locale } from "../data/content";
import { assetPath } from "../lib/assetPath";

type LightboxItem = {
  id: string;
  group: string;
  order: number;
  src: string;
  alt: string;
  title: string;
};

type LightboxContextValue = {
  register: (item: LightboxItem) => () => void;
  open: (id: string, group: string, trigger: HTMLButtonElement) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function ImageLightboxProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const [items, setItems] = useState<LightboxItem[]>([]);
  const [active, setActive] = useState<{ id: string; group: string } | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const register = useCallback((item: LightboxItem) => {
    setItems((current) => (current.some((entry) => entry.id === item.id) ? current : [...current, item]));
    return () => setItems((current) => current.filter((entry) => entry.id !== item.id));
  }, []);

  const open = useCallback((id: string, group: string, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActive({ id, group });
  }, []);
  const contextValue = useMemo(() => ({ register, open }), [open, register]);

  const groupItems = useMemo(
    () => items.filter((item) => item.group === active?.group).sort((a, b) => a.order - b.order),
    [active?.group, items]
  );
  const activeIndex = active ? groupItems.findIndex((item) => item.id === active.id) : -1;
  const activeItem = activeIndex >= 0 ? groupItems[activeIndex] : null;

  const close = useCallback(() => {
    setActive(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const move = useCallback(
    (direction: -1 | 1) => {
      if (!activeItem || groupItems.length < 2) return;
      const nextIndex = (activeIndex + direction + groupItems.length) % groupItems.length;
      setActive({ id: groupItems[nextIndex].id, group: groupItems[nextIndex].group });
    },
    [activeIndex, activeItem, groupItems]
  );

  useEffect(() => {
    if (!activeItem) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeItem, close, move]);

  return (
    <LightboxContext.Provider value={contextValue}>
      {children}
      {activeItem && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <button className="lightbox-close" type="button" onClick={close} ref={closeButtonRef} aria-label={locale === "en" ? "Close" : "关闭"}>
            <span aria-hidden="true">×</span>
          </button>
          <div className="lightbox-stage">
            <img src={assetPath(activeItem.src)} alt={activeItem.alt} />
            <div className="lightbox-caption">
              <span>{activeItem.title}</span>
              <span>{activeIndex + 1} / {groupItems.length}</span>
            </div>
          </div>
          {groupItems.length > 1 && (
            <>
              <button className="lightbox-nav lightbox-nav--previous" type="button" onClick={() => move(-1)} aria-label={locale === "en" ? "Previous" : "上一张"}>
                <span aria-hidden="true">‹</span>
              </button>
              <button className="lightbox-nav lightbox-nav--next" type="button" onClick={() => move(1)} aria-label={locale === "en" ? "Next" : "下一张"}>
                <span aria-hidden="true">›</span>
              </button>
            </>
          )}
        </div>
      )}
    </LightboxContext.Provider>
  );
}

export function LightboxImage({
  locale,
  group,
  order,
  src,
  alt,
  title,
  className
}: {
  locale: Locale;
  group: string;
  order: number;
  src: string;
  alt: string;
  title: string;
  className: string;
}) {
  const context = useContext(LightboxContext);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const id = `${group}:${order}:${src}`;

  useEffect(() => context?.register({ id, group, order, src, alt, title }), [alt, context, group, id, order, src, title]);

  return (
    <button
      className="lightbox-trigger"
      type="button"
      ref={buttonRef}
      onClick={() => buttonRef.current && context?.open(id, group, buttonRef.current)}
      aria-label={`${locale === "en" ? "View larger" : "查看大图"}: ${title}`}
    >
      <img className={className} src={assetPath(src)} alt={alt} />
      <span className="lightbox-trigger-label">{locale === "en" ? "View larger" : "查看大图"}</span>
    </button>
  );
}
