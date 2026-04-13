"use client";

import { useState } from "react";
import { PlayIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import VideoModal from "@components/portfolio/VideoModal";

interface VideoPlaceholderProps {
  videoUrl?: string;
}

export default function VideoPlaceholder({ videoUrl }: VideoPlaceholderProps) {
  const [modalOpen, setModalOpen] = useState(false);

  if (videoUrl) {
    return (
      <>
        <div className="relative aspect-video w-full overflow-hidden bg-black group/thumb">
          <iframe
            src={videoUrl}
            title="Demo del proyecto"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
          <div
            className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center"
            onClick={() => setModalOpen(true)}
          >
            <div className="opacity-0 group-hover/thumb:opacity-100 transition-all duration-200 scale-90 group-hover/thumb:scale-100 flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-sm px-4 py-2 text-white text-sm border border-white/20 shadow-lg">
              <ArrowsPointingOutIcon className="size-4" />
              <span>Ver en grande</span>
            </div>
          </div>
        </div>

        <VideoModal
          videoUrl={videoUrl}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-surface/60 flex items-center justify-center group/video h-full">
      <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-transparent" />
      <div className="flex flex-col items-center gap-2 text-muted/50 group-hover/video:text-muted transition-colors duration-300">
        <div className="flex size-12 items-center justify-center rounded-full border border-border bg-surface/80">
          <PlayIcon className="size-5 translate-x-0.5" />
        </div>
        <span className="text-xs">Video próximamente</span>
      </div>
    </div>
  );
}
