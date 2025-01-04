import { faLocationDot, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'; // Use solid icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='Contact'>
      <form className=' contactLeftSide'>
        <h3>Contact Us</h3>
        <label>Your Name (Required)</label>
        <input type="text" required />
        <label>Your Email (Required)</label>
        <input type="email" required />
        <label>Your Message</label>
        <textarea></textarea>
      </form>
      <div className="contactRightSide">
        <h3>Get in touch with us</h3>
        <div className="contactIcon">
          <FontAwesomeIcon icon={faPhone} />
          <div className="contactContent">
            <p>Call us now</p>
            <h3>+20 12345678910</h3>
          </div>
        </div>
        <div className="contactIcon">
          <FontAwesomeIcon icon={faMessage} />
          <div className="contactContent">
            <p>Support email</p>
            <h3>gehad@gmail.com</h3>
          </div>
        </div>
        <div className="contactIcon">
          <FontAwesomeIcon icon={faLocationDot} />
          <div className="contactContent">
            <p>Our address</p>
            <h3>1234,King Street,New York,USA</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
