import { Link } from "react-router-dom";

export default function WebFooter() {

    return (
        <section className="relative py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <footer>
                    <div className="flex flex-col items-center justify-between py-8 mx-auto lg:flex-row">
                        <a href="/">
                            <img
                                className="w-auto h-7"
                                src="/logo.png"
                                alt=""
                            />
                        </a>
                        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
                            <Link
                                to="/privacy"
                                className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                            >
                                Privacy
                            </Link>
                            <Link
                                to="/terms"
                                className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                            >
                                Terms
                            </Link>
                        </div>
                        <p className="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">
                            © Copyright 2016 - {new Date().getFullYear()} PT. Flamecore Cloud Indonesia.{" "}
                        </p>
                    </div>
                </footer>

            </div>
        </section>
    );
}
