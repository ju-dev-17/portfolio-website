import "./globals.css";
import localFont from "next/font/local";

const roboto = localFont({
  src: [
    {
      path: "../public/fonts/Roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: '--font-roboto'
});

export const metadata = {
  title: "Jahid Uddin",
  description: "The portfolio website of Jahid Uddin.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans`}>{children}</body>
    </html>
  );
}
