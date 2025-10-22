import { useState, useRef, useEffect } from "react";
import { Settings } from "lucide-react";
import { useRoute } from "../../hooks/useRouteProvider";

export default function NavDash() {
    
    const { setRoutes, setPath } = useRoute();
    
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    

    // Close dropdown jika klik di luar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-3">
                <h1 className="text-lg font-medium">{process.env.VITE_APP_NAME}</h1>
            </div>
        </div>
    );
}
