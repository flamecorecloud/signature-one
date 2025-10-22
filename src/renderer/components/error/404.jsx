export default function EmptyData({ message = "Data Not Found", description, onAction, actionLabel }) {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500 dark:text-gray-400">
            {/* Ilustrasi */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24 mb-4 text-gray-300 dark:text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17v-6h6v6m2 4H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5l2 2h5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z"
                />
            </svg>

            {/* Pesan */}
            <p className="text-lg font-medium mb-3">{message}</p>
            {
                description &&
                <p className="text-sm mb-3 max-w-lg">{description}</p>
            }

            {/* Optional action button */}
            {onAction && actionLabel && (
                <button
                    onClick={onAction}
                    className="cursor-pointer px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 text-sm"
                >
                    {actionLabel}
                </button>
            )}
        </div>
    );
}
