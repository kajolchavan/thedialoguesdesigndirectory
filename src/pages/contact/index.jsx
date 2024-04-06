import React from "react";
import PageHeader from "../../components/Page-header";
import ContactInfo from "../../components/Contact-info";
import ContactWithMap from "../../components/Contact-with-map";
import MainLayout from "../../layouts/main";
import LightLayout from "../../layouts/light";
import { client } from "../../lib/client";

const Contact = ({contactDetails}) => {
   React.useEffect(() => {
     document.querySelector("body").classList.add("index3");
   }, []);
  return (
    <LightLayout>
      <PageHeader
        title="Contact Us"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "contact us", url: "/contact" },
        ]}
        image={contactDetails[0]?.mainBanner}
        imageMobile={contactDetails[0]?.mainBannerMobile}
      />
      <section className="contact">
        <ContactInfo contactDetails={contactDetails[0]} />
        <ContactWithMap />
      </section>
    </LightLayout>
  );
};

export const getServerSideProps = async () => {
  const contactQuery = `*[_type == "contactContent" ]`
  const contactDetails = await client.fetch(contactQuery);
 
  return {
    props: {contactDetails}
  }
}

export default Contact;
