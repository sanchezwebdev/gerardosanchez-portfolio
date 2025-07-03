import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Development from "../components/Development";
import LatestVideos from "../components/LatestVideos";
import Projects from "../components/Projects";
import Collaborate from "../components/Collaborate";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Gerardo Sanchez</title>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="Discover top-notch web services by Gerardo Sanchez. I specialize in creating custom websites and web applications. Contact me today to bring your digital vision to life."
        />
        <meta
          property="og:title"
          content="Gerardo Sanchez | Web Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Web development portfolio built with React and Next.js. Let's build something great together."
        />
        <meta
          property="og:image"
          content="/preview.png"
        />
        <meta property="og:url" content="https://gerardosanchez.dev" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Nav />
      <Hero />
      <Development /> 
      <Projects /> 
      <LatestVideos />
      <Collaborate />
      <Footer />
    </div>
  );
};

export default Home;
