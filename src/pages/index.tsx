import Head from "next/head";
import Navbar from "./Navbar";
import Landing from "./Landing";
import About from "./About";
import Team from "./Team";
import Services from "./Services";
import Footer from "./Footer";
import TopButton from "./TopButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zymez Software</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/assets/z.png" />
      </Head>
      <Navbar />

      <main>
        <TopButton />
        <div id="home"></div>
        <Landing />
        <div id="about"></div>
        <About />
        <div id="team"></div>
        <Team />
        <div id="services"></div>
        <Services />
        <div id="contact"></div>

        <Footer />
      </main>
    </>
  );
}
