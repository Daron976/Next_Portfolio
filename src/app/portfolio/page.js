"use client";
import styles from "./portfolio.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import projectData from "../data/projectData";
import { IconContext } from "react-icons";
import { BiAbacus, BiLogoJava } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { SiJest } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiRubygems } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { SiTestinglibrary } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiRuby } from "react-icons/si";
import { BiLogoHtml5 } from "react-icons/bi";
import { DiSass } from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";
import { BiLogoReact } from "react-icons/bi";
import { SiSwagger } from "react-icons/si";
import awesomeTutors from "../../../public/content_images/awesomeTutors.png";
import currex from "../../../public/content_images/currex.png";
import climateChange from "../../../public/content_images/climateChange.png";
import pictweak from "../../../public/content_images/pictweak.png";
import bookshelf from "../../../public/content_images/bookshelf.png";
import mathmagician from "../../../public/content_images/mathmagician.png";

export default function Portfolio() {
  const [display, setDisplay] = useState(false);

  const cardDisplay = (e) => {
    let curProject = e.target.value;
    projectData.map((el) => {
      if (el.value === parseInt(curProject)) {
        el.display = true;
      } else {
        el.display = false;
      }
      setDisplay(true);
    });
  };

  const imageLoader = ({ src }) => {
    return `https://raw.githubusercontent.com/${src}?q=${100}`;
  };

  useEffect(() => {
    setDisplay(false);
  }, [display]);

  return (
    <>
      <main className={`${styles.projectContent} flex`} data-testid="home">
        <h1 className={`${styles.contentHeader} flicker`}>Some of my work</h1>
        <ul className={`${styles.proHeaders} flicker`}>
          {projectData.map((project, idx) => {
            return (
              <li
                key={idx}
                className={
                  project.display ? `${styles.header} rightLine` : styles.header
                }
                value={project.value}
                onClick={cardDisplay}
              >
                {project.title}
              </li>
            );
          })}
        </ul>
        <section className={`${styles.projectContainer} flex`}>
          {projectData.map((project, idx) => {
            return (
              <article
                key={idx}
                className={
                  project.display
                    ? `${styles.projectArticle} flex glass slide-in`
                    : `${styles.projectArticle} ${styles.tabState} glass`
                }
                value={project.value}
              >
                <div className={styles.projectImageContainer}>
                  <Image
                    id={`${styles.projectImage}`}
                    src={project.imgBlob}
                    alt="project image"
                  />
                </div>
                <div
                  className={
                    // animation
                    `${styles.projectDetails} flex`
                  }
                >
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                  <ul className={`${styles.technologies} flex`}>
                    {project.technologies.map((tech, idx) => {
                      return (
                        <li
                          className={`${styles.technologyItem} glass`}
                          key={idx}
                        >
                          <Link href={tech.link}>
                            <IconContext.Provider value={{ size: "1.2rem" }}>
                              {tech.icon}
                            </IconContext.Provider>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <div className={`${styles.btnContainer} flex`}>
                    <Link href={project.source} className="btn-link">
                      <button
                        type="button"
                        id="source"
                        className="btn"
                        name="source"
                      >
                        Source
                      </button>
                    </Link>
                    <Link href={project.live} className="btn-link">
                      <button
                        type="button"
                        id="live"
                        className="btn"
                        name="live"
                      >
                        Live
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}
