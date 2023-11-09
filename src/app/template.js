"use client";
import { useEffect, useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineCases } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { BsMeta } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { SiWellfound } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo_images/logo.png";

export default function Template({ children }) {
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (animation) {
        setAnimation(false);
      }
    }, 2000);
  }, [animation]);

  const iconItems = [
    {
      id: 0,
      pos: "header",
      link: "/",
      icon: <HiOutlineHome />,
    },
    {
      id: 1,
      pos: "header",
      link: "/about",
      icon: <SiAboutdotme />,
    },
    {
      id: 2,
      pos: "header",
      link: "/portfolio",
      icon: <MdOutlineCases />,
    },
    {
      id: 3,
      pos: "header",
      link: "/contact",
      icon: <RiContactsFill />,
    },
    {
      id: 4,
      pos: "footer",
      link: "https://www.linkedin.com/in/daronkwiafe/",
      icon: <FaLinkedinIn />,
    },
    {
      id: 5,
      pos: "footer",
      link: "https://github.com/Daron976",
      icon: <FaGithub />,
    },
    {
      id: 6,
      pos: "footer",
      link: "https://angel.co/u/daronkwiafe",
      icon: <SiWellfound />,
    },
    {
      id: 7,
      pos: "footer",
      link: "https://www.facebook.com/daron.wiafe",
      icon: <BsMeta />,
    },
    {
      id: 8,
      pos: "footer",
      link: "https://twitter.com/WiafeDaron",
      icon: <FaXTwitter />,
    },
    {
      id: 9,
      pos: "footer",
      link: "https://www.instagram.com/sagineer976/",
      icon: <BsInstagram />,
    },
  ];

  return (
    <>
      <header>
        <nav className="desktop-header">
          <div className="imgContainer">
            <Image src={logo} width={88} height={80} alt="logo" />
          </div>
          <div className="flex menu-container transition">
            <ul className="desktop-menu flex transition">
              {iconItems
                .filter((item) => item.pos !== "footer")
                .map((item) => (
                  <li key={item.id}>
                    <Link href={item.link}>
                      <IconContext.Provider
                        value={{ size: "1.8rem", className: "nav-icon" }}
                      >
                        {item.icon}
                      </IconContext.Provider>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </nav>
      </header>
      {children}
      <footer>
        <div className="social-links">
          <ul className="flex">
            {iconItems
              .filter((item) => item.pos !== "header")
              .map((item) => (
                <li key={item.id}>
                  <Link href={item.link}>
                    <IconContext.Provider
                      value={{ size: "2.5rem", className: "social-icon" }}
                    >
                      {item.icon}
                    </IconContext.Provider>
                  </Link>
                </li>
              ))}
          </ul>
          <div className="footer-text">
            <p>
              <span className="email">daronkwiafe@gmail.com</span>
              <span className="separator firstSep">|</span>
              <span className="phone">+27 65 747 8746</span>
              <span className="separator secSep">|</span>
              <span className="location">Sandton, South Africa</span>
            </p>
            <p>©2023 Daron Wiafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
