import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/ContactForm.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        form.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset(); // Reset the form after sending
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error('Error:', error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit" className="send-message">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
