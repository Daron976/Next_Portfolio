"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineCases } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { IconContext } from "react-icons";
import { BsMeta } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo_images/logo.png";
import "./globals.css";

export default function Home() {
  const [animation, setAnimation] = useState(true);
  const [clicked, setClicked] = useState(false);

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
      link: "/contacts",
      icon: <GrContactInfo />,
    },
    {
      id: 4,
      pos: "footer",
      link: "/contacts",
      icon: <FaLinkedinIn />,
    },
    {
      id: 5,
      pos: "footer",
      link: "/contacts",
      icon: <FaGithub />,
    },
    {
      id: 6,
      pos: "footer",
      link: "/contacts",
      icon: <FaAngellist />,
    },
    {
      id: 7,
      pos: "footer",
      link: "/contacts",
      icon: <BsMeta />,
    },
    {
      id: 8,
      pos: "footer",
      link: "/contacts",
      icon: <BsTwitter />,
    },
    {
      id: 9,
      pos: "footer",
      link: "/contacts",
      icon: <BsInstagram />,
    },
  ];
  return (
    <>
      <header>
        <nav className="desktop-header">
          <div>
            <Image src={logo} width={165} height={150} alt="logo" />
          </div>
          <div className="flex menu-container transition">
            <div
              className={
                clicked
                  ? "menu-btn-container trigger-in"
                  : "menu-btn-container trigger-out"
              }
              onClick={() => {
                if (!clicked) {
                  setClicked(true);
                } else setClicked(false);
              }}
            >
              <IconContext.Provider
                value={{ size: "2.5em", className: "menu-open-btn transition" }}
              >
                {clicked ? <HiMenuAlt2 /> : <HiMenuAlt3 />}
              </IconContext.Provider>
            </div>
            <ul
              className={
                clicked
                  ? "desktop-menu flex transition open"
                  : "desktop-menu display-none transition close"
              }
            >
              {iconItems
                .filter((item) => item.pos !== "footer")
                .map((item) => (
                  <li key={item.id}>
                    <Link href={item.link}>
                      <IconContext.Provider value={{ size: "2em" }}>
                        {item.icon}
                      </IconContext.Provider>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </nav>
      </header>
      <main className={`${styles.content} ${styles.flex}`} data-testid="home">
        <div className="home-header">
          <h1
            className={
              animation
                ? `${styles.name_animation} ${styles.name}`
                : `${styles.name}`
            }
          >
            Daron Wiafe
          </h1>
          <p
            className={
              animation
                ? `${styles.subtext_animation} ${styles.subtext}`
                : `${styles.subtext}`
            }
          >
            Software developer
          </p>
          <p className={styles.msg}>
            Developing more than just your technical products
          </p>
        </div>
      </main>
      <footer>
        <div className="social-links">
          <ul className="flex">
            {iconItems
              .filter((item) => item.pos !== "header")
              .map((item) => (
                <li key={item.id}>
                  <Link href={item.link}>
                    <IconContext.Provider
                      value={{ size: "2.5em", className: "social-icon" }}
                    >
                      {item.icon}
                    </IconContext.Provider>
                  </Link>
                </li>
              ))}
          </ul>
          <div>
            <p className="footer-text">
              daronkwiafe@gmail.com<br/>
              +27 65 747 8746<br/>
              Sandton, South Africa
            </p>
            <p>© Daron Wiafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
