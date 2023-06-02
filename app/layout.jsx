"use client";

import "./globals.css";
import React, { useState } from "react";

import localFont from "next/font/local";

import Header from "./components/Header";
import VisibilityWrapper from "./wrapper/VisibilityWrapper";

const montserrat = localFont({
  src: [
    {
      path: "../public/fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Jahid Uddin",
  description: "The portfolio website of Jahid Uddin.",
};

export default function RootLayout({ children }) {
  const [visibilty, setVisibility] = useState(false);

  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans h-screen`}>
        <Header visibilty={visibilty} setVisibility={setVisibility} />
        <VisibilityWrapper visibility={visibilty}>
          {children}
        </VisibilityWrapper>
      </body>
    </html>
  );
}
