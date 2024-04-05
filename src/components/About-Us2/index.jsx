/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutUs2Data from "../../data/about-us2.json";
import Link from 'next/link'

const AboutUs2 = () => {
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
              <h2 className="mb-20 boldSubTitle">
              Welcome to our sanctuary  <br /> of wisdom
              </h2>
              <p className="mediumSubTitle" >Embark on a journey through time, where the architectural landscape of India has blossomed from humble beginnings to a sprawling canvas of opportunity. Twenty-five years ago, only 40 architecture colleges stood across the nation, with a mere trio nestled in the bustling heart of Mumbai. Today, behold the astounding transformation: 1045 institutions proudly offer courses in architecture, with Mumbai alone boasting 22 esteemed havens of learning.</p>
           
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
                    <img className="roundedMd" src="https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  </div>
                </div>
                <div className="col-md-7 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img wow imago">
                    <img className="roundedMd" src="https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
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
