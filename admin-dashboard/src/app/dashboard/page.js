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
            <h1 className="text-2xl font-bold">Welcome to the Admin Dashboard</h1>
        </div>
    );
}
