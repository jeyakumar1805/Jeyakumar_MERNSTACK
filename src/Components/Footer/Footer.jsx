import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:jeya3809@gmail.com" className="hover:underline">
            jeya3809@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/jeya-kumar-097773292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app://www.linkedin.com/in/ilamurugan-a-490a8b311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/jeyakumar
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub size={20} />
          <a
            href="https://https://github.com/jeyakumar1805.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/jeyakumar1805
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;