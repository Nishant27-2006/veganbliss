import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_8aileyh', 
        'template_yourTemplateID',
        formData,
        'template_6k4wdwj' 
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatusMessage('Your message has been sent successfully! Thank you for reaching out.');
          setFormData({ name: '', email: '', message: '' });
        },
        (err) => {
          console.log('FAILED...', err);
          setStatusMessage('Failed to send your message. Please try again.');
        }
      );
  };

  return (
    <div className="contact">
      <header className="contact-header">
        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? Fill out the form below to get in touch with us. We’d love to hear from you!
        </p>
      </header>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn">Send Message</button>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>
    </div>
  );
}

export default Contact;
