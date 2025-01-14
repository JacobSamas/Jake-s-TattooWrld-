"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

const featuredTattoos = [
    {
        id: 1,
        title: "Dragon Sleeve",
        description: "An intricate dragon tattoo for your arm.",
        colors: ["bg-gradient-to-r from-red-500 to-yellow-500"],
    },
    {
        id: 2,
        title: "Floral Design",
        description: "A beautiful floral pattern with delicate details.",
        colors: ["bg-gradient-to-r from-green-400 to-blue-500"],
    },
    {
        id: 3,
        title: "Minimalist Symbols",
        description: "Simple yet elegant minimalist tattoos.",
        colors: ["bg-gradient-to-r from-purple-400 to-pink-500"],
    },
];

export default function FeaturedTattoos() {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            ".section-title",
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        ).fromTo(
            ".tattoo-card",
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, stagger: 0.2, duration: 1, ease: "power3.out" },
            "-=0.5"
        );
    }, []);

    return (
        <section className="relative bg-gray-100 py-16">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-3xl opacity-20"></div>

            <div className="relative container mx-auto px-6">
                {/* Title */}
                <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-8 text-textPrimary">
                    Featured Tattoos
                </h2>

                {/* Tattoo Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredTattoos.map((tattoo) => (
                        <div
                            key={tattoo.id}
                            className="tattoo-card bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
                        >
                            {/* Code-Generated Visual */}
                            <div
                                className={`h-48 w-full ${tattoo.colors[0]} rounded-t-lg relative overflow-hidden`}
                            >
                                <div className="absolute inset-0 bg-white opacity-10 mix-blend-overlay"></div>
                                <div className="absolute w-24 h-24 bg-white rounded-full blur-3xl opacity-30 top-10 left-10"></div>
                                <div className="absolute w-40 h-40 bg-white rounded-full blur-2xl opacity-20 bottom-5 right-5"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    {tattoo.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{tattoo.description}</p>
                                <a
                                    href={`/tattoos/${tattoo.id}`}
                                    className="text-secondary hover:underline"
                                >
                                    View Details →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
