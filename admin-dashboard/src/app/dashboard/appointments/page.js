"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function AppointmentManagementPage() {
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState("");

    const fetchAppointments = async () => {
        try {
            const response = await axios.get("http://localhost:5001/api/admin/appointments", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            setAppointments(response.data);
        } catch (err) {
            setError("Failed to fetch appointments. Please try again.");
        }
    };

    const updateStatus = async (id, status) => {
        try {
            await axios.put(
                `http://localhost:5001/api/admin/appointments/${id}/status`,
                { status },
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                }
            );
            fetchAppointments();
        } catch (err) {
            setError("Failed to update appointment status. Please try again.");
        }
    };

    const deleteAppointment = async (id) => {
        try {
            await axios.delete(`http://localhost:5001/api/admin/appointments/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            fetchAppointments();
        } catch (err) {
            setError("Failed to delete appointment. Please try again.");
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Manage Appointments</h1>
            {error && <p className="text-red-500">{error}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {appointments.map((appointment) => (
                    <div key={appointment.id} className="p-4 bg-white shadow-md rounded">
                        <h3 className="text-lg font-bold">Customer: {appointment.User.name}</h3>
                        <p className="text-sm text-gray-600">Tattoo: {appointment.Tattoo.title}</p>
                        <p className="text-sm text-gray-600">
                            Date: {new Date(appointment.date).toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-800 font-bold">Status: {appointment.status}</p>
                        <div className="mt-4 flex gap-2">
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                onClick={() => updateStatus(appointment.id, "confirmed")}
                            >
                                Confirm
                            </button>
                            <button
                                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                                onClick={() => updateStatus(appointment.id, "rejected")}
                            >
                                Reject
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                onClick={() => deleteAppointment(appointment.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
