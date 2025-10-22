import React, { useState } from "react";
import { PathRoute } from "./list";
import { useRoute } from "../../../../hooks/useRouteProvider";

export default function PathUsers() {

    const { routes, path, setPath } = useRoute();

    const [query, setQuery] = useState("");

    const filteredRoutes = PathRoute.map(section => ({
        ...section,
        items: section.items.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        ),
    })).filter(section => section.items.length > 0);

    return (
        <>

            <div className="relative mb-4">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                        className="w-5 h-5 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M21 21L15 15M17 10C17 13.866 
              13.866 17 10 17C6.13401 17 3 
              13.866 3 10C3 6.13401 6.13401 
              3 10 3C13.866 3 17 6.13401 
              17 10Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md 
            dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 
            focus:border-blue-400 dark:focus:border-blue-300 
            focus:ring-blue-300 focus:ring-opacity-40 
            focus:outline-none focus:ring"
                    placeholder="Search"
                />
            </div>

            <nav className="mt-4 -mx-3 space-y-6">
                {filteredRoutes.length > 0 ? (
                    filteredRoutes.map((section, i) => (
                        <div key={i}>
                            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                                {section.label}
                            </label>

                            {section.items.map((item, j) => (
                                <a
                                    key={j}
                                    onClick={() => setPath(routes + "/" + item.path)}
                                    className={`cursor-pointer flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg my-1.5
                    ${path === routes + "/" + item.path
                                            ? "bg-blue-100 dark:bg-gray-800 text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-gray-800"
                                            : "text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                                        }`}
                                >
                                    {item.icon}
                                    <span
                                        className={`mx-2 text-sm font-medium ${path === routes + "/" + item.path &&
                                            "text-blue-500 dark:text-blue-400"
                                            }`}
                                    >
                                        {item.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    ))
                ) : (
                    <p className="px-3 text-gray-500">No results found</p>
                )}
            </nav>
        </>
    );
}
