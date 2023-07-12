"use client";

import { useState } from "react";
import {
  Clipboard,
  ClipboardCheck,
  Copyright,
  ExternalLink,
  Github,
} from "lucide-react";

const features = [
  {
    title: "Next.js",
    description: "The React Framework for Production.",
    link: "https://nextjs.org/",
  },
  {
    title: "React 18",
    description: "JavaScript library for building user interfaces.",
    link: "https://reactjs.org/",
  },
  {
    title: "TypeScript",
    description:
      "Strongly typed programming language that builds on JavaScript.",
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "Tailwind with JIT",
    description: "A utility-first CSS framework packed with classes.",
    link: "https://tailwindcss.com/",
  },
  {
    title: "ESLint",
    description: "Find and fix problems in your JavaScript code.",
    link: "https://eslint.org/",
  },
  {
    title: "Prettier",
    description: "An opinionated code formatter.",
    link: "https://prettier.io/",
  },
  {
    title: "Husky",
    description:
      "Lint your commit messages, run tests, lint code, etc... when you commit or push.",
    link: "https://github.com/typicode/husky",
  },
  {
    title: "Lint-staged",
    description: "Run linters against staged git files.",
    link: "https://github.com/okonet/lint-staged",
  },
  {
    title: "Commitlint",
    description: "Helps your team adhering to a commit convention.",
    link: "https://github.com/conventional-changelog/commitlint",
  },
  {
    title: "Lucide React",
    description: "A simply beautiful icon set.",
    link: "https://lucide.dev",
  },
];

const Home = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const text = "pnpx degit rajput-hemant/react-template-vite my-react-app";

    try {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <main>
      <header className="container">
        <h1 className="bg-gradient-to-b from-green-300 to-green-600 bg-clip-text text-6xl font-bold text-transparent">
          Next.js Template
        </h1>

        <p className="mt-5 text-xl">
          A Next.js template with <Span>TypeScript</Span>,{" "}
          <Span>TailwindCSS</Span>, <Span>Lucide Icons</Span> and pre-configured
          with <Span>ESLint</Span>, <Span>Prettier</Span> and <Span>Husky</Span>
          .
        </p>
      </header>

      <section className="container mt-10 flex flex-col items-center gap-4 lg:flex-row">
        <div className="rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 px-4 py-3 text-lg font-semibold hover:from-violet-600 hover:to-blue-700 hover:shadow-md hover:shadow-blue-600 active:ring-2 active:ring-blue-600 active:ring-offset-2 active:ring-offset-black/90">
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

        <p
          onClick={copyToClipboard}
          className="group flex cursor-pointer items-center gap-1 rounded-xl border border-zinc-600 bg-zinc-800 px-4 py-3 font-mono font-semibold hover:shadow-md hover:shadow-green-600"
        >
          <span className="mr-2 text-orange-500">$</span>

          <span>pnpx</span>

          <span>degit rajput-hemant/nextjs-template my-next-app</span>

          <span className="ml-2 text-gray-400 transition-colors duration-300 group-hover:text-white">
            {isCopied ? (
              <ClipboardCheck className="h-5 w-5" />
            ) : (
              <Clipboard className="h-5 w-5" />
            )}
          </span>
        </p>
      </section>

      <section className="container mt-10 grid grid-cols-2 gap-5 lg:grid-cols-3">
        {features.map((feature) => (
          <div className="group rounded-xl border-2 border-zinc-600 bg-zinc-800/75 p-6 transition-colors duration-300 hover:border-green-500 hover:shadow-lg hover:shadow-green-600">
            <a href={feature.link} target="_blank" rel="noopener noreferrer">
              <h2 className="flex items-center gap-2 bg-gradient-to-b from-green-300 to-green-600 bg-clip-text text-2xl font-semibold group-hover:text-transparent">
                {feature.title} <ExternalLink className="h-4 w-4 text-white" />
              </h2>

              <p className="mt-2 text-gray-400 group-hover:text-white">
                {feature.description}
              </p>
            </a>
          </div>
        ))}
      </section>

      <footer className="container mt-10 grid place-items-center">
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
