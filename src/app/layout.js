import "./globals.css";

import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Notes App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-mono">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export const fetchCache = 'default-cache'