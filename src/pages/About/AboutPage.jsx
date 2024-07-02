import React from "react";
import RootLayout from "../../components/RootLayout";

export default function AboutPage() {
  const aboutMe = [
    "Born in Monterrey, Mexico",
    "Live in Vancouver, Canada",
    "Bachelor's Degree in Computer Science & Business from UBC (2015-2020)",
    "Currently working as a Software Engineer at Spring Financial (2023 - Present)",
    "Senior Full-Stack Software Engineer with 5+ years of experience",
    "Managerial and operations experience from the manufacturing industry",
    "Expert using React, Python, Node, MySQL, Postgres, Docker, and AWS",
    "Also experienced with TypeScript, MongoDB, Redis, Firebase/Firestore, Heroku",
  ];

  return (
    <RootLayout>
      <section className="mt-20 mb-6">
        <h1 className="text-3xl font-semibold mb-6">About Me</h1>
        {aboutMe.map((item, index) => (
          <li className="text-gray-900 mt-2 leading-6 text-sm" key={index}>
            {item}
          </li>
        ))}
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
        <p className="text-gray-900 mt-2 leading-6 text-sm italic mb-2">
          See my full work experience on LinkedIn
        </p>
        <a
          className="text-sm text-blue-600 underline hover:text-blue:800"
          href="https://www.linkedin.com/in/eduardocgarza"
        >
          LinkedIn - Eduardo Garza
        </a>
      </section>
    </RootLayout>
  );
}
