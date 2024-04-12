import React from "react";
import styles from "./experience.module.css";

const Experience = () => {
  return (
    <div className={styles.experience}>
      <div>
        <h2>Experience</h2>
      </div>
      <div className={styles.exp}>
        <div className={styles.exp_container}>
          <div className={styles.exp_comp}>
            <div>
              <h3>AssociateSoftware Engineer</h3>
              <p>Thathal I&TS</p>
            </div>
            <div>
              <ul className={styles.exp_details}>
                <li>
                  Participating in building, enhancing and improving the product
                  with a team of 5 people.
                </li>
                <li>
                  Co-leading the marketing module of the product, along with
                  integration with the Google Ads API.
                </li>
                <li>
                  Utilizing NextJs for optimization on the client side, with
                  NodeJs as the server side framework and Postgresql for the
                  database.
                </li>
              </ul>
            </div>
            <div className={styles.exp_timeline}>
              <div>07/2023 - Present</div>
              <div>Pakistan, Hybrid</div>
            </div>
          </div>
          <div className={styles.exp_comp}>
            <div>
              <h3>Frontend Intern</h3>
              <p>Bytewise limited</p>
            </div>
            <div>
              <ul className={styles.exp_details}>
                <li>
                  Collaborating with a team of 10 interns to work on developing
                  a portfolio website
                </li>
                <li>
                  Built 3 JavaScript based games including Dice Game, Simon Game
                  and Rock-paper-scissor through DOM manipulation.
                </li>
                <li>
                  Understanding Git fundamentals, resolving conflicts with
                  fellow interns.
                </li>
              </ul>
            </div>
            <div className={styles.exp_timeline}>
              <div>07/2022 - 12/2022</div>
              <div>Islamabad, Remote</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
