import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                {/* Links Section */}
                <div className="mb-4">
                    <ul className="flex justify-center gap-6">
                        <li>
                            <Link
                                href="/about"
                                className="text-gray-300 hover:text-white transition"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="text-gray-300 hover:text-white transition"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/terms"
                                className="text-gray-300 hover:text-white transition"
                            >
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/privacy"
                                className="text-gray-300 hover:text-white transition"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Icons */}
                <div className="mb-4">
                    <ul className="flex justify-center gap-6">
                        <li>
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                aria-label="Facebook"
                                className="text-gray-300 hover:text-white transition"
                            >
                                <FaFacebookF className="h-6 w-6" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://twitter.com"
                                target="_blank"
                                aria-label="Twitter"
                                className="text-gray-300 hover:text-white transition"
                            >
                                <FaTwitter className="h-6 w-6" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                aria-label="Instagram"
                                className="text-gray-300 hover:text-white transition"
                            >
                                <FaInstagram className="h-6 w-6" />
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Copyright */}
                <p className="text-gray-400">
                    &copy; {new Date().getFullYear()} TattooWrld. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
