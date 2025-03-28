import { IconType } from "react-icons";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
} from "react-icons/fa";

export interface NavigationItemProps {
  item: string;
  isActive?: boolean;
  onClick?: () => void;
}
export interface SocialLinkProps {
  icon: IconType;
  link: string;
  size: number;
}

export const navigationItems = ["about", "projects", "gallery"];

export const socialLinks = [
  { icon: FaGithub, link: "https://github.com/dejesusbg", size: 24 },
  { icon: FaLinkedin, link: "https://linkedin.com/in/dejesusbg", size: 22 },
  { icon: FaInstagram, link: "#instagram", size: 24 },
  { icon: FaSpotify, link: "#spotify", size: 24 },
  { icon: FaEnvelope, link: "#email", size: 22 },
];

export const info = {
  name: "Ricardo Barrios",
  title: "Full-Stack Engineer",
  description: "I love to build experiences that help others.",
};
