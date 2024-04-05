import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import AboutUs4 from "../../components/About-Us4";
import Services3 from "../../components/Services3";
import Skills2 from "../../components/Skills2";
import Testimonials1 from "../../components/Testimonials1";
import Team2 from "../../components/Team2";
import LightLayout from "../../layouts/light";
import AboutUs2 from "../../components/About-Us2";
import Blogs1 from "../../components/Blogs1";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <LightLayout>
      <PageHeader
        title="About Us"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "about us", url: "/about" },
        ]}
        image="https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <AboutUs2 />
      {/* <Services3 bigTitle grid /> */}
      <Testimonials1 bigTitle />
      {/* <Blogs1 /> */}
      {/* <Team2 /> */}
      {/* <Skills2 /> */}
    </LightLayout>
  );
};

export default About;
