import React, { useState, useRef } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm("service_7qub36k","template_gxuenjm", form.current, "Ik_GvpAAN3YEzCt72" )
    
  }

  const [name, setName] = useState()
  const [email, setEmail]= useState()
  const [message, setMessage] = useState()



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
          <form ref={form} className="form-container">
            <input type="email" name="from_email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" name="from_name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <textarea
              className="textbox"
              type="text"
              name="from_message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendEmail} type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="apps">
        <a href="https://www.linkedin.com/in/onur-çelikler/" target="_blank" rel="noopener noreferrer">
        <div className="app linkedin">
          <i class="fab fa-linkedin"></i>
        </div>
        </a>
        <a href="https://github.com/Galledan" target="_blank" rel="noopener noreferrer">
        <div className="app github">
          <i class="fab fa-github"></i>
        </div>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=905053339031&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
        <div className="app whatsapp">
          <i class="fab fa-whatsapp"></i>
        </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
