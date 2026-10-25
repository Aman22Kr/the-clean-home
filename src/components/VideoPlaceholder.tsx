import React from 'react';
import { Play, Video } from 'lucide-react';

interface VideoPlaceholderProps {
  title?: string;
  duration?: string;
  aspectRatio?: '16:9' | '4:3' | '21:9';
  className?: string;
}

export const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({
  title = 'Watch Our 7-Stage AC Decontamination Protocol in Action',
  duration = '02:45',
  aspectRatio = '16:9',
  className = ''
}) => {
  const aspectClass =
    aspectRatio === '16:9'
      ? 'aspect-video'
      : aspectRatio === '4:3'
      ? 'aspect-4/3'
      : 'aspect-[21/9]';

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-[#072B2B] to-slate-950 border border-teal-900/40 shadow-xl ${aspectClass} ${className} flex items-center justify-center group`}
      role="region"
      aria-label={title}
    >
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #2dd4bf 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Blank Video Placeholder Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-400/30 flex items-center justify-center text-teal-300 mb-4 shadow-lg group-hover:scale-105 group-hover:bg-teal-500/20 transition-all duration-300">
          <Play className="w-7 h-7 fill-teal-300 ml-1" />
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1.5">
          <Video className="w-3.5 h-3.5" />
          <span>Demonstration Video Showcase</span>
          <span className="text-slate-500">·</span>
          <span className="text-slate-400">{duration}</span>
        </div>

        <h4 className="text-base sm:text-lg font-medium text-white line-clamp-2">
          {title}
        </h4>

        <div className="mt-4 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] text-slate-400">
          Video demonstration placeholder · Production equipment overview
        </div>
      </div>

      {/* Subtle Bottom Scrim */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </div>
  );
};
