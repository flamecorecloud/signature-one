import React from 'react';

function BgGradientBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950 z-1">
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="blobA" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopOpacity="0.25" stopColor="#60A5FA" />
            <stop offset="100%" stopOpacity="0" stopColor="#60A5FA" />
          </radialGradient>
          <radialGradient id="blobB" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopOpacity="0.25" stopColor="#A78BFA" />
            <stop offset="100%" stopOpacity="0" stopColor="#A78BFA" />
          </radialGradient>
          <radialGradient id="blobC" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopOpacity="0.25" stopColor="#34D399" />
            <stop offset="100%" stopOpacity="0" stopColor="#34D399" />
          </radialGradient>
        </defs>

        {/* blobs */}
        <circle cx="250" cy="200" r="280" fill="url(#blobA)" />
        <circle cx="980" cy="180" r="260" fill="url(#blobB)" />
        <circle cx="800" cy="620" r="300" fill="url(#blobC)" />

        {/* soft vignette */}
        <rect width="1200" height="800" fill="url(#blobA)" opacity="0.15" />
      </svg>
    </div>
  );
}

export default BgGradientBlobs;
