import Link from "next/link";
import { detailContent, projects, type Locale } from "../data/content";
import { assetPath } from "../lib/assetPath";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MediaPlaceholder } from "./MediaPlaceholder";

type ProjectDetailPageProps = {
  locale: Locale;
  slug: keyof typeof detailContent;
};

type DetailSection = (typeof detailContent)[keyof typeof detailContent]["sections"][Locale][number];

function ScreenshotFrame({
  title,
  src,
  alt,
  fit = "contain",
  emphasis
}: {
  title: string;
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  emphasis?: "large" | "compact";
}) {
  return (
    <figure className={`screenshot-frame${emphasis ? ` screenshot-frame--${emphasis}` : ""}`}>
      <figcaption>{title}</figcaption>
      <div className="screenshot-frame-inner">
        <img className={`screenshot-frame-image screenshot-frame-image--${fit}`} src={assetPath(src)} alt={alt} />
      </div>
    </figure>
  );
}

function VideoFrame({
  title,
  src
}: {
  title: string;
  src: string;
}) {
  return (
    <figure className="screenshot-frame video-frame">
      <figcaption>{title}</figcaption>
      <div className="screenshot-frame-inner video-frame-inner">
        <video className="workflow-demo-video" autoPlay muted loop playsInline controls={false} preload="metadata">
          <source src={assetPath(src)} type="video/mp4" />
        </video>
      </div>
    </figure>
  );
}

function JobMatchingShowcase({ locale }: { locale: Locale }) {
  return (
    <div className="job-matching-showcase">
      <VideoFrame
        title={locale === "en" ? "Demo" : "交互演示"}
        src="/media/job-matching-demo.mp4"
      />
      <div className="job-matching-screens">
        <ScreenshotFrame
          title={locale === "en" ? "Input Setup" : "输入配置"}
          src="/media/job-matching-input.png"
          alt={locale === "en" ? "Job matching input setup screenshot" : "工作经历匹配工具输入配置截图"}
          emphasis="compact"
        />
        <ScreenshotFrame
          title={locale === "en" ? "Matching Results" : "匹配结果"}
          src="/media/job-matching-results.png"
          alt={locale === "en" ? "Job matching results screenshot" : "工作经历匹配工具匹配结果截图"}
          emphasis="large"
        />
        <ScreenshotFrame
          title={locale === "en" ? "Tool Overview" : "工具概览"}
          src="/media/job-matching-overview.png"
          alt={locale === "en" ? "Job matching tool overview screenshot" : "工作经历匹配工具概览截图"}
          emphasis="compact"
        />
      </div>
    </div>
  );
}

function LumaShowcase({ locale }: { locale: Locale }) {
  return (
    <div className="luma-showcase">
      <ScreenshotFrame
        title={locale === "en" ? "Cover" : "封面"}
        src="/media/luma-cover.png"
        alt={locale === "en" ? "LUMA Coffee portfolio cover slide" : "LUMA Coffee 作品集封面页"}
        emphasis="large"
      />
      <div className="luma-screens">
        <ScreenshotFrame
          title={locale === "en" ? "Project Brief" : "项目简报"}
          src="/media/luma-brief.png"
          alt={locale === "en" ? "LUMA Coffee project brief slide" : "LUMA Coffee 项目简报页"}
          emphasis="compact"
        />
        <ScreenshotFrame
          title={locale === "en" ? "Campaign Idea" : "Campaign 创意"}
          src="/media/luma-campaign-idea.png"
          alt={locale === "en" ? "LUMA Coffee campaign idea slide" : "LUMA Coffee campaign 创意页"}
          emphasis="compact"
        />
        <ScreenshotFrame
          title={locale === "en" ? "Media & KOL" : "媒体与 KOL"}
          src="/media/luma-pr-materials.png"
          alt={locale === "en" ? "LUMA Coffee media and KOL slide" : "LUMA Coffee 媒体与 KOL 执行材料页"}
          emphasis="compact"
        />
      </div>
    </div>
  );
}

const medicalDietFeatures = {
  en: [
    "User-entered diet restriction setup",
    "Protein, carbohydrate and fat progress tracking",
    "Sodium, potassium, phosphorus, sugar, purine and water-intake reminders",
    "Ingredient selection by meat, vegetables and staples",
    "Shared-family-meal estimation",
    "Whole-dish recording with default ingredients",
    "Cooking oil estimation",
    "Before-adding nutrition preview",
    "Meal history archive for 7 / 14 / 30 days",
    "Local test data reset"
  ],
  zh: [
    "用户主动录入医嘱限制",
    "蛋白质、碳水、脂肪主进度",
    "钠、钾、磷、控糖、嘌呤、限水等条件提醒",
    "荤菜、素菜、主食分类选择",
    "家庭多人分食估算",
    "整道菜记录与默认配菜",
    "做菜用油估算",
    "加入前营养预计",
    "近 7 / 14 / 30 天历史归档",
    "清空本地测试数据"
  ]
} as const;

const medicalDietProof = {
  en: [
    "Product repositioning from a general diet tracker to a restriction-aware nutrition estimation demo",
    "Boundary awareness in a health-sensitive context",
    "Information architecture for layered reminders instead of overwhelming dashboards",
    "Family meal estimation logic for shared Chinese-style meals",
    "AI-assisted prototyping with ChatGPT and Codex",
    "Front-end implementation using HTML, CSS, JavaScript, localStorage and GitHub Pages"
  ],
  zh: [
    "将普通饮食记录工具重新定位为医嘱限制饮食记录与营养估算 Demo",
    "在健康敏感场景中明确产品边界，不默认诊断疾病",
    "采用“主进度 + 条件提醒”的分层信息架构，避免页面过载",
    "设计适合中国家庭多人分食的一盘菜估算逻辑",
    "通过 ChatGPT 与 Codex 完成多轮产品迭代和前端实现",
    "使用 HTML / CSS / JavaScript / localStorage / GitHub Pages 完成公开 Demo"
  ]
} as const;

const medicalDietBoundaries = {
  en: [
    "This is not a medical diagnosis tool.",
    "It does not provide medical prescriptions.",
    "Disease-related reminders only appear when users enter relevant medical advice."
  ],
  zh: [
    "这不是医疗诊断工具。",
    "它不提供医疗处方。",
    "疾病相关提醒只基于用户主动录入的医嘱文本出现。"
  ]
} as const;

function MedicalDietShowcase({ locale }: { locale: Locale }) {
  return (
    <div className="medical-diet-showcase">
      <p className="medical-diet-positioning">
        {locale === "en"
          ? "This project started as a lightweight diet tracking tool and later evolved into a medical diet restriction record and nutrition estimation demo. It does not diagnose disease or generate medical prescriptions. Instead, it helps users record meals, estimate protein, carbohydrate and fat intake, and view reminders based on diet restrictions they enter themselves."
          : "这个项目最初是一个普通饮食记录工具，后续逐步升级为医嘱限制饮食记录与营养估算 Demo。它不诊断疾病，也不生成医疗处方，而是基于用户主动录入的医嘱限制，帮助用户记录饮食、估算蛋白质/碳水/脂肪摄入，并查看相关饮食提醒。"}
      </p>

      <a className="demo-link-button" href="https://ataoyayo.github.io/medical-diet-record-demo/" target="_blank" rel="noopener noreferrer">
        {locale === "en" ? "View public demo ↗" : "查看公开 Demo ↗"}
      </a>

      <div className="medical-diet-media">
        <ScreenshotFrame
          title={locale === "en" ? "Main interface after diet restrictions and meals are recorded" : "已录入医嘱并完成饮食记录后的主界面"}
          src="/media/medical-diet-used-overview.png"
          alt={locale === "en" ? "Used medical diet record demo interface" : "医嘱限制饮食记录 Demo 已使用主界面"}
          fit="cover"
          emphasis="large"
        />
        <div className="medical-diet-screens">
          <ScreenshotFrame
            title={locale === "en" ? "Diet restriction setup and conditional reminder recognition" : "医嘱限制设置与条件提醒识别"}
            src="/media/medical-diet-restrictions.png"
            alt={locale === "en" ? "Diet restriction setup and reminder recognition" : "医嘱限制设置与条件提醒识别界面"}
            fit="cover"
            emphasis="compact"
          />
          <ScreenshotFrame
            title={locale === "en" ? "Whole-meal, shared-portion and cooking-oil estimation" : "整道菜、家庭分食与烹饪用油估算"}
            src="/media/medical-diet-meal-estimation.png"
            alt={locale === "en" ? "Whole meal and shared portion estimation" : "整道菜、家庭分食与用油估算界面"}
            fit="cover"
            emphasis="compact"
          />
          <ScreenshotFrame
            title={locale === "en" ? "Contribution of each meal to daily nutrition limits" : "单条饮食对当日营养上限的影响"}
            src="/media/medical-diet-record-impact.png"
            alt={locale === "en" ? "Meal contribution to daily nutrition limits" : "单条饮食对每日营养上限影响界面"}
            fit="cover"
            emphasis="compact"
          />
          <ScreenshotFrame
            title={locale === "en" ? "7 / 14 / 30-day meal history" : "近 7 / 14 / 30 天饮食记录归档"}
            src="/media/medical-diet-history.png"
            alt={locale === "en" ? "Seven, fourteen and thirty day meal history" : "近 7、14、30 天饮食历史归档界面"}
            fit="cover"
            emphasis="compact"
          />
        </div>
      </div>

      <div className="medical-diet-columns">
        <div>
          <h5>{locale === "en" ? "Core Features" : "核心功能"}</h5>
          <ul>
            {medicalDietFeatures[locale].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5>{locale === "en" ? "What This Shows" : "能力证明"}</h5>
          <ul>
            {medicalDietProof[locale].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="medical-diet-boundary">
        <h5>{locale === "en" ? "Product Boundaries" : "项目边界"}</h5>
        <ul>
          {medicalDietBoundaries[locale].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function renderSectionContent(section: DetailSection, locale: Locale, slug: keyof typeof detailContent) {
  const isAiWorkflow = slug === "ai-short-form-video-workflow";
  const isWorkflowDemo = section.title === "Workflow Demo" || section.title === "工作流演示";
  const isWorkflowLogic = section.title === "Workflow Logic" || section.title === "工作流逻辑";
  const isOutputExamples = section.title === "Output Examples" || section.title === "输出示例";
  const isTikiBoom = slug === "tiki-boom";
  const isTikiOverview = section.title === "Overview" || section.title === "项目概览";
  const isTikiStrategy = section.title === "Content Strategy" || section.title === "内容策略";
  const isTikiWorkflow = section.title === "Execution Workflow" || section.title === "执行流程";
  const isTikiResults = section.title === "Results & Takeaways" || section.title === "结果与复盘";
  const tikiMediaSuffix = locale === "zh" ? "-zh" : "";

  if (isAiWorkflow && isWorkflowDemo) {
    return (
      <VideoFrame
        title={locale === "en" ? "Workflow Demo" : "工作流演示"}
        src="/media/ai-workflow-demo.mp4"
      />
    );
  }

  if ("flow" in section) {
    return (
      <>
        <div className="flow-list">
          {section.flow.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {isAiWorkflow && isWorkflowLogic && (
          <ScreenshotFrame
            title={locale === "en" ? "Full Workflow Overview" : "完整工作流总览"}
            src="/media/ai-workflow-full-overview.png"
            alt={locale === "en" ? "Full workflow overview screenshot" : "完整工作流总览截图"}
          />
        )}
        {isTikiBoom && isTikiWorkflow && (
          <ScreenshotFrame
            title={locale === "en" ? "Execution Workflow" : "执行流程"}
            src={`/media/tiki-workflow${tikiMediaSuffix}.png`}
            alt={locale === "en" ? "TIKI BOOM execution workflow slide" : "TIKI BOOM 执行流程页"}
            emphasis="large"
          />
        )}
      </>
    );
  }

  if ("points" in section) {
    return (
      <ul className="detail-points">
        {section.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    );
  }

  if ("cards" in section) {
    return (
      <div className="demo-card-grid">
        {section.cards.map(([title, body]) => {
          const isMedicalDiet =
            slug === "codex-projects" &&
            (title === "Medical Diet Restriction Record Demo" || title === "医嘱限制饮食记录与营养估算 Demo");
          const isJobMatching =
            slug === "codex-projects" && (title === "Job Matching Tool" || title === "工作经历匹配工具");
          const isLuma = slug === "codex-projects" && title === "LUMA Coffee PR Materials";
          const isFeatured = isMedicalDiet || isJobMatching || isLuma;

          return (
          <article className={`demo-card${isFeatured ? " demo-card--featured" : ""}`} key={title}>
            <h4>{title}</h4>
            <p>{body}</p>
            {isMedicalDiet && <MedicalDietShowcase locale={locale} />}
            {isJobMatching && <JobMatchingShowcase locale={locale} />}
            {isLuma && <LumaShowcase locale={locale} />}
          </article>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <p>{section.body}</p>
      {isTikiBoom && isTikiOverview && (
        <>
          <ScreenshotFrame
            title={locale === "en" ? "Street Interview Hero" : "街访主图"}
            src="/media/tiki-cover-interview.jpg"
            alt={locale === "en" ? "TIKI BOOM street interview frame" : "TIKI BOOM 街访画面"}
            fit="cover"
            emphasis="compact"
          />
          <ScreenshotFrame
            title={locale === "en" ? "Project Overview" : "项目概览"}
            src={`/media/tiki-overview${tikiMediaSuffix}.png`}
            alt={locale === "en" ? "TIKI BOOM project overview slide" : "TIKI BOOM 项目概览页"}
            emphasis="large"
          />
        </>
      )}
      {isTikiBoom && isTikiStrategy && (
        <ScreenshotFrame
          title={locale === "en" ? "Content Challenge & Strategy" : "内容挑战与策略"}
          src={`/media/tiki-strategy${tikiMediaSuffix}.png`}
          alt={locale === "en" ? "TIKI BOOM content challenge and strategy slide" : "TIKI BOOM 内容挑战与策略页"}
          emphasis="large"
        />
      )}
      {isTikiBoom && isTikiResults && (
        <ScreenshotFrame
          title={locale === "en" ? "Results & Key Takeaways" : "结果与复盘"}
          src={`/media/tiki-results${tikiMediaSuffix}.png`}
          alt={locale === "en" ? "TIKI BOOM results and key takeaways slide" : "TIKI BOOM 结果与复盘页"}
          emphasis="large"
        />
      )}
      {isAiWorkflow && isOutputExamples && (
        <div className="screenshot-pair">
          <ScreenshotFrame
            title={locale === "en" ? "Prompt Design" : "提示词设计"}
            src="/media/ai-prompt-output.png"
            alt={locale === "en" ? "Prompt design output screenshot" : "提示词设计输出截图"}
          />
          <ScreenshotFrame
            title={locale === "en" ? "Image Output" : "图像生成输出"}
            src="/media/ai-image-output.png"
            alt={locale === "en" ? "Image output screenshot" : "图像生成输出截图"}
          />
        </div>
      )}
    </>
  );
}

export function ProjectDetailPage({ locale, slug }: ProjectDetailPageProps) {
  const project = projects.find((item) => item.slug === slug);
  const detail = detailContent[slug];

  if (!project || !detail) {
    return null;
  }

  return (
    <main className="site-shell detail-shell">
      <header className="topbar detail-topbar">
        <Link className="name-badge" href={`/${locale}`}>
          {locale === "en" ? "Alex" : "阿涛"}
        </Link>
        <Link className="back-link" href={`/${locale}`}>
          ← {locale === "en" ? "Back home" : "返回首页"}
        </Link>
        <LanguageSwitcher locale={locale} path={`/projects/${slug}`} />
      </header>

      <section className="detail-hero">
        <p className="project-meta">{project.meta[locale].join(" / ")}</p>
        <h1>{project.title[locale]}</h1>
        <p>{project.detailSubtitle[locale]}</p>
      </section>

      <section className="detail-layout">
        <aside className="project-info">
          <h2>{locale === "en" ? "Project Info" : "项目信息"}</h2>
          <dl>
            <div>
              <dt>{locale === "en" ? "Type" : "类型"}</dt>
              <dd>{project.meta[locale][0]}</dd>
            </div>
            <div>
              <dt>{locale === "en" ? "Year" : "年份"}</dt>
              <dd>{project.meta[locale][2]}</dd>
            </div>
            <div>
              <dt>{locale === "en" ? "Status" : "状态"}</dt>
              <dd>{locale === "en" ? "In active development" : "持续迭代中"}</dd>
            </div>
          </dl>
          <MediaPlaceholder
            label={project.previewType[locale]}
            variant="vertical"
            imageSrc={
              slug === "ai-short-form-video-workflow"
                ? "/media/ai-workflow-card.png"
                : slug === "codex-projects"
                  ? "/media/medical-diet-used-overview.png"
                  : "/media/tiki-cover-interview.jpg"
            }
            imageAlt={project.title[locale]}
            imageFit="cover"
          />
        </aside>

        <div className="detail-sections">
          {detail.sections[locale].map((section) => (
            <section className="detail-section" key={section.title}>
              <h2>{section.title}</h2>
              {renderSectionContent(section, locale, slug)}
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
