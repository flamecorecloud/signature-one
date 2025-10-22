import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

export default function Screen() {
  return (
    <section className="container mx-auto">
      <div className="border rounded-3xl p-8 md:p-12">
        <div className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-3">
          About
        </div>

        <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-4">
          About This Application
        </h1>

        <p className="text-lg font-normal text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
          This application is part of the <span className="font-semibold text-blue-600 dark:text-blue-400">Flamecore Cloud</span> ecosystem — 
          designed to make your digital work easier, faster, and more productive.  
          We are constantly developing new integrations and features to enhance your experience.  
          Stay tuned for upcoming updates and improvements!
        </p>

        <div className="flex item-center gap-3">
          <a
            href="https://flamecore.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Visit Flamecore Website
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </a>
          <a
            href="https://andikachamberlin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Visit My Portfolio
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
