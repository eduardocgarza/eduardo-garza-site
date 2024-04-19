import React from "react";
import { Link } from "react-router-dom";

export default function MainNav() {
  return (
    <section className="pb-[50px]">
      <nav className="fixed h-[50px] bg-black text-white w-full">
        <div
          className={`px-2 md:min-w-[600px] max-w-[600px] mx-auto flex justify-between items-center h-[50px]`}
        >
          <Link to="/" className="text-sm">
            Eduardo Garza
          </Link>
          <div className="flex">
            {/* <Link to="/hardware" className="hover:underline text-sm mx-2">
              Hardware
            </Link>
            <Link to="/software" className="hover:underline text-sm mx-2">
              Software
            </Link> */}
              <a href="https://eduardocgarza.webflow.io" target="_blank" rel="noreferrer" className="hover:underline text-sm mx-2">
              About
            </a>
            <a href="https://drive.google.com/file/d/1PnZSGKjbLYKPW0RnICMgvbgh--lnUQGN/view?usp=sharing" target="_blank" rel="noreferrer" className="hover:underline text-sm mx-2">
              Resume
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}
