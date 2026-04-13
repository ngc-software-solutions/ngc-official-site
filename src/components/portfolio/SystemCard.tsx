import type { SystemProject } from "@components/portfolio/types";
import { statusStyles } from "@components/portfolio/statusStyles";
import VideoPlaceholder from "@components/portfolio/VideoPlaceholder";

interface SystemCardProps {
  project: SystemProject;
  badge: string;
}

export default function SystemCard({ project, badge }: SystemCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl border border-border bg-surface/30 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-accent/40">
      <VideoPlaceholder videoUrl={project.videoUrl} />
      <div className="flex flex-col gap-4 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-border bg-surface/60 px-2.5 py-0.5 text-xs text-muted">
            {badge}
          </span>
          <span
            className={`rounded-full border px-2.5 py-0.5 text-xs ${statusStyles[project.status]}`}
          >
            {project.status}
          </span>
        </div>

        <div>
          <h3 className="mb-1.5 font-semibold text-text leading-snug">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="border-t border-border pt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-surface/60 px-2 py-0.5 text-xs text-muted/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
