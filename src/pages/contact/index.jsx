import React from "react";
import PageHeader from "../../components/Page-header";
import ContactInfo from "../../components/Contact-info";
import ContactWithMap from "../../components/Contact-with-map";
import MainLayout from "../../layouts/main";
import LightLayout from "../../layouts/light";

const Contact = () => {
   React.useEffect(() => {
     document.querySelector("body").classList.add("index3");
   }, []);
  return (
    <LightLayout>
      {/* <PageHeader
        title="Contact Us"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "contact us", url: "/contact" },
        ]}
        image="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      /> */}
      <section className="contact">
        <ContactInfo />
        <ContactWithMap />
      </section>
    </LightLayout>
  );
};

export default Contact;
