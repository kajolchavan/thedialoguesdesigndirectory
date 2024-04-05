/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutUs2Data from "../../data/about-us2.json";
import Link from 'next/link'
import PortableText from "react-portable-text";
import { urlFor } from "../../lib/client";

const AboutUs2 = ({aboutDetails}) => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div
              className="exp-content nopat wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h6 className="sub-title mediumSubTitle">About Us</h6>
              <h2 style={{textTransform:"capitalize"}} className="mb-20 boldSubTitle">
              {aboutDetails?.descriptionTitle}
              </h2>
              <p className="mediumSubTitle" >
              <PortableText
              // Pass in block content straight from Sanity.io
              content={aboutDetails?.description}
              projectId="p67wd3hf"
              dataset="production"
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={{
                h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                li: ({ children }) => <li className="special-list-item">{children}</li>,
              
              }}
            />
              </p>
           
              <Link href="/contact">
                <a className="btn-curve btn-color roundedMd mt-30">
                  <span className="boldSubTitle " >Contact Now</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ab-exp">
              <div className="row">
                <div className="col-md-4 mb-20">
                  <div
                    className="pattern bg-img bg-repeat"
                    style={{
                      backgroundImage: `url(/assets/img/line-pattern.png)`,
                    }}
                  ></div>
                </div>
                <div className="col-md-8 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img mb-20 wow imago">
                    <img className="roundedMd" src={urlFor(aboutDetails?.imageOne)} alt="" />
                  </div>
                </div>
                <div className="col-md-7 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img wow imago">
                    <img className="roundedMd" src={urlFor(aboutDetails?.imageTwo)} alt="" />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="years-exp">
                    <div className="exp-text">
                      <h2 className="custom-font">60,000</h2>
                      <h6>Passionate Architects emerge annually</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
