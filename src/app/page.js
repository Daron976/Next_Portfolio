"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineCases } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { IconContext } from "react-icons";
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
  return (
    <>
      <header>
        <nav className="desktop-header">
          <div>
            <Image src={logo} width={165} height={150} alt="logo" />
          </div>
          <div className="flex menu-container transition">
            <div
              className="menu-btn-container"
              onClick={() => {
                if (!clicked) {
                  setClicked(true);
                } else setClicked(false);
              }}
            >
              <IconContext.Provider
                value={{ size: "2em", className: "menu-open-btn transition" }}
              >
                <HiMenuAlt3 />
              </IconContext.Provider>
            </div>
            <ul
              className={
                clicked
                  ? "desktop-menu flex transition"
                  : "desktop-menu display-none transition"
              }
            >
              <li>
                <Link href="/">
                  <HiOutlineHome />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <SiAboutdotme />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <MdOutlineCases />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <GrContactInfo />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className={`${styles.content} ${styles.flex}`} data-testid="home">
        <div className="home-header">
          <h1
          // className={
          //   animation ? `${styles.animation} ${styles.name}` : `${styles.name}`
          // }
          >
            Daron Wiafe
          </h1>
          <p
          // className={
          //   animation
          //     ? `${styles.animation} ${styles.subtext}`
          //     : `${styles.subtext}`
          // }
          >
            Software developer
          </p>
          <p className={styles.msg}>
            Developing more than just your technical products
          </p>
        </div>
      </main>
    </>
  );
}
