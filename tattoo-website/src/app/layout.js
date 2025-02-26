import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import ReduxProvider from "@/redux/ReduxProvider";

export const metadata = {
    title: "TattooWrld",
    description: "Discover the best tattoo designs and book your next appointment!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
              <ReduxProvider>
                <Navbar />
                <main className="min-h-screen">{children}</main>
                <Footer />
              </ReduxProvider>
            </body>
        </html>
    );
}
