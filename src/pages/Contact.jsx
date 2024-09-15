import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      // Sending form data to EmailJS
      emailjs.send(
        'service_pk2ig5h', // Replace with your EmailJS service ID
        'template_cuq8nzh', // Replace with your EmailJS template ID
        formData,
        'oRIRlrEL4eX7iOQ5q'      // Replace with your EmailJS user ID
      )
      .then((result) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      })
      .catch((error) => {
        alert('Failed to send message. Please try again later.');
        setIsSubmitting(false);
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section>
      <Navbar />
      <div className="container form-container">
        <h1>Contact Me</h1>
        <ul>
          <li><strong>Email:</strong> queendesi06@gmail.com</li>
          <li><strong>Phone:</strong> 09015962777</li>
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <div className="error">{errors.message}</div>}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
