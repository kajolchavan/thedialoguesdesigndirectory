/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs1 from "../../components/About-Us1";
import Services1 from "../../components/Services1";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import LightLayout from "../../layouts/light";
import Portfolio1 from "../../components/Portfolio1";
import SkillsCircle from "../../components/Skills-circle";
import Testimonials from "../../components/Testimonials1";
import Team1 from "../../components/Team1";
import Blogs1 from "../../components/Blogs1";
import Contact from "../../components/Contact";
import AboutUs2 from "../../components/About-Us2";
import Intro4 from "../../components/Intro4";
import IntroVideo from "../../components/IntroVideo"
import { client } from '../../lib/client';
const Home1 = ({homeContent,portfolios,blogs}) => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  
  
  return (
    <LightLayout >
     {homeContent && <IntroVideo homeContent={homeContent} />}
      {/* <AboutUs2 /> */}
      {/* <Services1 /> */}
      <Portfolio1 portfolios={portfolios}  />
      {/* <SkillsCircle /> */}
      {/* <Testimonials /> */}
      {/* <Team1 /> */}
      <Blogs1 blogs={blogs} />
      <Contact />
    </LightLayout>
  );
};



export default Home1;
