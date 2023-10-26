import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar/Navbar";
import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Evaluate System",
  description: "Evaluate System for Faculty of Engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar/>
            {children}
        </AuthProvider>
      </body>
    </html>
  );
}
