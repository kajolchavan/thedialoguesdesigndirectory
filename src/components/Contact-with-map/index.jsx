import React from "react";
import appData from '../../data/app.json'

const ContactWithMap = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 map-box">
          <iframe className="" src={appData.mapIframe}></iframe>
        </div>
        <div className="col-lg-6 form">
        <h5 style={{textTransform:"capitalize"}} className="capitalize" >Please fill out the form below to get in touch with us. </h5>
        <p style={{textTransform:"capitalize"}}>We will respond to your inquiry as soon as possible.</p>
          <form id="contact-form" method="post">
            <div className="messages"></div>

            <div className="controls">
              <div className="form-group">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required="required"
                />
              </div>

              <div className="form-group">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required="required"
                />
              </div>
              <div className="form-group">
                <input
                  id="form_subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required="required"
                />
              </div>
              <div className="form-group">
                <select
                  id="form_hear"
                  placeholder="How did you hear about us?"
                  name="subject"
                 
                  required="required"
                >
                <option value="" defaultChecked >How did you hear about us?</option>
                <option>Search Engine</option>
                <option>Social Media</option>
                <option>Referral</option>
                <option>Other</option>
                 </select>
              </div>
              <div className="form-group">
                <select
                  id="form_hear"
                  placeholder="How did you hear about us?"
                  name="subject"
                 
                  required="required"
                >
                <option value="" defaultChecked >Are you a current student?</option>
                <option>Yes</option>
                <option>No</option>
                 </select>
              </div>
              <div className="form-group">
                <textarea
                  id="form_message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required="required"
                ></textarea>
              </div>
              <div className="form-group checkboxInput">
                <input
                  id="form_subject"
                  type="checkbox"
                  name="subject"
                  defaultChecked={true}
                  placeholder="Would you like to subscribe to our newsletter for updates and promotions?"
                  required="required"
                />
                <label>Would you like to subscribe to our newsletter for updates and promotions?</label>
              </div>
              <button type="submit" className="btn-curve roundedMd btn-color">
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWithMap;
