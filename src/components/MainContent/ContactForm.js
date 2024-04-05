import React from 'react'

const ContactForm = () => {
  return (
    <div className='container mt-8 contact' >
        
        <div className='form'>
        <div className="section-head  text-center">
          <h3>Contact US</h3>
        </div>
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

              <button type="submit" className="btn-curve btn-color">
                <span>Send Message</span>
              </button>
            </div>
          </form>
          </div>
    </div>
  )
}

export default ContactForm