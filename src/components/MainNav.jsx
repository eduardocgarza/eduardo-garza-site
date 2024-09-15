import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import eduardo from "../assets/eduardo.jpg";
import React from "react";
import { Link } from "react-router-dom";

export const RESUME_URL = "https://drive.google.com/file/d/1XCFzIutaDbF6rE1_EDms30n42VbYsq6u/view";

export default function MainNav() {
  return (
    <section>
      <nav className="fixed md:h-[65px] bg-white text-gray-900 w-full border-b border-b-gray-200 py-4 md:py-0">
        <div
          className={`px-2 md:min-w-[600px] max-w-[750px] mx-auto flex flex-col md:flex-row justify-between items-center md:h-[65px]`}
        >
          <Link to="/" className="flex items-center font-libreBaskerville text-2xl">
            <div className="w-[45px] h-[45px] overflow-hidden rounded-lg">
            <img src={eduardo} alt="Eduardo Garza" className="block scale-[115%] hover:scale-[125%] transition duration-[300ms]" /></div> <span className="ml-3">Eduardo Garza</span>
          </Link>
          <div className="flex pt-4 md:pt-0">
            <Link to="/projects" className="hover:underline text-sm ml-6">
              Projects
            </Link>
            <Link to="/publications" className="hover:underline text-sm ml-6">
              Writings
            </Link>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-sm ml-6 flex items-center"
            >
              <span className="mr-2">Resume</span><ArrowTopRightOnSquareIcon className="w-4 h-4 block text-gray-800" />
            </a>
          </div>
        </div>
      </nav>
      <section className="pt-[115px] md:pt-[65px]"></section>
    </section>
  );
}
