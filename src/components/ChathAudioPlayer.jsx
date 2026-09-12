import React, { useState } from 'react';
import { RotateCcw, ExternalLink, Film } from 'lucide-react';
import { YOUTUBE_SHORT_ID, YOUTUBE_SHORT_URL } from '../data/quizData';

export const ChathAudioPlayer = ({ autoPlay = true }) => {
  const [key, setKey] = useState(0);

  const replay = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm mx-auto bg-slate-950 border-4 border-slate-900 rounded-3xl p-4 comic-shadow-lg mb-6 text-center relative overflow-hidden">
      {/* Top Banner */}
      <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Film className="w-4 h-4 text-red-500 animate-pulse" />
          <span className="text-xs font-black uppercase tracking-wider text-red-400">
            Iconic Scene Video
          </span>
        </div>
        <span className="text-[10px] bg-red-600 text-white font-bold px-2 py-0.5 rounded-full uppercase">
          Chath Chath Chath
        </span>
      </div>

      {/* Embedded YouTube Short Video Container */}
      <div className="relative w-full aspect-[9/14] sm:aspect-[9/15] rounded-2xl overflow-hidden border-2 border-slate-800 bg-black shadow-inner mb-3">
        <iframe
          key={key}
          className="w-full h-full object-cover"
          src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_SHORT_ID}?autoplay=1&playsinline=1&controls=1&loop=1&playlist=${YOUTUBE_SHORT_ID}&modestbranding=1&rel=0`}
          title="Chath Chath Chath - Lalettan & Mukesh Malayalam Comedy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* Video Controls & External link */}
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={replay}
          className="flex-1 py-2 px-3 bg-red-600 hover:bg-red-500 active:scale-95 text-white font-black text-xs sm:text-sm rounded-xl flex items-center justify-center gap-1.5 shadow transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Replay Video</span>
        </button>

        <a
          href="https://youtube.com/shorts/tAiF8yQlbzs?si=Y3jmNqQ8DM-D1FpE"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-3 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 text-xs font-bold rounded-xl flex items-center justify-center gap-1 border border-slate-700 transition-all cursor-pointer"
        >
          <ExternalLink className="w-4 h-4 text-amber-400" />
          <span>Watch on YouTube</span>
        </a>
      </div>
    </div>
  );
};
