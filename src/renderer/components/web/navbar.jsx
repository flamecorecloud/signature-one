import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Settings } from "lucide-react";
import UseLogoutNav from "../../hooks/useLogoutNav";
import { useRoute } from "../../hooks/useRouteProvider";

export default function WebNavbar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

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
        <nav className="relative top-0 left-0 right-0 z-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="flex items-center gap-2">
                            <img src="/logo.png" className="w-10" alt="Logo"/>
                            <span className="text-xl font-semibold">
                                {process.env.VITE_APP_NAME}
                            </span>
                        </a>
                    </div>

                    {/* <div className="hidden md:flex items-center space-x-6">
                        <div className="relative group">
                            <Link to="/about">
                                <button className="hover:text-blue-600 flex items-center">
                                    About
                                </button>
                            </Link>
                        </div>
                        <div className="relative group">
                            <Link to="/products">
                                <button className="hover:text-blue-600 flex items-center">
                                    Products
                                </button>
                            </Link>
                        </div>
                        <div className="relative group">
                            <Link to="/news">
                                <button className="hover:text-blue-600 flex items-center">
                                    News
                                </button>
                            </Link>
                        </div>
                    </div> */}

                    {/* Right Section */}
                    
                    {
                        user ?
                            <div className="hidden md:block relative" ref={dropdownRef}>
                                <div
                                    onClick={() => setOpen(!open)}
                                    className="relative w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-medium cursor-pointer"
                                >
                                    <div className="hidden sm:block border rounded-full absolute -top-2 -right-2 -bottom-2 -left-2"/>
                                    {user?.displayName?.[0] || "U"}
                                </div>

                                {open && (
                                    <div className="absolute right-0 top-[110%] bg-white dark:bg-gray-800 border rounded-2xl py-3 z-50 space-y-3">
                                        <div className="w-sm overflow-hidden">
                                            <div className="relative flex flex-col items-center p-5 text-center border-b">
                                                {/* <p className="text-sm font-medium">{user?.email}</p> */}

                                                <div className="mt-3 relative">
                                                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-500 text-white text-2xl font-medium mb-2">
                                                        {user?.displayName.charAt(0) || 'U'}
                                                    </div>
                                                </div>

                                                <h2 className="mt-2 text-lg font-medium text-truncate">Halo, {user?.displayName}.</h2>
                                                <button onClick={() => {
                                                    setRoutes("settings")
                                                    setPath("settings/account/profile")
                                                    navigate('/')
                                                }} className="cursor-pointer mt-3 px-4 py-2 border rounded-full text-sm text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700">
                                                    Manage Your Account                   
                                                </button>
                                            </div>

                                            <div className="divide-y border m-5 rounded-2xl overflow-hidden">
                                                <div onClick={() => {
                                                    setRoutes("settings")
                                                    navigate('/')
                                                }} className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                                                    <div className="w-9 h-9 flex items-center justify-center rounded-full border">
                                                        <Settings className="w-4" />
                                                    </div>
                                                    <p className="text-sm font-medium">Settings</p>
                                                </div>
                                                <UseLogoutNav user={user}/>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        :
                            <div className="hidden md:flex items-center space-x-4">
                                <Link to="/login" className="hover:text-blue-600">
                                    Log In
                                </Link>
                                <Link
                                    to="/register"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
                                >
                                    Get started
                                </Link>
                            </div>
                    }

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-5 pb-4 space-y-2">
                    {/* <div>
                        <Link to="/about">
                            <button className="w-full text-left">About</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/products">
                            <button className="w-full text-left">Products</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/news">
                            <button className="w-full text-left">News</button>
                        </Link>
                    </div> */}
                    <div className="border-b"/>
                    {
                        user ?
                            <div className="relative" ref={dropdownRef}>
                                <div
                                    onClick={() => setOpen(!open)}
                                    className="relative w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-medium cursor-pointer"
                                >
                                    <div className="hidden sm:block border rounded-full absolute -top-2 -right-2 -bottom-2 -left-2"/>
                                    {user?.displayName?.[0] || "U"}
                                </div>

                                {open && (
                                    <div className="absolute right-0 top-[110%] left-0 bg-white dark:bg-gray-800 border rounded-2xl py-3 z-50 space-y-3">
                                        <div className="w-full overflow-hidden">
                                            <div className="relative flex flex-col items-center p-5 text-center border-b">
                                                {/* <p className="text-sm font-medium">{user?.email}</p> */}

                                                <div className="mt-3 relative">
                                                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-500 text-white text-2xl font-medium mb-2">
                                                        {user?.displayName.charAt(0) || 'U'}
                                                    </div>
                                                </div>

                                                <h2 className="mt-2 text-lg font-medium text-truncate">Halo, {user?.displayName}.</h2>
                                                <button onClick={() => {
                                                    setRoutes("settings")
                                                    setPath("settings/account/profile")
                                                    navigate('/')
                                                }} className="cursor-pointer mt-3 px-4 py-2 border rounded-full text-sm text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700">
                                                    Manage Your Account                   
                                                </button>
                                            </div>

                                            <div className="divide-y border m-5 rounded-2xl overflow-hidden">
                                                <div onClick={() => {
                                                    setRoutes("settings")
                                                    navigate('/')
                                                }} className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                                                    <div className="w-9 h-9 flex items-center justify-center rounded-full border">
                                                        <Settings className="w-4" />
                                                    </div>
                                                    <p className="text-sm font-medium">Settings</p>
                                                </div>
                                                <UseLogoutNav user={user}/>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        :
                            <>
                                <div>
                                    <Link to="/login">
                                        <div>
                                            Log In
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to="/register"
                                        className="block bg-blue-600 text-white text-center px-4 py-2 rounded-lg shadow"
                                    >
                                        Get started
                                    </Link>
                                </div>
                            </>
                    }
                </div>
            )}
        </nav>
    );
}
