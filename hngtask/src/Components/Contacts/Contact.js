import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="container">
      <div className="ctn-content">
        <h1>Contact Me</h1>
        <p className="supporting-text">
          Hi there, contact me to ask me about anything you have in mind.
        </p>

        <form action="">
          <div className="input-container">
            <div className="lb-move">
              <label htmlFor="">First name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                id="first_name"
              />
            </div>
            <div className="lb-move">
              <label htmlFor="">Last name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                id="last_name"
              />
            </div>
          </div>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="youremail@email.com" id="email" />
          <label htmlFor="">Message</label>
          <textarea name="Message" id="message" cols="30" rows="10"></textarea>
          <div className="check-box">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <p>You agree to providing your data to name who may contact you.</p>
          </div>
          <button type="submit" id="btn__submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
