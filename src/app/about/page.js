"use client";
import styles from "./about.module.css";
import { useEffect, useState } from "react";
import "../globals.css";
import Link from "next/link";

export default function Home() {
  const [aboutMe, setAboutMe] = useState(true);
  const [exp, setExp] = useState(false);
  const [skill, setSkill] = useState(false);

  return (
    <>
      <main className="content flex" data-testid="home">
        <section
          id="about"
          className={`${styles.content} flex`}
          data-testid="about"
        >
          <ul className={`${styles.header} flicker flex`}>
            <li
              className={aboutMe ? styles.underline : styles.aboutNavItems}
              onClick={() => {
                if (!aboutMe) {
                  setAboutMe(true);
                  setExp(false);
                  setSkill(false);
                }
              }}
            >
              <strong>Who am I</strong>
            </li>
            <li
              className={exp ? styles.underline : styles.aboutNavItems}
              onClick={() => {
                if (!exp) {
                  setAboutMe(false);
                  setExp(true);
                  setSkill(false);
                }
              }}
            >
              <strong>Experience</strong>
            </li>
            <li
              className={skill ? styles.underline : styles.aboutNavItems}
              onClick={() => {
                if (!skill) {
                  setAboutMe(false);
                  setExp(false);
                  setSkill(true);
                }
              }}
            >
              <strong>Skills</strong>
            </li>
          </ul>
          <div
            className={
              aboutMe ? `${styles.contentContainer} flex` : "display-none"
            }
          >
            <p className={`${styles.textContent} glass slide-in`}>
              Hello there,
              <br />
              Have you ever looked at something and thought{" "}
              <em>"I wonder how that was built"</em> or{" "}
              <em>"I wonder how that works"</em>. Well, that's me. Curiosity
              killed a cat, but thankfully I'm still alive, also I'm not a cat.
              I am a Software developer and an automobile enthusiast who loves
              to solve problems. Allow me to solve yours ;&#41;.
              <br />
              Life is not certain, but when you are in teh trenches, best
              believe you will find me there with you
              <br />
              <Link href="/contact">
                <strong>
                  <em>Don't hesitate to reach out.</em>
                </strong>
              </Link>
            </p>
          </div>
          <div
            className={exp ? `${styles.contentContainer} flex` : "display-none"}
          >
            {/* <h1 className="flicker">Experience</h1> */}
            <div className={`${styles.experienceContainer} flex`}>
              <div className={styles.experienceItems}>
                <article className={`${styles.list} glass flex slide-in`}>
                  <h3>
                    Frontend developer / QA · Tweak <br />
                    <em>May 2023 — Aug 2023</em>
                  </h3>
                  <li className={styles.listItem}>
                    - Built, tested and maintained aspects of company software.
                    <br /> - Create interactive tours and videos to help
                    customers.
                    <br /> - Troubleshot web application issues, wrote,
                    maintained, and documented automated tests.
                  </li>
                </article>
                <article className={`${styles.list} glass flex slide-in-ni`}>
                  <h3>
                    Software developer · Microverse
                    <br />
                    <em>Aug 2022 — April 2023</em>
                  </h3>
                  <li className={styles.listItem}>
                    - Built, tested, and deployed maintainable, responsive web
                    applications. with scrum methodologies.
                    <br />
                    -Troubleshot web application issues, and documented APIs
                    with unit tests. <br />- Never missed project deadlines in
                    over a 2000 hours in pair-programming and remote development
                  </li>
                </article>
                <article className={`${styles.list} glass flex slide-in-san`}>
                  <h3>
                    Student Mentor · Microverse
                    <br />
                    <em>Sep 2023 — Oct 2023</em>
                  </h3>
                  <p className={styles.listItem}>
                    - Mentored junior web developers, providing technical
                    support and improvements to code code quality and overall
                    performance.
                    <br />- Provided advice and tips on maintaining motivation
                    to preserve longevity in the program.
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div
            className={
              skill ? `${styles.contentContainer} flex` : "display-none"
            }
          >
            {/* <h1 className="flicker">Skills</h1> */}
            <ul className={`${styles.list} ${styles.skillsUl} flex`}>
              <li className={`${styles.skillListItem} glass slide-in`}>
                <h3 className="skill-header">Tech-Stack</h3>
                <div className={styles.skill}>Ruby</div>
                <div className={styles.skill}>Rails</div>
                <div className={styles.skill}>React & Redux</div>
                <div className={styles.skill}>JavaScript</div>
                <div className={styles.skill}>TypeScript</div>
                <div className={styles.skill}>CSS</div>
                <div className={styles.skill}>HTML5</div>
              </li>
              <li className={`${styles.skillListItem} glass slide-in-ni`}>
                <h3 className="skill-header">Tools & Methods</h3>
                <div className={styles.skill}>Git, Git-flow</div>
                <div className={styles.skill}>GitHub & GitHub-flow</div>
                <div className={styles.skill}>
                  Mobile/Responsive Development
                </div>
                <div className={styles.skill}>Ghost Inspector</div>
                <div className={styles.skill}>Jest Testing</div>
                <div className={styles.skill}>Dev Tools</div>
              </li>
              <li className={`${styles.skillListItem} glass slide-in-san`}>
                <h3 className="skill-header">Professional</h3>
                <div className={styles.skill}>Remote Pair-Programming</div>
                <div className={styles.skill}>Teamwork</div>
                <div className={styles.skill}>Mentorship</div>
                <div className={styles.skill}>Communication</div>
                <div className={styles.skill}>Effective Collaboration</div>
                <div className={styles.skill}>Adaptability</div>
                <div className={styles.skill}>Volunteering</div>
                <div className={styles.skill}>Leadership</div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
