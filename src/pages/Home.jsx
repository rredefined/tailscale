import React from "react";
import FeaturesSection from "../components/home/FeaturesSection";
import Hero from "../components/home/Hero";
import ShowcasePanel from "../components/ShowcasePanel";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/FAQ";
import BottomCTA from "../components/home/BottomCTA";
import Helmet from "react-helmet";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | ZoutGames</title>
      </Helmet>
      <Hero />
      <FeaturesSection />
      <ShowcasePanel />
      <Testimonials />
      <FAQ />
      <BottomCTA />
    </>
  );
};

export default Home;
