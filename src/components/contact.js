import React from 'react';
import './contact.css'; // Import the CSS file
import mainImage from '../assets/main.png'
import lineImage from '../assets/line.png'


const Contact = () => {
  return (
    <div className="contact-page">
      <img src={mainImage} alt="Contact Image" className="centered-image" />
      <img src={lineImage} alt="Contact Image" className="cbottom-image" />
    </div>
  );
}

export default Contact;
