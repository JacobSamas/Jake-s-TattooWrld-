export default function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen flex">
            <div className="w-64 bg-gray-800 text-white">
                <h2 className="text-lg font-bold p-4">Admin Dashboard</h2>
                <ul>
                    <li className="p-4 hover:bg-gray-700">
                        <a href="/dashboard/appointments">Manage Appointments</a>
                    </li>
                    <li className="p-4 hover:bg-gray-700">
                        <a href="/dashboard/tattoos">Manage Tattoos</a>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-6">{children}</div>
        </div>
    );
}
