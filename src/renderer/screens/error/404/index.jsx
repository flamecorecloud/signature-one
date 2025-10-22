import { Link } from "react-router-dom";
import ImgError404 from "./../../../assets/error/404.svg";
import ImgError404Dark from "./../../../assets/error/404-dark.svg";

export default function Error404() {
    return (
        <div className="relative z-1 flex min-h-screen flex-col items-center justify-center overflow-hidden p-6">
            {/* Centered Content */}
            <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
                <h1 className="mb-8 text-title-md font-bold text-gray-800 dark:text-white/90 xl:text-title-2xl">
                    ERROR
                </h1>
                <img src={ImgError404} alt={404} className="dark:hidden" />
                <img
                    src={ImgError404Dark}
                    alt={404}
                    className="hidden dark:block"
                />
                <p className="mb-6 mt-10 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
                    We can’t seem to find the page you are looking for!
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
                >
                    Back to Home Page
                </Link>
            </div>
        </div>
    );
}
