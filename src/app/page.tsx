"use client";

import "@/styles/layout.css";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Clipboard,
  ClipboardCheck,
  FlameKindling,
  Github,
  Mouse,
  MoveUpRight,
} from "lucide-react";

import { useEventListener } from "@/hooks/use-event-listner";

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
  {
    title: "Bun",
    logo: () => (
      <svg viewBox="0 0 128 128">
        <path d="M113.744 41.999a18.558 18.558 0 0 0-.8-.772c-.272-.246-.528-.524-.8-.771s-.528-.525-.8-.771c-.272-.247-.528-.525-.8-.772s-.528-.524-.8-.771-.528-.525-.8-.772-.528-.524-.8-.771c7.936 7.52 12.483 17.752 12.656 28.481 0 25.565-26.912 46.363-60 46.363-18.528 0-35.104-6.526-46.128-16.756l.8.772.8.771.8.772.8.771.8.772.8.771.8.771c11.008 10.662 27.952 17.527 46.928 17.527 33.088 0 60-20.797 60-46.285 0-10.893-4.864-21.215-13.456-29.33z" />
        <path
          fill="#fbf0df"
          d="M116.8 65.08c0 23.467-25.072 42.49-56 42.49s-56-19.023-56-42.49c0-14.55 9.6-27.401 24.352-35.023C43.904 22.435 53.088 14.628 60.8 14.628S75.104 21 92.448 30.058C107.2 37.677 116.8 50.53 116.8 65.08Z"
        />
        <path
          fill="#f6dece"
          d="M116.8 65.08a32.314 32.314 0 0 0-1.28-8.918c-4.368 51.377-69.36 53.846-94.912 38.48 11.486 8.584 25.66 13.144 40.192 12.928 30.88 0 56-19.054 56-42.49z"
        />
        <path
          fill="#fffefc"
          d="M39.248 27.234c7.152-4.135 16.656-11.896 26-11.911a15.372 15.372 0 0 0-4.448-.695c-3.872 0-8 1.93-13.2 4.83-1.808 1.018-3.68 2.144-5.664 3.317-3.728 2.222-8 4.736-12.8 7.251C13.904 37.972 4.8 51.071 4.8 65.08v1.836c9.696-33.033 27.312-35.547 34.448-39.682z"
        />
        <path
          fill="#ccbea7"
          d="M56.192 18.532A24.553 24.553 0 0 1 53.867 29.1a25.407 25.407 0 0 1-6.683 8.671c-.448.386-.096 1.127.48.91 5.392-2.02 12.672-8.068 9.6-20.272-.128-.695-1.072-.51-1.072.123zm3.632 0a24.474 24.474 0 0 1 3.646 10.12c.445 3.587.08 7.224-1.07 10.662-.192.54.496 1.003.88.556 3.504-4.32 6.56-12.899-2.592-22.156-.464-.4-1.184.216-.864.756zm4.416-.262a25.702 25.702 0 0 1 7.521 7.925A24.71 24.71 0 0 1 75.2 36.414c-.016.13.02.26.101.365a.543.543 0 0 0 .718.117.509.509 0 0 0 .221-.313c1.472-5.384.64-14.564-11.472-19.332-.64-.246-1.056.587-.528.957zM34.704 34.315a27.418 27.418 0 0 0 9.91-5.222 26.262 26.262 0 0 0 6.842-8.663c.288-.556 1.2-.34 1.056.277-2.768 12.343-12.032 14.92-17.792 14.58-.608.016-.592-.802-.016-.972z"
        />
        <path d="M60.8 111.443c-33.088 0-60-20.798-60-46.363 0-15.429 9.888-29.823 26.448-38.448 4.8-2.469 8.912-4.953 12.576-7.128 2.016-1.203 3.92-2.33 5.76-3.379C51.2 12.916 56 10.771 60.8 10.771c4.8 0 8.992 1.852 14.24 4.845 1.6.88 3.2 1.836 4.912 2.885 3.984 2.376 8.48 5.06 14.4 8.131 16.56 8.625 26.448 23.004 26.448 38.448 0 25.565-26.912 46.363-60 46.363zm0-96.814c-3.872 0-8 1.928-13.2 4.829-1.808 1.018-3.68 2.144-5.664 3.317-3.728 2.222-8 4.736-12.8 7.251C13.904 37.972 4.8 51.071 4.8 65.08c0 23.436 25.12 42.506 56 42.506s56-19.07 56-42.506c0-14.01-9.104-27.108-24.352-35.023-6.048-3.086-10.768-5.986-14.592-8.27-1.744-1.033-3.344-1.99-4.8-2.838-4.848-2.778-8.384-4.32-12.256-4.32z" />
        <path
          fill="#b71422"
          d="M72.08 76.343c-.719 2.839-2.355 5.383-4.672 7.267a11.07 11.07 0 0 1-6.4 2.9 11.13 11.13 0 0 1-6.608-2.9c-2.293-1.892-3.906-4.436-4.608-7.267a1.073 1.073 0 0 1 .05-.5 1.11 1.11 0 0 1 .272-.428 1.19 1.19 0 0 1 .958-.322h19.744a1.185 1.185 0 0 1 .947.33 1.073 1.073 0 0 1 .317.92z"
        />
        <path
          fill="#ff6164"
          d="M54.4 83.733a11.24 11.24 0 0 0 6.592 2.932 11.239 11.239 0 0 0 6.576-2.932 16.652 16.652 0 0 0 1.6-1.65 10.904 10.904 0 0 0-3.538-2.564 11.26 11.26 0 0 0-4.302-1 10.121 10.121 0 0 0-4.549 1.192 9.71 9.71 0 0 0-3.451 3.097c.368.323.688.632 1.072.925z"
        />
        <path d="M54.656 82.514a8.518 8.518 0 0 1 2.97-2.347 8.836 8.836 0 0 1 3.734-.862 9.78 9.78 0 0 1 6.4 2.608c.368-.386.72-.787 1.056-1.188-2.035-1.87-4.726-2.933-7.536-2.978a10.487 10.487 0 0 0-4.335.975 10.125 10.125 0 0 0-3.489 2.666c.378.396.779.772 1.2 1.126z" />
        <path d="M60.944 87.436a12.078 12.078 0 0 1-7.12-3.086c-2.477-2.02-4.22-4.75-4.976-7.791-.054-.27-.045-.55.027-.817a1.83 1.83 0 0 1 .389-.726 2.25 2.25 0 0 1 .81-.595 2.32 2.32 0 0 1 .998-.192h19.744c.343-.007.683.06.996.196a2.3 2.3 0 0 1 .812.591c.182.212.313.46.382.728.07.267.076.545.018.815-.756 3.042-2.5 5.771-4.976 7.791a12.078 12.078 0 0 1-7.104 3.086zm-9.872-11.417c-.256 0-.32.108-.336.139.676 2.638 2.206 4.999 4.368 6.742a10.122 10.122 0 0 0 5.84 2.7 10.207 10.207 0 0 0 5.84-2.67c2.155-1.745 3.679-4.106 4.352-6.741a.333.333 0 0 0-.14-.113.348.348 0 0 0-.18-.026z" />
        <path
          fill="#febbd0"
          d="M85.152 77.3c5.17 0 9.36-2.377 9.36-5.308s-4.19-5.307-9.36-5.307c-5.17 0-9.36 2.376-9.36 5.307 0 2.931 4.19 5.307 9.36 5.307zm-48.432 0c5.17 0 9.36-2.377 9.36-5.308s-4.19-5.307-9.36-5.307c-5.17 0-9.36 2.376-9.36 5.307 0 2.931 4.19 5.307 9.36 5.307z"
        />
        <path d="M41.12 69.863a9.052 9.052 0 0 0 4.902-1.425 8.578 8.578 0 0 0 3.254-3.812 8.22 8.22 0 0 0 .508-4.913 8.41 8.41 0 0 0-2.408-4.357 8.92 8.92 0 0 0-4.514-2.33 9.12 9.12 0 0 0-5.096.48 8.755 8.755 0 0 0-3.96 3.131 8.287 8.287 0 0 0-1.486 4.725c0 2.252.927 4.412 2.577 6.005 1.65 1.594 3.888 2.492 6.223 2.496zm39.632 0a9.054 9.054 0 0 0 4.915-1.403 8.582 8.582 0 0 0 3.275-3.802 8.22 8.22 0 0 0 .528-4.917 8.408 8.408 0 0 0-2.398-4.368 8.92 8.92 0 0 0-4.512-2.344 9.12 9.12 0 0 0-5.103.473 8.756 8.756 0 0 0-3.967 3.13 8.287 8.287 0 0 0-1.49 4.73c-.004 2.245.914 4.4 2.555 5.994 1.64 1.593 3.869 2.495 6.197 2.507z" />
        <path
          fill="#fff"
          d="M38.4 61.902a3.4 3.4 0 0 0 1.844-.531c.547-.35.974-.847 1.227-1.43a3.088 3.088 0 0 0 .195-1.847 3.16 3.16 0 0 0-.902-1.639 3.351 3.351 0 0 0-1.696-.878 3.426 3.426 0 0 0-1.916.179 3.29 3.29 0 0 0-1.489 1.176 3.113 3.113 0 0 0-.559 1.776c0 .844.347 1.654.964 2.253a3.374 3.374 0 0 0 2.332.94zm39.632 0a3.4 3.4 0 0 0 1.844-.531c.547-.35.974-.847 1.227-1.43a3.088 3.088 0 0 0 .195-1.847 3.16 3.16 0 0 0-.902-1.639 3.351 3.351 0 0 0-1.696-.878 3.426 3.426 0 0 0-1.916.179 3.29 3.29 0 0 0-1.489 1.176 3.113 3.113 0 0 0-.559 1.776c0 .84.342 1.644.953 2.242.61.598 1.44.94 2.311.952z"
        />
      </svg>
    ),
    description: "Bun is a fast JavaScript all-in-one toolkit",
    link: "https://bun.sh",
  },
];

const packageManagers = {
  bun: "bunx",
  pnpm: "pnpx",
  npm: "npx",
  yarn: "yarn dlx",
};

type PackageManagers = keyof typeof packageManagers;

const Home = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  const dropdownButtonsRef = useRef<HTMLButtonElement[]>([]);
  const cardsRef = useRef<HTMLAnchorElement[]>([]);
  const cardWrapperRef = useRef<HTMLDivElement>(null);

  // close dropdown on ESC key press
  useEventListener("keydown", (e) => {
    if (e.key === "Escape") setShowDropdown(false);
  });

  // dropdown up and down arrow key navigation
  useEventListener("keydown", (e) => {
    if (!showDropdown) return;
    e.preventDefault();

    if (e.key === "ArrowDown") {
      const curr = dropdownButtonsRef.current.findIndex(
        (el) => el === document.activeElement
      );
      const next = curr + 1;

      if (next < dropdownButtonsRef.current.length) {
        dropdownButtonsRef.current[next].focus();
      } else {
        dropdownButtonsRef.current[0].focus();
      }
    }

    if (e.key === "ArrowUp") {
      const curr = dropdownButtonsRef.current.findIndex(
        (el) => el === document.activeElement
      );
      const prev = curr - 1;

      if (prev >= 0) {
        dropdownButtonsRef.current[prev].focus();
      } else {
        dropdownButtonsRef.current[
          dropdownButtonsRef.current.length - 1
        ].focus();
      }
    }
  });

  // copy on Enter key press
  useEventListener("keydown", (e) => {
    if (!showDropdown) return;
    e.preventDefault();

    if (e.key === "Enter") {
      const currentIndex = dropdownButtonsRef.current.findIndex(
        (el) => el === document.activeElement
      );
      copyToClipboard(
        Object.keys(packageManagers)[currentIndex] as PackageManagers
      );
    }
  });

  useEffect(() => {
    cardWrapperRef.current!.onmousemove = (e) => {
      for (const card of cardsRef.current) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);

  const copyToClipboard = (pm: PackageManagers) => {
    setShowDropdown(false);
    setIsCopied(true);

    const text = `${packageManagers[pm]} degit rajput-hemant/nextjs-template <project-name>`;

    try {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <main className="layout min-h-screen w-full bg-black bg-fixed text-white selection:bg-zinc-300 selection:text-black">
      <section className="container px-4 py-12 md:px-6 md:pt-24 lg:pt-32 xl:pt-48">
        <Image
          src="/nextjs-light.svg"
          alt="Next.js logo"
          height={150}
          width={150}
          className="mx-auto mb-6 max-w-[100px] md:max-w-full"
        />

        <div className="grid items-center gap-6">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="mb-6 space-y-2">
              <h1 className="bg-gradient-to-r from-white to-gray-500 bg-clip-text pb-2 text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl">
                Next.js Starter Template
              </h1>

              <p className="mx-auto max-w-3xl text-sm text-zinc-200 sm:text-base md:text-xl">
                A Next.js template with TypeScript, TailwindCSS, Lucide Icons
                and pre-configured with ESLint, Prettier and Husky git hooks.
              </p>
            </div>

            <div className="relative mx-auto max-w-xs rounded-xl border border-zinc-700 p-1 text-zinc-200 shadow-md duration-300 hover:shadow-black sm:max-w-full">
              <p className="flex w-full cursor-pointer items-center gap-2 rounded-md bg-white/5 px-2 py-3 font-mono hover:bg-white/10">
                <span className="text-orange-500">$</span>

                <span className="truncate">
                  bunx degit rajput-hemant/nextjs-template {"<project-name>"}
                </span>

                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  {isCopied ? (
                    <ClipboardCheck className="h-5 w-5" />
                  ) : (
                    <Clipboard className="h-5 w-5" />
                  )}
                </button>
              </p>

              {showDropdown && (
                <div className="absolute -right-20 top-8 z-10 rounded-xl border border-zinc-700 p-1 hover:border-zinc-600">
                  <ul className="sticky flex flex-col rounded-md bg-zinc-800">
                    {(Object.keys(packageManagers) as PackageManagers[]).map(
                      (pm, i) => (
                        <button
                          key={i}
                          ref={(el) => {
                            dropdownButtonsRef.current[i] = el!;
                          }}
                          onClick={() => copyToClipboard(pm)}
                          className="m-0.5 w-20 cursor-pointer rounded-md px-3 py-0.5 outline-none ring-zinc-600 hover:bg-zinc-700/50 hover:text-green-500 focus:ring-2"
                        >
                          {pm}
                        </button>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <a
                href="https://github.com/new?template_name=nextjs-template&template_owner=rajput-hemant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex rounded-full border border-zinc-700 px-6 py-3 duration-300 hover:bg-white/10 hover:shadow-md hover:shadow-black"
              >
                <FlameKindling className="mr-2 h-5 w-5" />
                Use Template
              </a>

              <a
                href="https://github.com/rajput-hemant/nextjs-template"
                target="_blank"
                rel="noopener noreferrer"
                className="flex rounded-full border border-zinc-700 px-6 py-3 duration-300 hover:bg-white/10 hover:shadow-md hover:shadow-black"
              >
                <Github className="mr-2 h-5 w-5 " />
                View Repo
              </a>
            </div>
          </div>
        </div>
      </section>

      <button
        className="mx-auto flex animate-bounce justify-center text-zinc-600 duration-150 hover:text-white"
        onClick={() =>
          featuresRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <Mouse strokeWidth={1} className="h-10 w-10" />
      </button>

      <section ref={featuresRef} className="container mt-10">
        <h2 className="mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-center text-xl font-bold tracking-tight text-transparent sm:text-3xl xl:text-4xl">
          Features
        </h2>

        <div
          ref={cardWrapperRef}
          className="cards grid gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
        >
          {features.map((f, i) => (
            <a
              key={i}
              ref={(el) => (cardsRef.current![i] = el!)}
              href={f.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card group relative h-48 w-full rounded-xl bg-zinc-800 shadow-md shadow-black outline-none before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-xl after:opacity-0 after:transition-opacity after:duration-500 hover:shadow-xl hover:shadow-black hover:before:opacity-100"
            >
              <div className="absolute inset-[1px] z-[2] flex flex-col gap-2.5 rounded-xl bg-black/75 p-2.5">
                <div className="relative h-full w-full overflow-hidden rounded-md p-4">
                  <div className="mb-3.5 h-14 w-14">{<f.logo />}</div>

                  <h3 className="text-xl">
                    <div className="flex h-full w-full items-center after:absolute after:inset-0">
                      {f.title}

                      <MoveUpRight
                        strokeWidth={0.75}
                        className="ml-1 h-4 w-4 text-white"
                      />
                    </div>
                  </h3>

                  <p className="mt-2 text-sm text-gray-300 group-hover:text-white">
                    {f.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="container mt-10 grid place-items-center pb-4 text-neutral-400">
        <span className="flex items-center gap-1">
          &copy;
          <span>{new Date().getFullYear()}</span>
          <a
            href="https://github.com/rajput-hemant"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 duration-200 hover:text-white hover:underline"
          >
            rajput-hemant@github
          </a>
        </span>
      </footer>
    </main>
  );
};

export default Home;
