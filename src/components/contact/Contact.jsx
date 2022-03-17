import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [greeting, setGreeting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_x6smk6q",
      "template_wp2o97o",
      form.current,
      "eOMUv__l0FFsNB8tj"
    );
    e.target.reset();
    setGreeting(true);
  };

  return (
    <section id="contact">
      <div className="contact-top">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-content">
            <label htmlFor="name">
              Name <span>*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name..."
              required
              name="name"
            />
          </div>
          <div className="form-content">
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email..."
              required
              name="email"
            />
          </div>
          <div className="form-content">
            <label htmlFor="msg">
              Message <span>*</span>
            </label>
            <textarea rows="7" id="msg" required name="message" />
          </div>
          <button type="submit" className="btn btn-primary contact-btn">
            Send Message
          </button>
          {greeting && <h1>Thank you for letting me know.</h1>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
