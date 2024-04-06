/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText}) => {
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Office Address</h6>
                    <p style={{textTransform:"capitalize"}} >20, famous studio lane, mahalxmi mumbai</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p style={{fontSize:"12px"}} >thedialoguesdesigndirectory@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+91 9819555466</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="item">
            
              <div className="social">
               
               
                  <a href="https://bit.ly/tddd_instagram" target="_blank" rel="noreferrer" >
                    <i className="fab fa-instagram"></i>
                  </a>
               
                
                  <a href="https://bit.ly/tddd_youtube" target="_blank" rel="noreferrer" >
                    <i className="fab fa-youtube"></i>
                  </a>
                
              </div>
              <div className="copy-right">
                <p>
                  © 2024, The Dialogues Design Directory. Made By One Impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
