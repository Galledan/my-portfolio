import React, { useState, useRef } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef()

  const [name, setName] = useState()
  const [email, setEmail]= useState()
  const [message, setMessage] = useState()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [alertText, setAlertText] = useState("")


  


  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    if(validation === true) {
      setAlertText("Thanks for your submit. I will contact you as soon as possible")
      emailjs.sendForm("service_7qub36k","template_gxuenjm", form.current, "Ik_GvpAAN3YEzCt72" )
  }
    if(validation === false){
      setAlertText("Please check your inputs.")
    }

    
  }

  const validateContact = () => {
    const mailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const textReg = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
    
    if(!name || name === "") return false
    if(!textReg.test(name)) return false

    if(!message || message === "") return false
    if(!textReg.test(message))  return false

    if(!email || email === "") return false
    if(!mailReg.test(email)) return false

    else return true
  }
  const validation = validateContact()

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
            {isSubmitted && <div className="submit-alert">
              <p>{alertText}</p>
              <p className="closeBtn" onClick={() => setIsSubmitted(false)}>X</p>
            </div>}
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
