// DarkModeToggle.jsx
import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import useLocalStorage from "use-local-storage";

const UseDarkMode = () => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [darkMode, setDarkMode] = useLocalStorage("@themes", isDark);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        const mql = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (e) => setDarkMode(e.matches);

        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors"
        >
            {darkMode ? (
                <SunIcon className="w-6 h-6 text-yellow-400" />
            ) : (
                <MoonIcon className="w-6 h-6 text-gray-800" />
            )}
        </button>
    );
};

export default UseDarkMode;
