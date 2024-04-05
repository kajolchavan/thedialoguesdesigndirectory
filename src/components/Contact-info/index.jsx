import React from "react";

const ContactInfo = () => {
  return (
    <div className="info pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-phone"></span>
              <div className="cont">
                <h6 className="custom-font mediumSubTitle">Call Us</h6>
                <p className="mediumSubTitle">+91 9819555466</p>
             
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-mail-open"></span>
              <div className="cont">
                <h6 className="custom-font mediumSubTitle">Email Us</h6>
                
                <p className="mediumSubTitle" >thedialoguesdesigndirectory@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-map"></span>
              <div className="cont">
                <h6 className="custom-font mediumSubTitle">Address</h6>
                <p className="mediumSubTitle">
                20, famous studio lane, mahalxmi mumbai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
