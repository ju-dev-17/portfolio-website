"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";

import ScrollLink from "./ScrollLink";

function Header() {
  const [visibilty, setVisibility] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setVisibility(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="fixed w-screen flex justify-around items-center h-1/6 bg-black text-white shadow-lg backdrop-filter backdrop-blur-sm border border-opacity-25 border-white">
        <h1 className="cursor-pointer text-4xl overflow-y-hidden" onClick={() => window.location.reload()}>
          Jahid Uddin
        </h1>
        <nav className="hidden justify-between gap-10 md:flex">
          <ScrollLink href="#about">About</ScrollLink>
          <ScrollLink href="#projects">Projects</ScrollLink>
          <ScrollLink href="#contact">Contact</ScrollLink>
        </nav>
        <Image
          className="block md:hidden cursor-pointer"
          src={
            visibilty ? "/icons/close-outline.svg" : "/icons/menu-outline.svg"
          }
          width={32}
          height={32}
          alt="Menu Outline"
          onClick={() => setVisibility(!visibilty)}
        />
      </header>
      {visibilty && (
        <div className="h-full z-50 px-10 flex flex-col justify-center">
          <nav className="flex flex-col gap-10">
            <ScrollLink href="#about">About</ScrollLink>
            <ScrollLink href="#projects">Projects</ScrollLink>
            <ScrollLink href="#contact">Contact</ScrollLink>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
