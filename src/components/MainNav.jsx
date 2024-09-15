import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

export const RESUME_URL = "https://drive.google.com/file/d/1XCFzIutaDbF6rE1_EDms30n42VbYsq6u/view";

export default function MainNav() {
  return (
    <section className="pb-[65px]">
      <nav className="fixed h-[65px] bg-white text-gray-900 w-full border-b border-b-gray-200">
        <div
          className={`px-2 md:min-w-[600px] max-w-[750px] mx-auto flex justify-between items-center h-[65px]`}
        >
          <Link to="/" className="font-libreBaskerville text-2xl">
            Eduardo Garza
          </Link>
          <div className="flex">
            <Link to="/blog" className="hover:underline text-sm ml-6">
              Blog
            </Link>
            <Link to="/projects" className="hover:underline text-sm ml-6">
              Projects
            </Link>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-sm ml-6 flex items-center"
            >
              <ArrowTopRightOnSquareIcon className="w-4 h-4 block text-gray-800" />
              <span className="ml-2">Resume</span>
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}
