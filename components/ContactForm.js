import { useState } from 'react';
import ContactForm from '../components/ContactForm'; // Ensure this import points to the correct path

const Contact = () => {
  return (
    <section id="contact">
      <ContactForm />
    </section>
  );
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here, e.g., send data to an API
    console.log('Form submitted:', { name, email, message });
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Contact Me</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="passanstoifanu@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit">Send Message</button>
      <style jsx>{`
        .contact-form {
          display: flex;
          flex-direction: column;
          max-width: 400px;
          margin: 0 auto;
        }
        input, textarea {
          margin: 10px 0;
          padding: 10px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
        button {
          padding: 10px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </form>
  );
};

export default Contact;
