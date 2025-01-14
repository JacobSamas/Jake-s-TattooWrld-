"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
    useEffect(() => {
        // GSAP Animation for Hero Section
        const tl = gsap.timeline();
        tl.fromTo(
            ".bg-animation",
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
        )
            .fromTo(
                ".hero-title",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=1.5"
            )
            .fromTo(
                ".hero-subtitle",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=1.3"
            )
            .fromTo(
                ".cta-button",
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
                "-=0.8"
            );
    }, []);

    return (
        <div className="relative bg-gray-800 text-white h-screen flex items-center justify-center overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-animation">
                <div className="absolute w-80 h-80 bg-primary rounded-full blur-3xl opacity-40 top-20 left-10 animate-pulse"></div>
                <div className="absolute w-96 h-96 bg-secondary rounded-full blur-2xl opacity-50 top-40 right-20 animate-pulse"></div>
                <div className="absolute w-64 h-64 bg-accent rounded-full blur-3xl opacity-40 bottom-20 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center">
                <h1 className="hero-title text-4xl md:text-6xl font-bold mb-4">
                    Ink Your Story
                </h1>
                <p className="hero-subtitle text-lg md:text-xl mb-6">
                    Discover unique tattoo designs and book with the best artists.
                </p>
                <a
                    href="/tattoos"
                    className="cta-button bg-primary text-white py-3 px-8 rounded hover:bg-secondary transition"
                >
                    Explore Tattoos
                </a>
            </div>
        </div>
    );
}
