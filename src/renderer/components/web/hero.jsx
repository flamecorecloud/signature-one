import { Link } from "react-router-dom";
import BgMeshGradient from "../background/meshGradient";

export default function WebHero() {
    return (
        <>
            <BgMeshGradient />
            <section className="py-12 sm:py-32 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white xl:text-7xl">
                                    All-in-One <span className="text-blue-500">Digital Tools</span> <br />
                                    for Everyday Needs
                                </h1>
                                <p className="mt-3 text-gray-500 dark:text-gray-400 mb-4">
                                    A single platform with various online tools and service to simplify your daily tasks.
                                    Fast, secure, and accessible anytime, anywhere.
                                </p>
                                <Link to="/register">
                                    <button className="cursor-pointer flex items-center justify-center gap-3 px-4 py-2.5 border rounded-lg bg-white hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800">
                                        <svg
                                            className="w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 48 48"
                                        >
                                            <path
                                                fill="#FFC107"
                                                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.523 6.327 29.523 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20c11.046 0 20-8.954 20-20 0-1.341-.138-2.652-.389-3.917z"
                                            />
                                            <path
                                                fill="#FF3D00"
                                                d="M6.306 14.691l6.571 4.819C14.655 16.108 18.961 14 24 14c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.523 6.327 29.523 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                                            />
                                            <path
                                                fill="#4CAF50"
                                                d="M24 44c5.353 0 10.237-1.998 13.949-5.263l-6.451-5.49C29.221 34.477 26.715 35.5 24 35.5c-5.202 0-9.614-3.324-11.275-7.946l-6.567 5.066C9.637 39.648 16.227 44 24 44z"
                                            />
                                            <path
                                                fill="#1976D2"
                                                d="M43.611 20.083H42V20H24v8h11.303c-.792 2.238-2.232 4.162-4.102 5.561l.003-.002 6.451 5.49C39.363 36.258 42 30.592 42 24c0-1.341-.138-2.652-.389-3.917z"
                                            />
                                        </svg>

                                        <span className="text-gray-700 font-medium dark:text-gray-200">
                                            Sign Up with Google
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative w-full mt-6 lg:mt-0 lg:w-1/2">
                            <div className="fmc-layout hidden lg:block">
                                <div className="fmc-circle"></div>
                                <div className="fmc-circle"></div>
                                <div className="fmc-circle"></div>
                                <div className="fmc-circle"></div>
                                <div className="fmc-circle"></div>
                                <div className="fmc-circle"></div>
                                <div className="fmc-circle"></div>
                                <div className="fmc-circle"></div>
                                <div className="fmc-circle"></div>
                                <div className="fmc-circle"></div>
                                <div className="fmc-circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
