"use client";
import styles from "./home.module.css";
import { useEffect, useState } from "react";
import "./globals.css";

export default function Home() {
  return (
    <>
      <main className="content flex" data-testid="home">
        <div className="home-header">
          <h1 className={`flicker ${styles.name}`}>Daron Wiafe</h1>
          <p className={`appear ${styles.subtext}`}>Software developer</p>
          <p className={`appearText ${styles.msg}`}>
            Developing more than just software
          </p>
        </div>
      </main>
    </>
  );
}
