import React, { Suspense, lazy, useEffect } from "react";
import { MemoryRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import LoadingScreen from "./components/loading/main";
import UseDarkMode from "./hooks/useDarkMode";
import Error from "./components/error";
import useSidebar from "./hooks/useSidebar";
import { RouteProvider } from "./hooks/useRouteProvider";

const Dashboard = lazy(() => import("./screens/dashboard"));
const Error404 = lazy(() => import("./screens/error/404"));


export default function App() {
    const { ToggleSidebarButton } = useSidebar();

    return (
        <RouteProvider>
            <Router>
                <div className="bg-white dark:bg-gray-900 min-h-screen">
                    <Toaster position="top-right" reverseOrder={false} />

                    <Suspense fallback={<LoadingScreen />}>
                        <Routes>
                            <Route path="/" element={<Dashboard user={""} role={""} />} />

                            <Route path="/404" element={<Error404 />} />
                            <Route path="*" element={<Navigate to="/404" />} />
                        </Routes>
                    </Suspense>

                    <div className="fixed bottom-6 right-6 z-100">
                        <div className="mb-3">
                            <ToggleSidebarButton />
                        </div>
                        {
                            process.env.NODE_ENV === "production" && (
                                <div className="hidden">
                                    <UseDarkMode />
                                </div>
                            )
                        }
                        {
                            process.env.NODE_ENV === "development" && (
                                <UseDarkMode />
                            )
                        }
                    </div>
                </div>
            </Router>
        </RouteProvider>
    );
}
