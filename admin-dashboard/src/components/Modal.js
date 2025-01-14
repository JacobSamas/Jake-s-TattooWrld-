"use client";

import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-md rounded shadow-lg p-6 relative">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                    onClick={onClose}
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}
