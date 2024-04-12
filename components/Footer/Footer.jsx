import Link from "next/link";
import React from "react";
import {
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsTwitter,
} from "react-icons/bs";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <a href="#" className={styles.footer__logo}>
          SharjeelYunus
        </a>
      </Link>
      <ul className={styles.permalinks}>
        <li>
          <Link href="#">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="#About">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="#Portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="#Blogs">
            <a>Blogs</a>
          </Link>
        </li>
        <li>
          <Link href="#Contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>

      <div className={styles.footer__socials}>
        <Link href="https://www.linkedin.com/in/afraz03">
          <a target="_blank">
            <BsLinkedin />
          </a>
        </Link>
        <Link href="https://github.com/afraz33">
          <a target="_blank">
            <BsGithub />
          </a>
        </Link>
      </div>

      <div className={styles.footer__copyright}>
        <small>Afraz Ahmed &copy; {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};

export default Footer;
