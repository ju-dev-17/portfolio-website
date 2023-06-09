"use client";

import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    if (visibilty) {
      document.querySelector("body").style.overflowY = "hidden";
    } else {
      document.querySelector("body").style.overflowY = "scroll";
    }
  }, [visibilty]);

  return (
    <>
      <header className="fixed w-screen flex justify-around items-center h-1/6 bg-black text-white shadow-lg backdrop-filter backdrop-blur-sm border border-opacity-25 border-white">
        <h1
          className="cursor-pointer text-4xl font-semibold overflow-y-hidden"
          onClick={() => window.location.reload()}
        >
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
        <div className="fixed inset-x-0 bottom-0 flex items-center justify-center z-10 bg-white h-5/6">
          <div className="px-10 flex flex-col justify-center">
            <nav className="flex flex-col gap-10">
              <ScrollLink href="#about">
                <span onClick={() => setVisibility(false)}>About</span>
              </ScrollLink>
              <ScrollLink href="#projects">
                <span onClick={() => setVisibility(false)}>Projects</span>
              </ScrollLink>
              <ScrollLink href="#contact">
                <span onClick={() => setVisibility(false)}>Contact</span>
              </ScrollLink>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
