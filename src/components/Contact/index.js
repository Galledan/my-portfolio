import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="contact-container">
        <div className="contact-texts">
          <p className="title1 highlight">Contact Me</p>
          <p>
            You can contact me from below form or you can contact me from the
            apps right there.
          </p>
        </div>
        <div className="contact-form">
          <form className="form-container">
            <input type="email" name="name" placeholder="Email" />
            <input type="text" name="name" placeholder="Name" />
            <textarea
              className="textbox"
              type="text"
              name="name"
              placeholder="Message"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="apps">
        <div className="app linkedin">
          <i class="fab fa-linkedin"></i>
        </div>
        <div className="app github">
          <i class="fab fa-github"></i>
        </div>
        <div className="app whatsapp">
          <i class="fab fa-whatsapp"></i>
        </div>
      </div>
    </div>
  );
}

export default Contact;
