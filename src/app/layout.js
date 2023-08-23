import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Daron Wiafe",
  description: "Welcome to my Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
