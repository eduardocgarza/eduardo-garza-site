import React from "react";
import RootLayout from "../../components/RootLayout";
import { RESUME_URL } from "../../components/MainNav";

export default function AboutPage() {
  const aboutMe = [
    "Born in Monterrey, Mexico",
    "Live in Vancouver, Canada (2004-present)",
    "UBC Vancouver: Bachelor's degree, Computer Science & Business (2015-2020)",
    "Fluent in English and Spanish; also speak French and Italian",
    "Love to read political philosophy, economic theory, and fin-tech news",
    "20 years of playing the piano",
  ];

  const workExperience = [
    "Software Engineer at Spring Financial (2023-present)",
    "Software Engineer Contractor from 2016-2020",
    "Senior Full-Stack Software Engineer with 5 years of professional experience",
    "Managerial and operations experience from the manufacturing industry",
  ];
  const skills = [
    "Expert using React, Python, Node, MySQL, Postgres, Docker, and AWS",
    "Proficient in TypeScript, MongoDB, Redis, Firebase/Firestore, Heroku",
  ];

  return (
    <RootLayout>
      <section className="py-20">
        <section className="mb-10">
          <h2 className="font-libreBaskerville text-[28px] mb-4">About</h2>
          {aboutMe.map((item, index) => (
            <li className="text-gray-900 mt-2 mb-3 text-[13px]" key={index}>
              {item}
            </li>
          ))}
        </section>
        <section className="mb-10">
          <h2 className="font-libreBaskerville text-[28px] mb-4">Work</h2>
          <p className="text-gray-900 mt-2 text-[13px] mb-4">
            Full work experience on{" "}
            <a
              href="https://www.linkedin.com/in/eduardocgarza"
              className="text-xs text-blue-600 underline hover:text-blue:800"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
          {workExperience.map((item, index) => (
            <li className="text-gray-900 mt-2 mb-3 text-[13px]" key={index}>
              {item}
            </li>
          ))}
        </section>
        <section className="mb-10">
          <h2 className="font-libreBaskerville text-[28px] mb-4">Skills</h2>
          <p className="text-gray-900 mt-2 text-[13px] mb-4">
            All skills on {" "}
            <a
              href={RESUME_URL}
              className="text-xs text-blue-600 underline hover:text-blue:800"
              target="_blank"
              rel="noreferrer"
            >
              resume
            </a>
          </p>
          {skills.map((item, index) => (
            <li className="text-gray-900 mt-2 mb-3 text-[13px]" key={index}>
              {item}
            </li>
          ))}
        </section>
      </section>
    </RootLayout>
  );
}
