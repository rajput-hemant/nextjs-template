"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Clipboard,
  ClipboardCheck,
  Copyright,
  Github,
  MoveUpRight,
} from "lucide-react";

type Feature = {
  title: string;
  logo: string;
  description: string;
  link: string;
};

const features: Feature[] = [
  {
    title: "Next.js",
    logo: "/nextjs-light.svg",
    description: "The React Framework for Production.",
    link: "https://nextjs.org/",
  },
  {
    title: "React 18",
    logo: "/icons/react.svg",
    description: "JavaScript library for building user interfaces.",
    link: "https://reactjs.org/",
  },
  {
    title: "TypeScript",
    logo: "/icons/typescript.svg",
    description:
      "Strongly typed programming language that builds on JavaScript.",
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "TailwindCSS",
    logo: "/icons/tailwindcss.svg",
    description: "A utility-first CSS framework packed with classes.",
    link: "https://tailwindcss.com/",
  },
  {
    title: "ESLint",
    logo: "/icons/eslint.svg",
    description: "Find and fix problems in your JavaScript code.",
    link: "https://eslint.org/",
  },
  {
    title: "Prettier",
    logo: "/icons/prettier.svg",
    description: "An opinionated code formatter.",
    link: "https://prettier.io/",
  },
  {
    title: "Husky",
    logo: "/icons/husky.svg",
    description: "Git hooks made easy. (lint-staged, commitlint)",
    link: "https://github.com/typicode/husky",
  },
  {
    title: "Lucide React",
    logo: "/icons/lucide.svg",
    description: "A simply beautiful icon set.",
    link: "https://lucide.dev",
  },
];

const Home = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const text = "pnpx degit rajput-hemant/nextjs-template my-next-app";

    try {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <main>
      <header className="container text-center md:text-start">
        <h1 className="bg-gradient-to-b from-green-300 to-green-600 bg-clip-text text-3xl font-bold text-transparent md:py-4 md:text-5xl">
          Next.js Template
        </h1>

        <p className="mt-5 tracking-tight md:text-xl">
          A Next.js template with <Span>TypeScript</Span>,{" "}
          <Span>TailwindCSS</Span>, <Span>Lucide Icons</Span> and pre-configured
          with <Span>ESLint</Span>, <Span>Prettier</Span> and <Span>Husky</Span>
          .
        </p>
      </header>

      <section className="container mt-10 flex flex-col items-center gap-4 lg:flex-row">
        <div className="rounded-xl border border-sky-500 bg-gradient-to-br from-violet-600 via-blue-600 to-blue-500 px-4 py-3 text-lg font-semibold hover:from-violet-600 hover:to-blue-700 hover:shadow-md hover:shadow-blue-600 active:ring-2 active:ring-blue-600 active:ring-offset-2 active:ring-offset-black/90">
          <a
            href="https://github.com/rajput-hemant/nextjs-template"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-1"
          >
            <Github className="mr-1 h-5 w-5" />
            Visit on Github
          </a>
        </div>

        <div className="group rounded-2xl border border-zinc-700 p-1 font-mono font-semibold hover:border-zinc-600">
          <p
            onClick={copyToClipboard}
            className="flex cursor-pointer items-center gap-1 rounded-xl bg-zinc-800 px-4 py-3 hover:bg-zinc-700/25"
          >
            <span className="mr-2 text-orange-500">$</span>

            <span>pnpx</span>

            <span className="line-clamp-1">
              degit rajput-hemant/nextjs-template my-next-app
            </span>

            <span className="ml-2 text-gray-400 transition-colors duration-300 group-hover:text-white">
              {isCopied ? (
                <ClipboardCheck className="h-5 w-5" />
              ) : (
                <Clipboard className="h-5 w-5" />
              )}
            </span>
          </p>
        </div>
      </section>

      <section className="container mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={i}
            className="group rounded-xl border border-zinc-700 p-1 hover:border-zinc-600"
          >
            <div className="relative h-full w-full rounded-md bg-gradient-to-b from-zinc-800/50 via-zinc-800/50 to-zinc-800 px-6 py-4 hover:to-zinc-900">
              <Image
                src={f.logo}
                alt={f.title}
                width={50}
                height={50}
                className="mb-4"
              />

              <h2 className="text-xl">
                <a
                  href={f.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full w-full items-center after:absolute after:inset-0"
                >
                  {f.title}

                  <MoveUpRight
                    strokeWidth={0.75}
                    className="ml-1 h-4 w-4 text-white"
                  />
                </a>
              </h2>

              <p className="mt-2 text-sm text-gray-300 group-hover:text-white">
                {f.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      <footer className="container mb-4 mt-10 grid place-items-center">
        <span className="flex items-center gap-1">
          <Copyright className="h-4 w-4" />

          <span>{new Date().getFullYear()}</span>

          <a
            href="https://github.com/rajput-hemant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 hover:text-green-400"
          >
            rajput-hemant@github
          </a>
        </span>
      </footer>
    </main>
  );
};

export default Home;

const Span = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-green-300">{children}</span>;
};
