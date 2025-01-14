"use client";

import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "@/redux/slices/userSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        // Clear user state and local storage
        dispatch(clearUser());
        localStorage.removeItem("token");
        router.push("/");
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-primary">
                    TattooWrld
                </Link>

                {/* Navigation Links */}
                <ul className="hidden md:flex gap-6">
                    <li>
                        <Link href="/tattoos" className="text-textPrimary hover:text-primary">
                            Tattoos
                        </Link>
                    </li>
                    {user && (
                        <>
                            <li>
                                <Link
                                    href="/appointments"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    Book Appointment
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/profile"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    Profile
                                </Link>
                            </li>
                        </>
                    )}
                </ul>

                {/* Authentication Buttons */}
                <div className="hidden md:flex">
                    {!user ? (
                        <button
                            className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary"
                            onClick={() => router.push("/login")}
                        >
                            Login
                        </button>
                    ) : (
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-textPrimary hover:text-primary">
                        {/* Hamburger icon for mobile */}
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    );
}
