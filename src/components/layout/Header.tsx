"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import {
  NavigationItemProps,
  navigationItems,
  SocialLinkProps,
  socialLinks,
  info,
} from "@/data/Header";

const NavigationItem = ({
  item,
  isActive = false,
  onClick,
}: NavigationItemProps) => (
  <a
    href={`#${item}`}
    className="flex items-center group w-min px-1"
    onClick={onClick}
  >
    <span
      className={clsx(
        "mr-2 text-lovie w-2.5 select-none font-medium transition-all duration-300",
        {
          "text-frost scale-125 opacity-100": isActive,
          "scale-100 opacity-60": !isActive,
        }
      )}
    >
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
  const sections = navigationItems;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveItem(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="mt-16 hidden lg:block space-y-2">
      {sections.map((name) => (
        <NavigationItem
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
  return (
    <div className="px-1 flex space-x-5 mt-8 items-center">
      {socialLinks.map((link) => (
        <SocialLink key={link.link} {...link} />
      ))}
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex flex-col justify-between lg:top-0 w-full lg:w-[48%] lg:max-h-screen lg:sticky lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          <a href="https://dejesusbg.netlify.app">{info.name}</a>
        </h1>
        <h2 className="mt-3 text-lg sm:text-xl font-normal">{info.title}</h2>
        <p className="leading-normal mt-4 max-w-xs">{info.description}</p>
        <Navigation />
      </div>
      <div>
        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;
