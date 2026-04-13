import type { WebPage } from "@components/portfolio/types";
import { statusStyles } from "@components/portfolio/statusStyles";
import VideoPlaceholder from "@components/portfolio/VideoPlaceholder";

export default function PageCard({ page }: { page: WebPage }) {
  return (
    <div className="group flex flex-col rounded-xl border border-border bg-surface/30 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-accent/40">
      <VideoPlaceholder videoUrl={page.videoUrl} />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-sm font-semibold text-text leading-snug">
            {page.title}
          </h4>
          <span
            className={`shrink-0 rounded-full border px-2 py-0.5 text-xs ${statusStyles[page.status]}`}
          >
            {page.status}
          </span>
        </div>
        <p className="text-xs leading-relaxed text-muted line-clamp-2">
          {page.description}
        </p>
      </div>
    </div>
  );
}
