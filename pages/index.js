import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Cover from "../components/Cover/Cover";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import FeaturedBlogs from "../components/FeaturedBlogs/FeaturedBlogs";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import Webinar from "../components/Webinar/Webinar";
import Testimonials from "../components/Testimonials/Testimonials";
import Experience from "../components/Experience/Experience";
import Highlights from "../components/Highlights/Highlights";

export default function Home() {
  return (
    <>
      <Head>
        <title>Afraz Ahmed | Portfolio</title>
        <meta
          name="description"
          content="Afraz Ahmed | React / NextJS Dev | Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Cover />
      <About />
      <Experience />
      <Portfolio />
      <FeaturedBlogs />
      {/* <Webinar /> */}
      <Highlights />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}
