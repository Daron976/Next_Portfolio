import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Daron Wiafe",
  description:
    "Welcome to my Portfolio. Here I showcase my abilities and all the skills I have aquired throughout my software development journey. I have the the abilities you seek, so left me help you reach your goals",
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
