import React from 'react';

function BgWaveLayers() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950 z-1">
      {/* Waves */}
      <svg
        className="pointer-events-none absolute -z-10 bottom-0 left-0 w-[160%] sm:w-full"
        viewBox="0 0 1440 520"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0,160 C240,280 480,40 720,120 C960,200 1200,220 1440,120 L1440,520 L0,520 Z"
          className="fill-blue-100 dark:fill-gray-800"
        />
        <path
          d="M0,240 C240,360 480,120 720,200 C960,280 1200,300 1440,200 L1440,520 L0,520 Z"
          className="fill-indigo-100 dark:fill-gray-800/70"
        />
        <path
          d="M0,320 C240,440 480,200 720,280 C960,360 1200,380 1440,280 L1440,520 L0,520 Z"
          className="fill-teal-100 dark:fill-gray-800/50"
        />
      </svg>

    </div>
  );
}

export default BgWaveLayers;
