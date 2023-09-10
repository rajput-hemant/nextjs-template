"use client";

import { useState } from "react";
import {
  Clipboard,
  ClipboardCheck,
  Copyright,
  Github,
  MoveUpRight,
} from "lucide-react";

type Feature = {
  title: string;
  logo: () => JSX.Element;
  description: string;
  link: string;
};

const features: Feature[] = [
  {
    title: "Next.js",
    logo: () => (
      <svg
        height="100pt"
        viewBox=".5 -.2 1023 1024.1"
        width="100pt"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
      >
        <path
          fill="#fff"
          d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"
        />
        <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
      </svg>
    ),
    description: "The React Framework for Production.",
    link: "https://nextjs.org/",
  },
  {
    title: "React 18",
    logo: () => (
      <svg
        viewBox="0 0 512 512"
        fill="#00D8FF"
        height="5em"
        width="5em"
        className="h-12 w-12"
      >
        <path d="M410.66 180.72q-7.67-2.62-15.45-4.88 1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 00-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49 25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25 6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93 25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86 4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78-.02-29-33.52-57.01-85.36-74.9zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39 16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 00-64.18-10.16 481.27 481.27 0 00-40.57-50.75q5.38-5.22 11.02-10.15zM157.73 280.25q6.51 12.6 13.61 24.89 7.23 12.54 15.07 24.71a435.28 435.28 0 01-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63 13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88zm10.9 24.17q9.48-19.77 20.42-38.78 10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76zM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0116.12 42.32 434.44 434.44 0 01-44.79 7.65q7.62-12.09 14.75-24.48zm13.72-73.07q-6.64-12.65-13.81-25-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 01-15.37 41.39zm-98.24-107.45a439.75 439.75 0 0128.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18zM145.66 65.86c16.06-9.32 51.57 4 89 37.27 2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 00201 160.51a499.12 499.12 0 00-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81-11.88-10.19-17.9-20.36-17.9-28.6 0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0023.4 60.75 502.46 502.46 0 00-23.69 61.58zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72-14.78 5.23-26.55 5.38-33.66 1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0064.69 9.39 501.2 501.2 0 0041.2 51c-2.98 2.93-6.03 5.75-9.14 8.48zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 01-28.2 34.74zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86-15.13 8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0040.23-51.2 477.84 477.84 0 0065-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 00-24.31-60.94 481.52 481.52 0 0023.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52 44.42 15.32 71.52 38 71.52 55.43 0 18.6-29.27 42.74-76.78 58.52z" />
        <path d="M256 298.55a43 43 0 10-42.86-43 42.91 42.91 0 0042.86 43z" />
      </svg>
    ),
    description: "JavaScript library for building user interfaces.",
    link: "https://reactjs.org/",
  },
  {
    title: "TypeScript",
    logo: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect>
        <polygon
          fill="#fff"
          points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
        ></polygon>
        <path
          fill="#fff"
          d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
        ></path>
      </svg>
    ),
    description:
      "Strongly typed programming language that builds on JavaScript.",
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "TailwindCSS",
    logo: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <path
          fill="#00acc1"
          d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
        ></path>
      </svg>
    ),
    description: "A utility-first CSS framework packed with classes.",
    link: "https://tailwindcss.com/",
  },
  {
    title: "ESLint",
    logo: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <path
          fill="#7986cb"
          d="M15.337,18.757l8.334-4.811c0.204-0.118,0.455-0.118,0.659,0l8.341,4.816	C32.874,18.879,33,19.097,33,19.332v9.632c0,0.235-0.126,0.453-0.329,0.57l-8.341,4.816c-0.204,0.118-0.455,0.118-0.659,0	l-8.341-4.816C15.126,29.417,15,29.199,15,28.964v-9.623C15,19.1,15.129,18.878,15.337,18.757"
        ></path>
        <path
          fill="#3949ab"
          d="M45.362,23.151L35.545,6.073C35.189,5.455,34.53,5,33.817,5H14.183c-0.713,0-1.372,0.455-1.729,1.073	L2.638,23.114c-0.357,0.618-0.357,1.397,0,2.015l9.817,16.938C12.811,42.684,13.47,43,14.183,43h19.634	c0.713,0,1.372-0.306,1.728-0.924l9.817-16.966C45.719,24.493,45.719,23.769,45.362,23.151 M36.66,31.821L24.356,38.92	c-0.217,0.125-0.484,0.125-0.701,0L11.34,31.821C11.13,31.699,11,31.475,11,31.232V17.063c0-0.243,0.13-0.468,0.341-0.59	l12.302-7.098c0.217-0.125,0.484-0.125,0.701,0l12.289,7.084C36.86,16.591,37,16.833,37,17.096v14.136	C37,31.475,36.87,31.7,36.66,31.821z"
        ></path>
      </svg>
    ),
    description: "Find and fix problems in your JavaScript code.",
    link: "https://eslint.org/",
  },
  {
    title: "Prettier",
    logo: () => (
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 210 210"
        width="40"
        height="40"
      >
        <style type="text/css">{`.st0{fill:#56b3b4}.st1{fill:#ea5e5e}.st2{fill:#bf85bf}.st3{fill:#f7ba3e}.st4{opacity:.5;fill:#d0d4d8;enable-background:new}`}</style>
        <title>prettier-icon-light</title>
        <g id="Page-1">
          <g id="prettier-icon-light">
            <g id="Icon-_x28_Light_x29_">
              <g id="Group">
                <path
                  id="Rectangle"
                  className="st0"
                  d="M155 40h10c2.8 0 5 2.2 5 5s-2.2 5-5 5h-10c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_1_"
                  className="st1"
                  d="M5 200h50c2.8 0 5 2.2 5 5s-2.2 5-5 5H5c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_2_"
                  className="st2"
                  d="M125 120h30c2.8 0 5 2.2 5 5s-2.2 5-5 5h-30c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_3_"
                  className="st1"
                  d="M65 120h40c2.8 0 5 2.2 5 5s-2.2 5-5 5H65c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_4_"
                  className="st0"
                  d="M5 120h40c2.8 0 5 2.2 5 5s-2.2 5-5 5H5c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_5_"
                  className="st2"
                  d="M5 160h50c2.8 0 5 2.2 5 5s-2.2 5-5 5H5c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_6_"
                  className="st2"
                  d="M5 80h50c2.8 0 5 2.2 5 5s-2.2 5-5 5H5c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_7_"
                  className="st3"
                  d="M55 20h100c2.8 0 5 2.2 5 5s-2.2 5-5 5H55c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_8_"
                  className="st1"
                  d="M5 20h30c2.8 0 5 2.2 5 5s-2.2 5-5 5H5c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_9_"
                  className="st3"
                  d="M45 180h10c2.8 0 5 2.2 5 5s-2.2 5-5 5H45c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_10_"
                  className="st0"
                  d="M45 60h10c2.8 0 5 2.2 5 5s-2.2 5-5 5H45c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_11_"
                  className="st0"
                  d="M5 180h20c2.8 0 5 2.2 5 5s-2.2 5-5 5H5c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_12_"
                  className="st3"
                  d="M5 60h20c2.8 0 5 2.2 5 5s-2.2 5-5 5H5c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_13_"
                  className="st4"
                  d="M135 180h10c2.8 0 5 2.2 5 5s-2.2 5-5 5h-10c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_14_"
                  className="st4"
                  d="M75 180h40c2.8 0 5 2.2 5 5s-2.2 5-5 5H75c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_15_"
                  className="st4"
                  d="M165 180h40c2.8 0 5 2.2 5 5s-2.2 5-5 5h-40c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_16_"
                  className="st0"
                  d="M85 100h80c2.8 0 5 2.2 5 5s-2.2 5-5 5H85c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_17_"
                  className="st3"
                  d="M35 100h30c2.8 0 5 2.2 5 5s-2.2 5-5 5H35c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_18_"
                  className="st1"
                  d="M5 100h10c2.8 0 5 2.2 5 5s-2.2 5-5 5H5c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_19_"
                  className="st2"
                  d="M95 40h40c2.8 0 5 2.2 5 5s-2.2 5-5 5H95c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_20_"
                  className="st0"
                  d="M5 40h70c2.8 0 5 2.2 5 5s-2.2 5-5 5H5c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_21_"
                  className="st3"
                  d="M35 140h90c2.8 0 5 2.2 5 5s-2.2 5-5 5H35c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_22_"
                  className="st2"
                  d="M5 140h10c2.8 0 5 2.2 5 5s-2.2 5-5 5H5c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_23_"
                  className="st1"
                  d="M125 60h50c2.8 0 5 2.2 5 5s-2.2 5-5 5h-50c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_24_"
                  className="st3"
                  d="M125 80h50c2.8 0 5 2.2 5 5s-2.2 5-5 5h-50c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_25_"
                  className="st0"
                  d="M5 0h120c2.8 0 5 2.2 5 5s-2.2 5-5 5H5c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_26_"
                  className="st4"
                  d="M145 0h60c2.8 0 5 2.2 5 5s-2.2 5-5 5h-60c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_27_"
                  className="st4"
                  d="M145 140h20c2.8 0 5 2.2 5 5s-2.2 5-5 5h-20c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_28_"
                  className="st4"
                  d="M185 140h20c2.8 0 5 2.2 5 5s-2.2 5-5 5h-20c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_29_"
                  className="st4"
                  d="M175 120h30c2.8 0 5 2.2 5 5s-2.2 5-5 5h-30c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_30_"
                  className="st4"
                  d="M175 20h30c2.8 0 5 2.2 5 5s-2.2 5-5 5h-30c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_31_"
                  className="st4"
                  d="M185 100h20c2.8 0 5 2.2 5 5s-2.2 5-5 5h-20c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_32_"
                  className="st4"
                  d="M185 40h20c2.8 0 5 2.2 5 5s-2.2 5-5 5h-20c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_33_"
                  className="st4"
                  d="M195 60h10c2.8 0 5 2.2 5 5s-2.2 5-5 5h-10c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_34_"
                  className="st4"
                  d="M195 80h10c2.8 0 5 2.2 5 5s-2.2 5-5 5h-10c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_35_"
                  className="st4"
                  d="M115 160h90c2.8 0 5 2.2 5 5s-2.2 5-5 5h-90c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_36_"
                  className="st4"
                  d="M75 160h20c2.8 0 5 2.2 5 5s-2.2 5-5 5H75c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_37_"
                  className="st4"
                  d="M155 200h50c2.8 0 5 2.2 5 5s-2.2 5-5 5h-50c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_38_"
                  className="st4"
                  d="M75 200h60c2.8 0 5 2.2 5 5s-2.2 5-5 5H75c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_39_"
                  className="st4"
                  d="M75 60h30c2.8 0 5 2.2 5 5s-2.2 5-5 5H75c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
                <path
                  id="Rectangle_40_"
                  className="st4"
                  d="M75 80h30c2.8 0 5 2.2 5 5s-2.2 5-5 5H75c-2.8 0-5-2.2-5-5s2.2-5 5-5z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),
    description: "An opinionated code formatter.",
    link: "https://prettier.io/",
  },
  {
    title: "Husky",
    logo: () => (
      <svg id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <g id="color">
          <path
            fill="#F4AA41"
            stroke="none"
            d="M23.5,14.5855l-4.5,1.75l-7.25,8.5l-4.5,10.75l2,5.25c1.2554,3.7911,3.5231,7.1832,7.25,10l2.5-3.3333 c0,0,3.8218,7.7098,10.7384,8.9598c0,0,10.2616,1.936,15.5949-0.8765c3.4203-1.8037,4.4167-4.4167,4.4167-4.4167l3.4167-3.4167 l1.5833,2.3333l2.0833-0.0833l5.4167-7.25L64,37.3355l-0.1667-4.5l-2.3333-5.5l-4.8333-7.4167c0,0-2.6667-4.9167-8.1667-3.9167 c0,0-6.5-4.8333-11.8333-4.0833S32.0833,10.6688,23.5,14.5855z"
          />
          <polygon
            fill="#EA5A47"
            stroke="none"
            points="36,47.2521 32.9167,49.6688 30.4167,49.6688 30.3333,53.5021 31.0833,57.0021 32.1667,58.9188 35,60.4188 39.5833,59.8355 41.1667,58.0855 42.1667,53.8355 41.9167,49.8355 39.9167,50.0855"
          />
          <polygon
            fill="#3F3F3F"
            stroke="none"
            points="32.5,36.9188 30.9167,40.6688 33.0833,41.9188 34.3333,42.4188 38.6667,42.5855 41.5833,40.3355 39.8333,37.0855"
          />
        </g>
        <g id="hair" />
        <g id="skin" />
        <g id="skin-shadow" />
        <g id="line">
          <path
            fill="#000000"
            stroke="none"
            d="M29.5059,30.1088c0,0-1.8051,1.2424-2.7484,0.6679c-0.9434-0.5745-1.2424-1.8051-0.6679-2.7484 s1.805-1.2424,2.7484-0.6679S29.5059,30.1088,29.5059,30.1088z"
          />
          <path
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M33.1089,37.006h6.1457c0.4011,0,0.7634,0.2397,0.9203,0.6089l1.1579,2.7245l-2.1792,1.1456 c-0.6156,0.3236-1.3654-0.0645-1.4567-0.754"
          />
          <path
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M34.7606,40.763c-0.1132,0.6268-0.7757,0.9895-1.3647,0.7471l-2.3132-0.952l1.0899-2.9035 c0.1465-0.3901,0.5195-0.6486,0.9362-0.6486"
          />
          <path
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M30.4364,50.0268c0,0-0.7187,8.7934,3.0072,9.9375c2.6459,0.8125,5.1497,0.5324,6.0625-0.25 c0.875-0.75,2.6323-4.4741,1.8267-9.6875"
          />
          <path
            fill="#000000"
            stroke="none"
            d="M44.2636,30.1088c0,0,1.805,1.2424,2.7484,0.6679c0.9434-0.5745,1.2424-1.8051,0.6679-2.7484 c-0.5745-0.9434-1.805-1.2424-2.7484-0.6679C43.9881,27.9349,44.2636,30.1088,44.2636,30.1088z"
          />
          <path
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M25.6245,42.8393c-0.475,3.6024,2.2343,5.7505,4.2847,6.8414c1.1968,0.6367,2.6508,0.5182,3.7176-0.3181l2.581-2.0233l2.581,2.0233 c1.0669,0.8363,2.5209,0.9548,3.7176,0.3181c2.0504-1.0909,4.7597-3.239,4.2847-6.8414"
          />
          <path
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M19.9509,28.3572c-2.3166,5.1597-0.5084,13.0249,0.119,15.3759c0.122,0.4571,0.0755,0.9355-0.1271,1.3631l-1.9874,4.1937 c-0.623,1.3146-2.3934,1.5533-3.331,0.4409c-3.1921-3.7871-8.5584-11.3899-6.5486-16.686 c7.0625-18.6104,15.8677-18.1429,15.8677-18.1429c2.8453-1.9336,13.1042-6.9375,24.8125,0.875c0,0,8.6323-1.7175,14.9375,16.9375 c1.8036,5.3362-3.4297,12.8668-6.5506,16.6442c-0.9312,1.127-2.7162,0.8939-3.3423-0.4272l-1.9741-4.1656 c-0.2026-0.4275-0.2491-0.906-0.1271-1.3631c0.6275-2.3509,2.4356-10.2161,0.119-15.3759"
          />
          <path
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M52.6309,46.4628c0,0-3.0781,6.7216-7.8049,8.2712"
          />
          <path
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M19.437,46.969c0,0,3.0781,6.0823,7.8049,7.632"
          />
          <line
            x1="36.2078"
            x2="36.2078"
            y1="47.3393"
            y2="44.3093"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
        </g>
      </svg>
    ),
    description: "Git hooks made easy. (lint-staged, commitlint)",
    link: "https://github.com/typicode/husky",
  },
  {
    title: "Lucide React",
    logo: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M14 12C14 9.79086 12.2091 8 10 8C7.79086 8 6 9.79086 6 12C6 16.4183 9.58172 20 14 20C18.4183 20 22 16.4183 22 12C22 8.446 20.455 5.25285 18 3.05557"
          stroke="#fff"
        />
        <path
          d="M10 12C10 14.2091 11.7909 16 14 16C16.2091 16 18 14.2091 18 12C18 7.58172 14.4183 4 10 4C5.58172 4 2 7.58172 2 12C2 15.5841 3.57127 18.8012 6.06253 21"
          stroke="#F56565"
        />
      </svg>
    ),
    description: "A simply beautiful icon set.",
    link: "https://lucide.dev",
  },
];

const Home = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const text = "pnpx degit rajput-hemant/nextjs-template <project-name>";

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

      <section className="container mt-8 flex flex-col items-center gap-4 lg:flex-row">
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
              degit rajput-hemant/nextjs-template {"<project-name>"}
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
              <div className="mb-3.5 h-14 w-14">{<f.logo />}</div>

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
