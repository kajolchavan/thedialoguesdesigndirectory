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
import Testimonials2 from "../../components/Testimonials2";
import { client } from "../../lib/client";

const About = ({testimonial,aboutDetails}) => {
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
        image={aboutDetails[0]?.mainBanner}
      />
      <AboutUs2 aboutDetails={aboutDetails[0]} />
      {/* <Services3 bigTitle grid /> */}
      <Testimonials1 bigTitle testimonial={testimonial} />
      {/* <Blogs1 /> */}
      {/* <Team2 /> */}
      {/* <Skills2 /> */}
    </LightLayout>
  );
};

export const getServerSideProps = async () => {
  const aboutQuery = `*[_type == "aboutContent" ]`
  const aboutDetails = await client.fetch(aboutQuery);
  const testimonialQuery = `*[_type == "testimonial" ]`
  const testimonial = await client.fetch(testimonialQuery);
  return {
    props: {testimonial,aboutDetails}
  }
}

export default About;
