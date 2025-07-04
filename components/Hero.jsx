import React from "react";
import styles from "../styles/Hero.module.css";
import Head from 'next/head'

const Hero = () => {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/face.png" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.header}>Full-Stack Developer</h1>
        <h2 className={styles.subheader}>
          I develop full-stack web applications, and I love what I do.
        </h2>
        <div className={styles.imageWrapper}>
          <img src="/face.png" alt="" className={styles.image} />
        </div>
      </div>
    </>
  );
};

export default Hero;
