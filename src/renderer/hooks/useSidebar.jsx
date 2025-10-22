import { useState } from "react";
import useLocalStorage from "use-local-storage";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function useSidebar(initialValue = false) {
    const [sidebarOpen, setSidebarOpen] = useLocalStorage("@sidebar", initialValue);

    const toggleSidebar = () => setSidebarOpen(prev => !prev);

    const ToggleSidebarButton = () => {
        return (
            <button
                onClick={() => toggleSidebar()}
                className="lg:hidden block cursor-pointer p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors"
            >
                <Bars3Icon className="w-6 h-6 text-gray-800 dark:text-yellow-400" />
            </button>
        )
    }

    const SidebarOverlay = () => {
        return sidebarOpen && (
            <div
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 bg-gray-50/60 dark:bg-gray-900/60 backdrop-blur-sm lg:hidden z-20"
            />
        );
    };

    return { sidebarOpen, setSidebarOpen, ToggleSidebarButton, SidebarOverlay };
}
