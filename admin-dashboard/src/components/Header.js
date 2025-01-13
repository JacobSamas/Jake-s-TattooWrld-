"use client";   

export default function Header() {
    return (
        <div className="bg-white p-4 shadow-md flex justify-between items-center">
            <h1 className="text-lg font-bold">Admin Dashboard</h1>
            <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/";
                }}
            >
                Logout
            </button>
        </div>
    );
}
