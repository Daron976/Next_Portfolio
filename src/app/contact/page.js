"use client";
import styles from "./contact.module.css";
import { useState, useEffect } from "react";
import { emailExp } from "../data/projectData";

export default function Contact() {
  const [fillMsg, setFillMsg] = useState(false);
  const [notValid, setNotValid] = useState(false);
  const [errMsgDisplay, setErrMsgDisplay] = useState(false);

  const [name, setName] = useState(false);
  const [nameVal, setNameVal] = useState("");

  const [email, setEmail] = useState(false);
  const [emailVal, setEmailVal] = useState("");

  const [msg, setMsg] = useState(false);
  const [msgVal, setMsgVal] = useState("");

  const [animate, setAnimate] = useState(true);

  const isFilled = (e) => {
    errorDisplay();
    if (name === false || email === false || msg === false || notValid) {
      e.preventDefault();
      setFillMsg(true);
    } else {
      setFillMsg(false);
    }
  };

  const errorDisplay = () => {
    if (name === false || email === false || msg === false) {
      setErrMsgDisplay(true);
    } else if (
      (name === false || email === false || msg === false) &&
      notValid
    ) {
      setErrMsgDisplay(true);
    } else if (name === true && email === true && msg === true && notValid) {
      setErrMsgDisplay(false);
    }
  };

  const emailStructure = () => {
    let curEmail = emailVal;
    if (curEmail.match(emailExp)) {
      setNotValid(false);
    } else {
      setNotValid(true);
    }
    setEmail(true);
  };

  useEffect(() => {
    if (!sessionStorage.getItem("contactOpen")) {
      sessionStorage.setItem("contactOpen", true);
    } else {
      setAnimate(false);
    }
  }, []);

  return (
    <>
      <main className={`${styles.wrapper} content flex`} data-testid="home">
        <section id="contact" className={`${styles.content} flex`}>
          <div className={`${styles.contactSubmission} glass`}>
            <h1 className={animate ? "flicker" : ""}>Get In Touch</h1>
            <form
              action="https://formspree.io/f/mwkzplvb"
              name="contact-form"
              id={styles.formSubmission}
              className={`${styles.contactForm} flex`}
              method="post"
            >
              <div
                className={`${styles.formInput} flex ${
                  animate ? "appear" : ""
                }`}
              >
                <label htmlFor="name">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={nameVal}
                    onChange={(e) => {
                      setNameVal(e.target.value);
                    }}
                    onBlur={() => {
                      if (nameVal.length === 0) {
                        setName(false);
                      } else {
                        setName(true);
                      }
                    }}
                  />
                </label>
                <label htmlFor="email">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={emailVal}
                    onChange={(e) => {
                      setEmailVal(e.target.value);
                    }}
                    onBlur={() => {
                      if (emailVal.length === 0) {
                        setEmail(false);
                      } else {
                        emailStructure();
                      }
                    }}
                  />
                </label>
              </div>
              <label htmlFor="message">
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  className={animate ? "appearText" : ""}
                  placeholder="Message"
                  value={msgVal}
                  onChange={(e) => {
                    setMsgVal(e.target.value);
                  }}
                  onBlur={() => {
                    if (msgVal.length === 0) {
                      setMsg(false);
                    } else {
                      setMsg(true);
                    }
                  }}
                ></textarea>
              </label>
              <div
                className={`${styles.errorMsg} flex flicker`}
                style={{
                  display: fillMsg ? "flex" : "none",
                }}
              >
                <p className="glass">
                  {errMsgDisplay
                    ? "Please ensure that all fields are populated"
                    : "Please insert a valid email address"}
                </p>
              </div>
              <div
                className={`${styles.formSubmission} flex ${
                  animate ? "slide-in-yon" : ""
                }`}
              >
                <button
                  type="submit"
                  id="submit"
                  className="btn"
                  name="submit"
                  onClick={isFilled}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
