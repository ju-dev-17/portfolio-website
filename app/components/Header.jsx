"use client";

import React, { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

const ScrollLink = ({ href, children }) => {
  useEffect(() => {
    const handleClick = (event) => {
      event.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    };

    const link = document.querySelector(`a[href="${href}"]`);
    link.addEventListener("click", handleClick);

    return () => {
      link.removeEventListener("click", handleClick);
    };
  }, [href]);

  return <Link href={href}>{children}</Link>;
};

function Header() {
  return (
    <header className="fixed w-full flex justify-around items-center h-1/6 border shadow-sm">
      <h1>Jahid Uddin</h1>
      <nav className="hidden justify-between gap-10 md:flex">
        <ScrollLink href="#about">About</ScrollLink>
        <ScrollLink href="#projects">Projects</ScrollLink>
        <ScrollLink href="#contact">Contact</ScrollLink>
      </nav>
      <Image
        className="block md:hidden cursor-pointer"
        src="/icons/menu-outline.svg"
        width={32}
        height={32}
        alt="Menu Outline"
      />
    </header>
  );
}

export default Header;
