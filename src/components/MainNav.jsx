import React from "react";
import { Link } from "react-router-dom";

export default function MainNav() {
  return (
    <section className="pb-[65px]">
      <nav className="fixed h-[65px] bg-black text-white w-full">
        <div
          className={`px-2 md:min-w-[600px] max-w-[600px] mx-auto flex justify-between items-center h-[65px]`}
        >
          <Link to="/" className="font-serif text-xl">
            Eduardo Garza
          </Link>
          <div className="flex">
            <Link to="/about" className="hover:underline text-xs mx-2">
              About
            </Link>
            <a
              href="https://drive.google.com/file/d/1PnZSGKjbLYKPW0RnICMgvbgh--lnUQGN/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-xs mx-2"
            >
              Resume
            </a>
            <Link to="/writings" className="hover:underline text-xs mx-2">
              Writings
            </Link>
            <Link to="/projects" className="hover:underline text-xs mx-2">
              Projects
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
}
