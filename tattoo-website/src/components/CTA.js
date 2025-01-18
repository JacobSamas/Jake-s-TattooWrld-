"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function CTA() {
    useEffect(() => {
        gsap.fromTo(
            ".cta-container",
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
        );
    }, []);

    return (
        <section className="relative bg-gradient-to-r from-primary to-secondary py-16">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-accent blur-3xl opacity-30"></div>

            <div className="cta-container relative container mx-auto px-6 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to Ink Your Story?
                </h2>
                <p className="text-lg md:text-xl mb-8">
                    Discover stunning tattoo designs and book your next appointment with trusted artists.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="/tattoos"
                        className="bg-white text-primary py-3 px-8 rounded-lg font-bold hover:bg-gray-200 transition"
                    >
                        Explore Tattoos
                    </a>
                    <a
                        href="/appointments"
                        className="bg-accent text-white py-3 px-8 rounded-lg font-bold hover:bg-opacity-90 transition"
                    >
                        Book Appointment
                    </a>
                </div>
            </div>
        </section>
    );
}
