"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/");
        }
    }, [router]);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
            <p className="text-lg">Welcome to the admin dashboard!</p>
        </div>
    );
}
