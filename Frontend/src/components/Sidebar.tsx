import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <nav className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 bg-white flex-wrap items-center">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Applicants
            </h6>
            {/* Navigation */}
            <ul className="md:min-w-full flex flex-col list-none">
              <li className="inline-flex">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                  to="/"
                >
                  <i className="fas fa-paint-brush mr-2 text-blueGray-400 text-base"></i> Styles
                </Link>
              </li>
            </ul>
        </div>
      </nav>
    </>
  );
}