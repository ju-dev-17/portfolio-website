"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Lottie from "lottie-react";
import { useForm, ValidationError } from "@formspree/react";

import animationData from "../public/img/developer-lottie-animation.json";
import useGithubApi from "./hooks/useGithubApi";
import RepoCard from "./components/RepoCard";

function Home() {
  const router = useRouter();
  const getRepositories = useGithubApi();
  const [repos, setRepos] = useState([]);
  const [state, handleSubmit] = useForm("mrgvwpzz");

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const fetchedRepos = await getRepositories();
        setRepos(fetchedRepos);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepositories();
  }, [getRepositories]);

  return (
    <main className="flex flex-col justify-center px-10 md:px-60 min-h-screen">
      <section
        id="about"
        className="h-screen flex flex-col-reverse xl:flex-row items-center justify-center gap-5"
      >
        <div className="flex flex-col gap-5 w-full xl:w-1/2">
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
        </div>
        <Lottie
          className="w-full xl:w-1/2 -z-50"
          animationData={animationData}
        />
      </section>
      <section
        id="projects"
        className="h-screen flex flex-col justify-center gap-10"
      >
        <span className="text-4xl mt-20 overflow-y-hidden">My Projects</span>
        <div className="grid grid-cols-3 gap-4">
          {repos.map((repo, key) => (
            <RepoCard
              key={key}
              fullname={repo.full_name}
              description={repo.description}
              stargazersCount={repo.stargazers_count}
              forksCount={repo.forks_count}
              watchersCount={repo.watchers_count}
              link={repo.svn_url}
            />
          ))}
        </div>
      </section>
      <section id="contact" className="h-screen flex flex-col justify-center">
        <div className="bg-black rounded-lg p-8">
          <h2 className="text-white text-2xl mb-4">Contact Me</h2>
          <form
            onSubmit={(event) => {
              handleSubmit(event);
              document.querySelector("#email").value = "";
              document.querySelector("#message").value = "";
            }}
            method="POST"
          >
            <div className="mb-4">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                className="bg-gray-900 text-white w-full p-2 rounded outline-none"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message"
                className="bg-gray-900 text-white w-full p-2 rounded outline-none"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Home;
