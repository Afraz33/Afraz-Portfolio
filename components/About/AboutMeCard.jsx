import Image from "next/image";
import React from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";
import styles from "./about.module.css";

const AboutMeCard = () => {
  return (
    <div className={styles.AboutMeCard}>
      <div className={styles.AboutMeImageContatiner}>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          <div className={styles.AboutMeImage}>
            <Image src={images.AIImage} alt="Afraz Image" />
          </div>
        </motion.div>
      </div>
      <div className={styles.AboutMeTextContatiner}>
        <p className={styles.AboutMeInfo}>
          I'm Afraz Ahmed, a Software Engineer specializing in React and Next.js
          development. Currently, I hold the position of Associate Software
          Engineer at Thathal I&TS. Alongside my professional endeavors, I'm
          pursuing a Major in Software Engineering at FAST NUCES Islamabad, with
          good understanding of SDLC and software engineering principles
          <br />
          <br /> 💻 Associate Software Engineer at Thathal I&TS
          <br /> 🙌 AWS Certified Cloud Practitioner
          <br />
          ⚡JavaScript Enthusiast
          <br /> ☁ Cloud Computing Explorer
        </p>
        <div className={styles.resumeDiv}>
          <a
            className={styles.resumeBtn}
            href="https://drive.google.com/file/d/1wVIXiXzMtW9jRHRC5tlCR1SMFkY8Dy02/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Downlod Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
