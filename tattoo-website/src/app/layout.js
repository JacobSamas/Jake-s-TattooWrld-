import "./globals.css";
import Navbar from "../components/Navbar";
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
              </ReduxProvider>
            </body>
        </html>
    );
}
