import React from "react";

export default function SkeletonText() {
  return (
    <div className="w-[40px]">
      <div className="animate-pulse flex items-center gap-1">
        <div className="h-2 bg-gray-300 rounded w-1/2"></div>
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-2 bg-gray-300 rounded w-5/6"></div>
        <div className="h-3 bg-gray-300 rounded w-2/3"></div>
      </div>
    </div>
  );
}
