import React from 'react';

function BgMeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-900 z-0">
      {/* Mesh gradient */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="80" />
          </filter>
        </defs>

        <g filter="url(#blur)" opacity="0.9">
          <circle cx="20%" cy="30%" r="18%" fill="#60A5FA" />
          <circle cx="45%" cy="20%" r="15%" fill="#F472B6" />
          <circle cx="80%" cy="40%" r="20%" fill="#34D399" />
          <circle cx="65%" cy="70%" r="17%" fill="#A78BFA" />
        </g>

        {/* overlay untuk dark/light balance */}
        <rect width="100%" height="100%" className="fill-white/93 dark:fill-gray-900/93" />
      </svg>
    </div>

  );
}

export default BgMeshGradient;
