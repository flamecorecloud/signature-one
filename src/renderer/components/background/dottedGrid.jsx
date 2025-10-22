import React from 'react';

function BgDottedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      {/* Dotted grid */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          {/* pola titik */}
          <pattern id="dotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className="fill-gray-200 dark:fill-gray-800" />
          </pattern>
          {/* gradient sudut */}
          <linearGradient id="softGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#dotGrid)" />
        <rect width="100%" height="100%" fill="url(#softGrad)" />
      </svg>
    </div>

  );
}

export default BgDottedGrid;
