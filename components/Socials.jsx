import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiTwitterXLine
} from "react-icons/ri";
import { FaTelegramPlane, FaEnvelope, FaDiscord, FaPhone } from "react-icons/fa";

export const socialData = [
  {
    name: "Email",
    link: "mailto:dek201229@gmail.com",
    Icon: FaEnvelope,
  },
  {
    name: "Phone",
    //link: "tel:+14692254754",
    link: "tel:+123456789",
    Icon: FaPhone,
  },
  {
    name: "Telegram",
    link: "https://t.me/gold_officiial",
    Icon: FaTelegramPlane,
  },
  {
    name: "Telegram Channel",
    link: "https://t.me/Gold_Communiity",
    Icon: FaTelegramPlane,
  },
  {
    name: "Discord",
    link: "https://discord.com/users/superpanda4664",
    Icon: FaDiscord,
  },
  // {
  //   name: "Github",
  //   // link: "https://github.com/climax-solution",
  //   link: "https://github.com/thehigherbounce",
  //   Icon: RiGithubLine,
  // },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg ">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
