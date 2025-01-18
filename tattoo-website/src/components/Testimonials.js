"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

const testimonials = [
    {
        id: 1,
        name: "Alex Johnson",
        review: "The tattoo artists here are incredibly talented! I’m absolutely in love with my new design.",
        image: "/user1.jpg", // Replace with actual avatar or remove for abstract visuals
    },
    {
        id: 2,
        name: "Maria Lopez",
        review: "Fantastic experience! The booking process was smooth, and the quality of work is top-notch.",
        image: "/user2.jpg",
    },
    {
        id: 3,
        name: "Daniel Kim",
        review: "The attention to detail and professionalism of the artists is amazing. Highly recommend TattooWrld!",
        image: "/user3.jpg",
    },
];

export default function Testimonials() {
    useEffect(() => {
        // GSAP Animation for Testimonials
        gsap.fromTo(
            ".testimonial-card",
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, stagger: 0.2, duration: 1, ease: "power3.out" }
        );
    }, []);

    return (
        <section className="relative bg-gradient-to-b from-gray-100 to-gray-200 py-16">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-center text-textPrimary mb-12">
                    What Our Customers Say
                </h2>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="testimonial-card bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                        >
                            {/* Abstract Image Background */}
                            <div
                                className="h-20 w-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary relative overflow-hidden"
                                style={{ backgroundImage: `url(${testimonial.image})` }}
                            >
                                <div className="absolute inset-0 bg-white mix-blend-overlay opacity-10"></div>
                            </div>

                            {/* Name */}
                            <h3 className="text-lg font-bold text-center text-textPrimary">
                                {testimonial.name}
                            </h3>

                            {/* Review */}
                            <p className="text-center text-gray-600 mt-4">{testimonial.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
