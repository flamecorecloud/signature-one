// src/components/Tabs.jsx
import { useState } from "react";

export function Tabs({ defaultValue, children }) {
    const [active, setActive] = useState(defaultValue);
    return <div>{children({ active, setActive })}</div>;
}

export function TabsList({ children }) {
    return <div className="flex gap-2 border-b mb-6">{children}</div>;
}

export function TabsTrigger({ value, active, setActive, children }) {
    return (
        <button
            onClick={() => setActive(value)}
            className={`px-4 py-2 -mb-px border-b-2 transition
        ${active === value
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-blue-600"}`}
        >
            {children}
        </button>
    );
}

export function TabsContent({ value, active, children }) {
    return active === value ? <div>{children}</div> : null;
}
