import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Nervous from "../components/Nervous";
import Rare from "../components/Rare";
import Merch from "../components/Merch";
import Celebrity from "../components/Celebrity";
import Team from "../components/Team";
import Community from "../components/Community";
import Footer from "../components/Footer";
import Roadmap from "../components/Roadmap";
import BackToTop from "../common/BackToTop";
function Main() {
  return (
    <>
      <Header />
      <Hero />
      <Nervous />
      <Rare />
      <Roadmap />
      <Merch />
      <Celebrity />
      <Team />
      <Community />
      <Footer />
      <BackToTop />
    </>
  );
}

export default Main;
