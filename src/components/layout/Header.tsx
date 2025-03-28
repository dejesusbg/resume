"use client";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaSpotify,
  FaEnvelope,
} from "react-icons/fa";
import { IconType } from "react-icons";
import clsx from "clsx";

interface NavItemProps {
  item: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem = ({ item, isActive = false, onClick }: NavItemProps) => (
  <a
    href={`#${item}`}
    className="flex items-center group w-min px-1"
    onClick={onClick}
  >
    <span className="mr-2 text-lovie w-2.5 select-none font-medium">
      {isActive ? ">" : "_"}
    </span>
    <span
      className={clsx(
        "font-normal text-lg tracking-tight grocus:font-bold grocus:tracking-tighter grocus:text-frost",
        { "text-frost !font-bold !tracking-tighter": isActive }
      )}
    >
      {item}
    </span>
  </a>
);

interface SocialLinkProps {
  icon: IconType;
  link: string;
  size: number;
}

const SocialLink = ({ icon: Icon, link, size }: SocialLinkProps) => (
  <a
    href={link}
    className="hover:text-frost"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size={size} />
  </a>
);

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("about");

  const navItems = ["about", "projects", "gallery"];

  return (
    <nav className="mt-16 hidden lg:block space-y-2">
      {navItems.map((name) => (
        <NavItem
          key={name}
          item={name}
          isActive={activeItem === name}
          onClick={() => setActiveItem(name)}
        />
      ))}
    </nav>
  );
};
const SocialLinks = () => {
  const socialLinks = [
    { icon: FaGithub, link: "#gh", size: 24 },
    { icon: FaLinkedin, link: "#li", size: 22 },
    { icon: FaInstagram, link: "#ig", size: 24 },
    { icon: FaSpotify, link: "#sp", size: 24 },
    { icon: FaEnvelope, link: "#em", size: 22 },
  ];

  return (
    <div className="px-1 flex space-x-5 mt-8 items-center">
      {socialLinks.map((link) => (
        <SocialLink key={link.link} {...link} />
      ))}
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="flex flex-col justify-between lg:top-0 w-full lg:w-[48%] lg:max-h-screen lg:sticky lg:py-24">
      <div>
        <h1 className="text-4xl font-bold text-frost tracking-tight sm:text-5xl">
          Ricardo Barrios
        </h1>
        <h2 className="mt-3 text-lg sm:text-xl text-frost font-normal">
          Full-Stack Engineer
        </h2>
        <p className="leading-normal mt-4 max-w-xs">
          I love to build experiences that help others.
        </p>

        <Navigation />
      </div>

      <div>
        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;
