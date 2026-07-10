import { assetPath } from "../lib/assetPath";

type MediaPlaceholderProps = {
  label: string;
  variant?: "workflow" | "codex" | "tiki" | "vertical";
  imageSrc?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
};

export function MediaPlaceholder({ label, variant = "workflow", imageSrc, imageAlt, imageFit = "cover" }: MediaPlaceholderProps) {
  return (
    <div className={`media-placeholder media-placeholder--${variant}`}>
      {imageSrc ? (
        <img className={`media-placeholder-image media-placeholder-image--${imageFit}`} src={assetPath(imageSrc)} alt={imageAlt ?? label} />
      ) : variant === "codex" ? (
        null
      ) : (
        <div className="placeholder-grid" aria-hidden="true" />
      )}
      {!imageSrc && variant === "workflow" && (
        <div className="workflow-mockup" aria-hidden="true">
          <div className="workflow-flowline" />
          <div className="workflow-runner" />
          <div className="workflow-step workflow-step--alex">
            <strong>Alex</strong>
            <span />
          </div>
          <div className="workflow-step workflow-step--gpt">
            <strong>GPT</strong>
            <span />
          </div>
          <div className="workflow-step workflow-step--coze">
            <strong>Coze</strong>
            <span />
          </div>
        </div>
      )}
      {!imageSrc && variant === "codex" && (
        <div className="collaboration-loop" aria-hidden="true">
          <div className="collaboration-texture" />
          <div className="collaboration-glow" />
          <div className="collaboration-side-note collaboration-side-note--input">
            <span>idea</span>
            <span>context</span>
            <span>decision</span>
          </div>
          <div className="collaboration-side-note collaboration-side-note--output">
            <span>instruction</span>
            <span>prototype</span>
            <span>review</span>
          </div>
          <svg className="collaboration-triangle" viewBox="0 0 240 170" role="presentation" focusable="false">
            <path d="M120 22 L204 138 L36 138 Z" />
          </svg>
          <div className="collaboration-tags">
            <span className="collaboration-tag collaboration-tag--discuss">Discuss</span>
            <span className="collaboration-tag collaboration-tag--instruct">Instruct</span>
            <span className="collaboration-tag collaboration-tag--review">Review</span>
          </div>
          <svg className="collaboration-orbit" viewBox="0 0 240 170" role="presentation" focusable="false">
            <circle r="5" fill="currentColor">
              <animateMotion dur="5.2s" repeatCount="indefinite" path="M120 22 L204 138 L36 138 Z" />
            </circle>
          </svg>
          <span className="collaboration-node collaboration-node--alex">Alex</span>
          <span className="collaboration-node collaboration-node--gpt">GPT</span>
          <span className="collaboration-node collaboration-node--codex">Codex</span>
        </div>
      )}
      {!imageSrc && variant === "tiki" && (
        <div className="tiki-collage" aria-hidden="true">
          <div className="tiki-collage-texture" />
          <div className="tiki-collage-photo">
            <img src={assetPath("/media/tiki-cover-interview.jpg")} alt="" />
          </div>
          <div className="tiki-collage-slide tiki-collage-slide--overview">
            <img src={assetPath("/media/tiki-overview.png")} alt="" />
          </div>
          <div className="tiki-collage-slide tiki-collage-slide--results">
            <img src={assetPath("/media/tiki-results.png")} alt="" />
          </div>
          <div className="tiki-collage-tags">
            <span>200+ videos</span>
            <span>170K+ views</span>
            <span>Street Interview</span>
          </div>
        </div>
      )}
      {!imageSrc && variant !== "codex" && (
        <div className="placeholder-label">{variant === "workflow" ? "IDEA → PROMPT → WORKFLOW" : label}</div>
      )}
    </div>
  );
}
