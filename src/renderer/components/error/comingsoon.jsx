import React from "react";

export default function ComingSoon() {
    return (
        <section className="container mx-auto bg-white dark:bg-gray-900 mt-0 sm:mt-3">
            <div className="bg-white dark:bg-gray-800 border dark:border-none rounded-xl p-8 md:p-12 mb-8">
                <a
                    className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
                >
                    🚀 Coming Soon
                </a>
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                    Fitur Baru Segera Hadir
                </h1>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6 max-w-xl">
                    Kami sedang menyiapkan integrasi menarik lainnya untuk membantu Anda 
                    bekerja lebih produktif. Nantikan update berikutnya!
                </p>
            </div>
        </section>
    );
}
