"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { FaPaintBrush, FaUserShield, FaStar } from "react-icons/fa";

const aboutFeatures = [
    {
        icon: <FaPaintBrush />,
        title: "Creative Designs",
        description: "Discover a vast collection of artistic and custom tattoo designs created by world-class artists.",
    },
    {
        icon: <FaUserShield />,
        title: "Trusted Professionals",
        description: "Work with experienced and highly-rated tattoo professionals to ensure a seamless experience.",
    },
    {
        icon: <FaStar />,
        title: "Top-notch Quality",
        description: "Every tattoo is crafted with precision, ensuring quality and satisfaction with every design.",
    },
];

export default function About() {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            ".about-title",
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        ).fromTo(
            ".about-feature",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out" },
            "-=0.5"
        );
    }, []);

    return (
        <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-16">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-3xl opacity-10"></div>

            <div className="relative container mx-auto px-6">
                {/* Section Title */}
                <h2 className="about-title text-4xl md:text-5xl font-extrabold text-center text-textPrimary mb-12">
                    Why TattooWrld Stands Out
                </h2>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {aboutFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="about-feature relative bg-white rounded-xl shadow-xl p-8 overflow-hidden transform hover:scale-105 transition duration-300"
                        >
                            {/* Icon */}
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl"></div>
                            <div className="relative z-10 text-primary text-5xl mb-4 flex items-center justify-center">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="relative z-10 text-2xl font-bold text-textPrimary mb-4">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="relative z-10 text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
