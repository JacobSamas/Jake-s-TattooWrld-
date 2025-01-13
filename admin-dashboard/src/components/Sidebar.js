"use client";

import Link from "next/link";
import { HomeIcon, CalendarDaysIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
    return (
        <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
            <div className="p-6 text-center text-2xl font-bold border-b border-gray-700">
                Admin Panel
            </div>
            <nav className="flex-grow">
                <ul className="flex flex-col gap-2 p-4">
                    <li>
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-700"
                        >
                            <HomeIcon className="h-5 w-5" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/dashboard/tattoos"
                            className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-700"
                        >
                            <Cog6ToothIcon className="h-5 w-5" />
                            <span>Manage Tattoos</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/dashboard/appointments"
                            className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-700"
                        >
                            <CalendarDaysIcon className="h-5 w-5" />
                            <span>Manage Appointments</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
