import React from "react";
import RootLayout from "../../components/RootLayout";
import { RESUME_URL } from "../../components/MainNav";

export default function AboutPage() {
  const aboutMe = [
    "Born in Monterrey, Mexico",
    "Live in Vancouver, Canada (2004-present)",
    "UBC Vancouver: Dual-degree in computer science & business (2015-2020)",
    "Speak English, Spanish, French, Italian",
    "20 years of playing the piano",
  ];

  const workExperience = [
    "Software Engineer @ Spring Financial (2023 - present)",
    "Founder & AI Instructor @ Emerson Academy (2023 - present)",
    "Founder @ Mozart (2020 - 2024)",
    "Lead Manufacturing Consultant @ Gintarini (2022 - 2023)",
    "Software Engineer Contractor (2016-2020)",
  ];
  const skills = [
    "Senior Full-Stack Web Software Engineer",
    "Front-End: React, Next, Tanstack",
    "Back-End: Node, Express, Python, Flask",
    "Dev-Ops: Docker, Kubernetes, AWS, Heroku",
    "Databases: PostgreSQL, MySQL, MongoDB, Redis, Supabase, Firebase/Firestore",
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
