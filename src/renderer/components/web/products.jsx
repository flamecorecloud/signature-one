import { Link } from "react-router-dom";
import { ErrorLog } from "../error";

export default function WebProducts() {
    const categories = [
        {
            title: "Security & Password",
            cards: [
                {
                    name: "Password Generator",
                    alias: "PG",
                    desc: "Generate a strong password with a combination of letters, numbers, and symbols.",
                    color: "bg-green-600",
                    link: "/password-generator",
                    available: true,
                },
                {
                    name: "Password Strength Checker",
                    alias: "PSC",
                    desc: "Instantly check the strength of your password.",
                    color: "bg-red-600",
                    link: "/password-strength-checker",
                    available: true,
                },
                {
                    name: "Hash Generator",
                    alias: "HG",
                    desc: "Generate MD5, SHA-1, or SHA-256 hash from text.",
                    color: "bg-indigo-600",
                    link: "/hash-generator",
                    available: true,
                },
                {
                    name: "UUID Generator",
                    alias: "UUID",
                    desc: "Create a unique UUID for data identification.",
                    color: "bg-purple-600",
                    link: "/uuid-generator",
                    available: true,
                },
            ],
        },
        {
            title: "Text & Data",
            cards: [
                {
                    name: "Base64 Encode/Decode",
                    alias: "B64",
                    desc: "Convert text to Base64 or decode it back.",
                    color: "bg-yellow-600",
                    link: "/base64",
                    available: true,
                },
                {
                    name: "JSON Formatter",
                    alias: "JF",
                    desc: "Format JSON for easy readability.",
                    color: "bg-cyan-600",
                    link: "/json-formatter",
                    available: true,
                },
                {
                    name: "Text Case Converter",
                    alias: "TCC",
                    desc: "Convert text to UPPERCASE, lowercase, or Title Case.",
                    color: "bg-pink-600",
                    link: "/text-case-converter",
                    available: true,
                },
                {
                    name: "Word Counter",
                    alias: "WC",
                    desc: "Count the number of words and characters in text.",
                    color: "bg-blue-600",
                    link: "/word-counter",
                    available: true,
                },
                {
                    name: "Lorem Ipsum Generator",
                    alias: "LIG",
                    desc: "Generate dummy text for design or testing.",
                    color: "bg-gray-600",
                    link: "/lorem-ipsum",
                    available: true,
                },
            ],
        },
        {
            title: "Web & Dev Tools",
            cards: [
                {
                    name: "URL Encoder/Decoder",
                    alias: "UE",
                    desc: "Encode or decode URL strings.",
                    color: "bg-teal-600",
                    link: "/url-encoder-decoder",
                    available: true,
                },
                {
                    name: "Regex Tester",
                    alias: "RT",
                    desc: "Test and validate regular expressions.",
                    color: "bg-orange-600",
                    link: "/regex-tester",
                    available: true,
                },
                {
                    name: "JWT Decoder",
                    alias: "JWT",
                    desc: "Easily decode JSON Web Tokens.",
                    color: "bg-lime-600",
                    link: "/jwt-decoder",
                    available: true,
                },
                {
                    name: "Diff Checker",
                    alias: "DC",
                    desc: "Compare two texts to find differences.",
                    color: "bg-sky-600",
                    link: "/diff-checker",
                    available: true,
                },
                {
                    name: "Markdown to HTML Converter",
                    alias: "M2H",
                    desc: "Convert Markdown to HTML quickly.",
                    color: "bg-fuchsia-600",
                    link: "/markdown-to-html",
                    available: true,
                },
            ],
        },
        {
            title: "Design & Color",
            cards: [
                {
                    name: "Color Converter",
                    alias: "CC",
                    desc: "Convert colors between HEX, RGB, and HSL.",
                    color: "bg-emerald-600",
                    link: "/color-converter",
                    available: true,
                },
                {
                    name: "Gradient Generator",
                    alias: "GG",
                    desc: "Create beautiful color gradients for design.",
                    color: "bg-rose-600",
                    link: "/gradient-generator",
                    available: true,
                },
                {
                    name: "Image to Base64",
                    alias: "I2B",
                    desc: "Convert images to Base64 strings.",
                    color: "bg-violet-600",
                    link: "/image-to-base64",
                    available: true,
                },
                {
                    name: "Favicon Generator",
                    alias: "FG",
                    desc: "Generate a favicon from an image or text.",
                    color: "bg-stone-600",
                    link: "/favicon-generator",
                    available: true,
                },
            ],
        },
        {
            title: "Mobile / QR",
            cards: [
                {
                    name: "QR Code Generator",
                    alias: "QR",
                    desc: "Generate QR Codes from text or URLs.",
                    color: "bg-zinc-600",
                    link: "/qr-generator",
                    available: true,
                },
                {
                    name: "Barcode Generator",
                    alias: "BC",
                    desc: "Create barcodes for products or data.",
                    color: "bg-neutral-600",
                    link: "/barcode-generator",
                    available: true,
                },
                {
                    name: "Link Shortener",
                    alias: "LS",
                    desc: "Shorten long URLs into concise links.",
                    color: "bg-amber-600",
                    link: "/link-shortener",
                    available: true,
                },
            ],
        },
        {
            title: "Productivity",
            cards: [
                {
                    name: "Unit Converter",
                    alias: "UC",
                    desc: "Convert length, weight, temperature, and more.",
                    color: "bg-green-700",
                    link: "/unit-converter",
                    available: true,
                },
                {
                    name: "Date Calculator",
                    alias: "DCAL",
                    desc: "Calculate differences or add days to dates.",
                    color: "bg-indigo-700",
                    link: "/date-calculator",
                    available: true,
                },
                {
                    name: "Cron Generator",
                    alias: "CRON",
                    desc: "Generate cron expressions for schedulers.",
                    color: "bg-purple-700",
                    link: "/cron-generator",
                    available: true,
                },
                {
                    name: "Random Number Picker",
                    alias: "RNP",
                    desc: "Pick a random number within a range.",
                    color: "bg-blue-700",
                    link: "/random-number",
                    available: true,
                },
            ],
        },
        {
            title: "File & Encoding",
            cards: [
                {
                    name: "CSV to JSON Converter",
                    alias: "C2J",
                    desc: "Convert CSV files to JSON format.",
                    color: "bg-emerald-700",
                    link: "/csv-to-json",
                    available: true,
                },
                {
                    name: "YAML to JSON Converter",
                    alias: "Y2J",
                    desc: "Convert YAML files to JSON format.",
                    color: "bg-pink-700",
                    link: "/yaml-to-json",
                    available: true,
                }
            ],
        },
    ];

    const handleClick = (card) => {
        if (!card.available) {
            ErrorLog({
                message: "This feature is not available yet!",
            });
            return;
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <section className="relative mt-12 sm:mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold max-w-xl">
                        <span className="text-blue-500">Cloud</span> Products
                    </h2>
                </div>
                {categories.map((category, idx) => (
                    <div key={idx} className="mb-12">
                        <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {category.cards.map((card, i) => (
                                <div
                                    key={i}
                                    className="relative rounded-3xl border py-20 flex flex-col justify-between"
                                >
                                    <div className="px-12">
                                        <h4 className="text-xl font-semibold mb-4">
                                            {card.name}
                                        </h4>
                                        <p className="text-5xl font-bold mb-2">
                                            {card.alias}
                                        </p>
                                        <p className="text-gray-500">{card.desc}</p>
                                    </div>
                                    <Link
                                        to={card.link}
                                        onClick={(e) => {
                                            if (!card.available) {
                                                e.preventDefault(); // cegah redirect
                                                handleClick(card);
                                            } else {
                                                handleClick(card);
                                            }
                                        }}
                                        className={`absolute bottom-0 left-0 rounded-b-2xl bg-gradient-to-r ${card.color} text-white px-6 py-4 flex items-center gap-2 cursor-pointer`}
                                    >
                                        {card.available ? (
                                            <>
                                                <span>Try It </span>
                                                <span>→</span>
                                            </>
                                        ) : (
                                            <span>Coming Soon →</span>
                                        )}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
