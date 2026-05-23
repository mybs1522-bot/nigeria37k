import React, { useState, useEffect } from 'react';

const REVIEWS = [
  { text: "Must buy for every designer!", author: "Sarah T." },
  { text: "Got my first job after this.", author: "Michael B." },
  { text: "The 3D assets alone are worth it.", author: "Elena R." }
];

export const ReviewTicker = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 flex justify-center items-center w-full overflow-hidden h-6">
      <div 
        key={index} 
        className="text-[9px] min-[360px]:text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-100/80 px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm border border-slate-200/50 animate-[pulse_3s_ease-in-out_infinite]"
      >
        <div className="flex gap-0.5 text-amber-500 mr-1">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </div>
        <span className="text-slate-700 animate-[fadeIn_0.5s_ease-out]">"{REVIEWS[index].text}"</span>
        <span className="text-slate-400 font-medium ml-1 animate-[fadeIn_0.5s_ease-out]"> - {REVIEWS[index].author}</span>
      </div>
    </div>
  );
};
