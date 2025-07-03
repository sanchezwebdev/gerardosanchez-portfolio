import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/Form.module.css';

const FormComponent = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailRegex = /\S+@\S+\.\S+/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormErrors('');
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    let errors = [];

    if (!name) errors.push('Name');
    if (!email || !emailRegex.test(email)) errors.push('Valid Email');
    if (!message) errors.push('Message');

    if (errors.length > 0) {
      setFormErrors(`Please fill the following: ${errors.join(', ')}.`);
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      ).then(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      }).catch((error) => {
        console.error('Form submission error:', error.text);
        setFormErrors('Failed to send the message. Please try again.');
      });
    }
  };

  return (
    <div className={styles.formContainer}>
      <form ref={form} onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.nameEmail}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.inputField}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.inputField}
        />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className={`${styles.inputField} ${styles.message}`}
        />
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
        {formErrors && <div className={styles.error}>{formErrors}</div>}
        {isSubmitted && (
          <div className={styles.confirmationMessage}>
            Thank you! Your message has been sent.
          </div>
        )}
      </form>
    </div>
  );
};

export default FormComponent;
