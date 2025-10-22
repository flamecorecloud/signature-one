import React, { Suspense } from "react";
import useSidebar from "../../../hooks/useSidebar";
import { MainRoute } from "./routes";
import { useRoute } from "../../../hooks/useRouteProvider";
import { PathRoutes, PathComponents } from "./config";
import SkeletonText from "../../../components/skeleton/text";
import ComingSoon from "../../../components/error/comingsoon";
import NavDash from "../../../components/navbar/dash";

export default function Screen({ user, role }) {
    const { routes, setRoutes, path } = useRoute();
    const { sidebarOpen, SidebarOverlay } = useSidebar();

    const PathRoute = PathRoutes[routes];
    const PathComponent = PathComponents[path];

    return (
        <div className="bg-white dark:bg-gray-900">
            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-30 w-xs bg-gray-50 dark:bg-gray-900 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}>
                <aside className="flex">
                    <div className="flex flex-col items-center w-16 h-screen py-8 bg-white dark:bg-gray-900">
                        <nav className="flex flex-col items-center flex-1 space-y-8">
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
                                </svg>
                            </a>
                            {MainRoute.map(route => (
                                <a
                                    key={route.key}
                                    className={`relative group cursor-pointer p-1.5 inline-block transition-colors duration-200 rounded-lg ${routes === route.key
                                        ? "text-blue-500 bg-blue-100 dark:text-blue-400 dark:bg-gray-800"
                                        : "text-gray-500"
                                        }`}
                                    title={route.title}
                                    onClick={() => setRoutes(route.key)}
                                >
                                    {route.icon}
                                    <span
                                        className="
                                        absolute left-10 top-2 
                                        px-2 py-1 text-xs text-white bg-gray-800 rounded-md
                                        opacity-0 group-hover:opacity-100
                                        scale-95 group-hover:scale-100
                                        transition-all duration-200
                                        whitespace-nowrap
                                        "
                                    >
                                        {route.title}
                                    </span>
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="h-screen px-8 py-8 w-xs overflow-y-auto bg-white dark:bg-gray-900 dark:border-none">
                        <Suspense fallback={<SkeletonText/>}>
                            {PathRoute ? <PathRoute /> : <div className="text-gray-500">Select a Route</div>}
                        </Suspense>
                    </div>
                </aside>
            </div>

            <div className={`fixed top-0 right-0 bottom-0 left-0 lg:left-[320px] lg:z-50`}>
                <div className="absolute top-0 left-0 right-0 h-[80px] p-5">
                    <NavDash/>
                </div>
                <div className="absolute top-[80px] left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden px-5 pb-5">
                    <Suspense fallback={<SkeletonText/>}>
                        {PathComponent ? <PathComponent /> : <ComingSoon/>}
                    </Suspense>
                </div>
            </div>

            <SidebarOverlay />
        </div>
    );
}
