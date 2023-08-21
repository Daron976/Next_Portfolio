import "./globals.css";

export const metadata = {
  title: "Daron Wiafe",
  description: "Welcome to my Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="home_container" className="overflow_container">
      <body>{children}</body>
    </html>
  );
}
