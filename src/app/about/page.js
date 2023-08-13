"use client";
import styles from "../page.module.css";
import { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineCases } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { IconContext } from "react-icons";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo_images/logo.png";
import "../globals.css";

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

  const navItems = [
    {
      id: 0,
      icon: <HiOutlineHome />,
    },
    {
      id: 1,
      icon: <SiAboutdotme />,
    },
    {
      id: 2,
      icon: <MdOutlineCases />,
    },
    {
      id: 3,
      icon: <GrContactInfo />,
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
                {
                  clicked
                  ? <HiMenuAlt2 />
                  : <HiMenuAlt3 />
                }
              </IconContext.Provider>
            </div>
            <ul
              className={
                clicked
                  ? "desktop-menu flex transition open"
                  : "desktop-menu display-none transition close"
              }
            >
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link href="/">
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
            about page
          </h1>
          <p
            className={
              animation
                ? `${styles.subtext_animation} ${styles.subtext}`
                : `${styles.subtext}`
            }
          >
            This is the about page desdcription
          </p>
          <p className={styles.msg}>
            Developing more than just your technical products
          </p>
        </div>
      </main>
    </>
  );
}
