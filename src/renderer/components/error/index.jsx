import { useEffect } from "react";
import toast from "react-hot-toast";
import errorEN from "./errorEN.json";

export function ErrorLog(error, setError) {
    if (error) {
        const message =
            errorEN[error.code] || errorEN[error.message] || error.message;

        toast(message, {
            icon: "🖐",
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });

        if (setError) setError(null);
    }
}