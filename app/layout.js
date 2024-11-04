import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

export const metadata = {
  title: "Reservr",
  description: "Restaurant Reservation App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          {children}
        </main>
        {/* Footer */}
        <footer className="bg-blue-100 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made by Reservr</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
