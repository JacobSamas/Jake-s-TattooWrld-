import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <Sidebar />
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <Header />
                <div className="p-6 bg-gray-100 flex-1">{children}</div>
            </div>
        </div>
    );
}
