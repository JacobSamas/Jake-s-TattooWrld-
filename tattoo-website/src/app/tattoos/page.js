"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";

const TattooPage = () => {
    const [tattoos, setTattoos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchTattoos = async () => {
            try {
                const response = await fetch("http://localhost:5001/api/tattoos");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setTattoos(data);
            } catch (error) {
                console.error("Error fetching tattoos:", error);
            }
        };
    
        fetchTattoos();
    }, []);
    

    useEffect(() => {
        gsap.fromTo(
            ".tattoo-card",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out" }
        );
    }, [tattoos]);

    const filteredTattoos = tattoos.filter((tattoo) =>
        tattoo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="container mx-auto py-16 px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-textPrimary">
                Explore Tattoo Designs
            </h1>

            {/* Search Bar */}
            <div className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Search tattoos..."
                    className="w-full max-w-md px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Tattoos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTattoos.map((tattoo) => (
                    <div
                        key={tattoo.id}
                        className="tattoo-card bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
                    >
                        {/* Replace with code-generated visuals */}
                        <div
                            className="h-48 w-full bg-gradient-to-r from-primary to-secondary rounded-t-lg relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white opacity-10 mix-blend-overlay"></div>
                            <div className="absolute w-20 h-20 bg-white rounded-full blur-3xl opacity-30 top-10 left-10"></div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-primary mb-2">
                                {tattoo.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-3">
                                {tattoo.description}
                            </p>
                            <p className="text-accent font-bold">${tattoo.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TattooPage;
