import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import one from "../../assets/highlights/1.jpg";
import two from "../../assets/highlights/2.jpeg";
import three from "../../assets/highlights/3.jpg";
import four from "../../assets/highlights/4.jpeg";
import five from "../../assets/highlights/5.jpeg";
import six from "../../assets/highlights/6.jpeg";
import Daira from "../../assets/highlights/Daira.jpg";
import Create21 from "../../assets/highlights/Create21.jpg";
import Paisha_ImagineCup from "../../assets/highlights/Paisha_ImagineCup.png";

import styles from "./highlights.module.css";
import Image from "next/image";

const Highlights = () => {
  return (
    <div className={styles.highlights_comp}>
      <h2>Highlights</h2>
      <div className={styles.comp}>
        <div className={styles._comp}>
          <Carousel showThumbs={false}>
            <div className={styles.imageDiv}>
              <Image
                src={Daira}
                alt="Sharjeel Yunus at 10Pearls Lahore"
                width="800px"
                height="500px"
                className={styles.image}
              />
              <p className="legend">
                1st Position at DAIRA 23, a national level event held at
                NUCES-FAST Faisalabad
              </p>
            </div>
            <div className={styles.imageDiv}>
              <Image
                src={Create21}
                alt="Sharjeel Yunus at The Islamia University of Bahawalpur"
                width="400px"
                height="500px"
                className={styles._image}
              />
              <p className="legend">
                Top 20 in Software Project Competition (Create&apos;21) held at
                PIEAS 2021, competing against Industrial Projects as 3rd
                Semester students.
              </p>
            </div>
            <div className={styles.imageDiv}>
              <Image
                src={Paisha_ImagineCup}
                alt="Sharjeel Yunus at 10Pearls Lahore with GDG Cloud Lahore team"
                width="800px"
                height="500px"
                className={styles.image}
              />
              <p className="legend">
                Made it to the semifinals of Microsoft Imagine Cup 2024 for the
                sustainable goal of education.
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
