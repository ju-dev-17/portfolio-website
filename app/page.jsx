"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col justify-center px-10 md:px-60 min-h-screen">
      <section
        id="about"
        className="h-screen flex flex-col justify-center gap-5"
      >
        <span className="text-4xl overflow-y-hidden">
          Hi, I am Jahid Uddin. A developer and student.
        </span>
        <span className="text-2xl">
          I am working with Next.js and Spring Boot.
        </span>
        <div className="flex gap-5">
          <Image
            className="cursor-pointer"
            onClick={() => router.push("https://discord.gg/urvsvPqQ3T")}
            width={32}
            height={32}
            src="/icons/logo-discord.svg"
            alt="Discord"
          />
          <Image
            className="cursor-pointer"
            onClick={() => router.push("https://www.tiktok.com/@dev.ju")}
            width={32}
            height={32}
            src="/icons/logo-tiktok.svg"
            alt="Tiktok"
          />
          <Image
            className="cursor-pointer"
            onClick={() => router.push("https://www.instagram.com/dev.ju/")}
            width={32}
            height={32}
            src="/icons/logo-instagram.svg"
            alt="Instagram"
          />
          <Image
            className="cursor-pointer"
            onClick={() => router.push("https://twitter.com/ju_dev16")}
            width={32}
            height={32}
            src="/icons/logo-twitter.svg"
            alt="Twitter"
          />
        </div>
      </section>
      <section id="projects" className="h-screen flex flex-col justify-center">
        <h1>Projects</h1>
      </section>
      <section id="contact" className="h-screen flex flex-col justify-center">
        <h1>Contact</h1>
      </section>
    </main>
  );
}
