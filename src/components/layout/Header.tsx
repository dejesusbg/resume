import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaSpotify,
  FaEnvelope,
} from "react-icons/fa";
import clsx from "clsx";

const NavItem = ({
  item,
  isActive = false,
}: {
  item: string;
  isActive?: boolean;
}) => {
  return (
    <a href={`#${item}`} className="flex items-center group">
      <span className="mr-2 text-secondary-200">_</span>
      <span
        className={clsx(
          "grocus:text-secondary-100 transition-colors font-normal tracking-tight grocus:font-bold grocus:tracking-tighter",
          {
            "text-white/90 !font-bold !tracking-tighter": isActive,
          }
        )}
      >
        {item}
      </span>
    </a>
  );
};

const Header = () => {
  return (
    <header className="flex flex-col justify-between lg:top-0 w-full lg:w-[48%] lg:max-h-screen lg:sticky lg:py-24">
      <div>
        <h1 className="text-4xl font-bold text-white/90 tracking-tight sm:text-5xl">
          Ricardo Barrios
        </h1>
        <h2 className="mt-3 text-lg sm:text-xl text-white/90 font-normal">
          Full-Stack Engineer
        </h2>
        <p className="leading-normal mt-4 max-w-xs">
          I love to build experiences that help others.
        </p>

        <nav className="mt-16 hidden lg:block space-y-2">
          {[
            { name: "about", isActive: true },
            { name: "experience" },
            { name: "projects" },
            { name: "gallery" },
          ].map(({ name, isActive }) => (
            <NavItem key={name} item={name} isActive={isActive} />
          ))}
        </nav>
      </div>

      <div>
        <div className="ml-1 flex space-x-5 mt-8 items-center">
          <a href="#" className="text-secondary-50 hover:text-secondary-200">
            <FaGithub size={24} />
          </a>
          <a href="#" className="text-secondary-50 hover:text-secondary-200">
            <FaLinkedin size={22} />
          </a>
          <a href="#" className="text-secondary-50 hover:text-secondary-200">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-secondary-50 hover:text-secondary-200">
            <FaSpotify size={24} />
          </a>
          <a href="#" className="text-secondary-50 hover:text-secondary-200">
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
