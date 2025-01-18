import Hero from "@/components/Hero";
import FeaturedTattoos from "@/components/FeaturedTattoos";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";

export default function Home() {
    return (
        <div>
            <Hero />
            <FeaturedTattoos />
            <About />
            <Testimonials />
        </div>
    );
}
