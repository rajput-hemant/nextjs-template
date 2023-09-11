<div align=center>

![views] ![stars] ![forks] ![issues] ![license] ![repo-size]

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/nextjs-light.svg">
  <source media="(prefers-color-scheme: light)" srcset="public/nextjs-dark.svg">
  <img alt="Next.js">
</picture>

# Next.js Starter Template

### A Minimal Next.js Starter Template with TypeScript, Tailwind CSS, and pre-configured with ESLint, Prettier, and Husky.

</div>

## Features

- ⚡ **[Next.js](https://nextjs.org/)** - A React Framework for Production
- 🔥 **[App Router](https://nextjs.org/docs/app)** - It is a new paradigm for building applications using React's latest features.
- 🎨 **[Tailwind CSS](https://tailwindcss.com/)** - A Utility-First CSS Framework for Rapid UI Development
- 📦 **[TypeScript](https://www.typescriptlang.org/)** - A typed superset of JavaScript that compiles to plain JavaScript
- 📝 **[ESLint](https://eslint.org/)** - The pluggable linting utility for JavaScript and JSX
- 🛠 **[Prettier](https://prettier.io/)** - An opinionated code formatter
- 🐶 **[Husky](https://typicode.github.io/husky/#/)** - A tool that makes Git hooks easy
- 🚫 **[lint-staged](https://github.com/okonet/lint-staged)** - Run linters against staged git files
- 📄 **[commitlint](https://commitlint.js.org/#/)** - Lint commit messages
- 📦 **[bun](https://bun.sh)** - A JavaScript runtime w/ Fast, disk space efficient package manager

## Getting Started

```bash
bun create next-app -e "https://github.com/rajput-hemant/nextjs-template" <project-name>

npx create-next-app -e "https://github.com/rajput-hemant/nextjs-template" <project-name>
```

<p align="center" style="font-weight: bold;">OR</p>

**Install `degit` globally**

```bash
bun i -g degit || pnpm i -g degit || yarn global add degit || npm i -g degit
```

**Create a new project from this template**

```bash
degit rajput-hemant/nextjs-template <project-name>
cd <project-name>
```

**Install dependencies**

```bash
bun i || pnpm i || yarn || npm i
```

**Initialize a new git repository _(Optional)_:**

```bash
git init
git add .
git commit --no-verify -m "init"
```

## Available Scripts

In the project directory, you can run:

| **Script**   | **Description**                                      |
| ------------ | ---------------------------------------------------- |
| `dev`        | Runs the app in the development mode.                |
| `build`      | Builds the app for production to the `.next` folder. |
| `start`      | Runs the built app in the production mode.           |
| `preview`    | Builds and serves the app in the production mode.    |
| `lint`       | Runs next lint on the project.                       |
| `type-check` | Runs TypeScript type checker.                        |
| `fmt:check`  | Checks if the code is formatted with Prettier.       |
| `fmt:write`  | Formats the code with Prettier.                      |
| `prepare`    | Installs husky git hooks.                            |

## Folder Structure

```bash
.
├── public
│   ├── favicon.ico
│   ├── nextjs-dark.svg
│   └── nextjs-light.svg
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── lib
│   │   └── utils.ts
│   ├── styles
│   │   └── globals.css
│   └── types
│       └── reset.d.ts
├── LICENSE
├── README.md
├── next.config.js
├── next-env.d.ts
├── package.json
├── postcss.config.js
├── renovate.json
├── tailwind.config.js
└── tsconfig.json
```

## After Installation Checklist

- [ ] Update `package.json` with your project details.
- [ ] Update `README.md` with your project details.
- [ ] Update `LICENSE` with your name and year.

## Switching Package Manager

This template uses [bun](https://bun.sh/docs/cli/install) as the default package manager. If you want to use `pnpm`, `npm` or `yarn`, you need to remove the `bun.lockb` file and run `pnpm i`, `npm i` or `yarn` to generate the lock file for the respective package manager.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributors:

<div align=center>

[![][contributors]][contributors-graph]

_Note: It may take up to 24h for the [contrib.rocks][contrib-rocks] plugin to update because it's refreshed once a day._

</div>

<!----------------------------------{ Labels }--------------------------------->

[views]: https://komarev.com/ghpvc/?username=nextjs-template&label=view%20counter&color=red&style=flat
[repo-size]: https://img.shields.io/github/repo-size/rajput-hemant/nextjs-template
[issues]: https://img.shields.io/github/issues-raw/rajput-hemant/nextjs-template
[license]: https://img.shields.io/github/license/rajput-hemant/nextjs-template
[forks]: https://img.shields.io/github/forks/rajput-hemant/nextjs-template?style=flat
[stars]: https://img.shields.io/github/stars/rajput-hemant/nextjs-template
[contributors]: https://contrib.rocks/image?repo=rajput-hemant/nextjs-template&max=500
[contributors-graph]: https://github.com/rajput-hemant/nextjs-template/graphs/contributors
[contrib-rocks]: https://contrib.rocks/preview?repo=rajput-hemant%2Fnextjs-template
