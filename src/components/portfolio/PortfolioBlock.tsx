import type { PortfolioBlock as PortfolioBlockType } from "@components/portfolio/types";
import SystemsCarousel from "@components/portfolio/SystemsCarousel";
import PageCard from "@components/portfolio/PageCard";
import SectionLabel from "@components/portfolio/SectionLabel";

export default function PortfolioBlock({
  block,
}: {
  block: PortfolioBlockType;
}) {
  return (
    <div>
      <div className="mb-12">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          {block.badge}
        </span>
        <h3 className="font-display mb-3 text-2xl font-bold text-text md:text-3xl">
          {block.title}
        </h3>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          {block.description}
        </p>
      </div>

      {block.systems.length > 0 && (
        <div className="mb-12">
          <SectionLabel label="Sistemas" />
          <SystemsCarousel systems={block.systems} badge={block.badge} />
        </div>
      )}

      {block.pages.length > 0 && (
        <div>
          <SectionLabel label="Páginas Web" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {block.pages.map((page) => (
              <PageCard key={page.title} page={page} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
