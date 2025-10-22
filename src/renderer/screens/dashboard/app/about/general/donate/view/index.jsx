import React, { useState } from "react";
import { HeartIcon, BanknotesIcon, ClipboardDocumentIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export default function Screen() {
  const [copied, setCopied] = useState(false);
  const bankNumber = "https://www.patreon.com/cw/andikachamberlin";

  const handleCopy = () => {
    navigator.clipboard.writeText(bankNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col">
      <div className="max-w-xl w-full rounded-3xl p-8 text-center border">
        <div className="flex justify-center mb-4">
          <HeartIcon className="w-12 h-12 text-pink-500 animate-pulse" />
        </div>

        <h1 className="text-2xl font-bold mb-2">
          Support My Project ❤️
        </h1>
        <p className="text-gray-500 mb-6 max-w-sm mx-auto">
          Your support helps me continue building and maintaining this project.
        </p>

        <div className="border rounded-2xl p-6 mb-6 text-center">
          <div className="flex justify-center mb-3">
            <BanknotesIcon className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-lg font-semibold mb-1">
            Donate
          </h2>
          {/* <p className="text-gray-500 text-sm mb-3">Bank Account Number:</p> */}

          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="font-mono text-sm font-bold">
              {bankNumber}
            </span>
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg border transition cursor-pointer"
            >
              {copied ? (
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
              ) : (
                <ClipboardDocumentIcon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          <p className="text-sm text-gray-500">
            Please confirm your donation after transfer.
          </p>
        </div>

        <div className="text-sm text-gray-400">
          Every contribution means a lot.  
          <br />Thank you for your kindness 💖
        </div>
      </div>
    </div>
  );
}
