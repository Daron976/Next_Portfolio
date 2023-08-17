"use client";
import styles from "./portfolio.module.css";
// import { useEffect, useState } from "react";
import "../globals.css";
import Link from "next/link";
import curious from "../../../public/content_images/currex.png";
import Image from "next/image";
import projectData from "../data/projectData";
import { useState, useEffect } from "react";
import component from "../../../public/content_images/component.png";

export default function Home() {
  const [animation, setAnimation] = useState(false);
  // const [toggle, setToggle] = useState(false);
  const [projectPos, setProjectPos] = useState(0);

  const projectNum = projectData.length - 1;

  const change = (direction, cur) => {
    switch (direction) {
      case "nxt":
        if (cur !== projectNum) setProjectPos(cur++);
        else setProjectPos(0);
        break;
      case "prev":
        if (cur !== 0) setProjectPos(cur--);
        else setProjectPos(projectNum);
        break;
      default:
        setProjectPos(cur);
        break;
    }
    setProjectPos(cur++);
  };

  useEffect(() => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 500);
  }, [animation]);
  const imageLoader = ({ src, width, loader }) => {
    return `../../../public/content_images/component.png`;
  };

  return (
    <>
      <main className="content flex" data-testid="home">
        <article className={`${styles.projectArticle}`}>
          <div className={styles.projectImageContainer}>
            <Image
              className={
                // animation
                `${styles.projectImage} slide-in`
                // styles.projectImage
              }
              // loader={imageLoader}
              src={component}
              // width={projectData[projectPos].width}
              // height={projectData[projectPos].heigth}
              alt="project image"
            />
          </div>
          <div className={`${styles.projectDetailsContainer} flex`}>
            <div
              className={
                // animation
                `${styles.projectDetails} glass flex slide-in-ni`
                // : `${styles.projectDetails} glass flex`
              }
            >
              <h1>{projectData[projectPos].title}</h1>
              <p>{projectData[projectPos].description}</p>
              <div className={`${styles.btnContainer} flex`}>
                <Link
                  href={projectData[projectPos].source}
                  className="btn-link"
                >
                  <button
                    type="button"
                    id="source"
                    className={styles.btn}
                    name="source"
                  >
                    Source
                  </button>
                </Link>
                <Link href={projectData[projectPos].live} className="btn-link">
                  <button
                    type="button"
                    id="live"
                    className={styles.btn}
                    name="live"
                  >
                    Live
                  </button>
                </Link>
              </div>
            </div>
            <div
              className={`${styles.btnContainer} ${styles.carouselBtn} flex glass`}
            >
              <button
                type="button"
                id="source"
                className={styles.btn}
                name="source"
                onClick={() => {
                  setAnimation(true);
                  setTimeout(() => {
                    change("prev", projectPos);
                  }, 1000);
                }}
              >
                Previous
              </button>
              <button
                type="button"
                id="live"
                className={styles.btn}
                name="live"
                onClick={() => {
                  setAnimation(true);
                  setTimeout(() => {
                    change("nxt", projectPos);
                  }, 1000);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
