import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'service_6q9vnxp';   // Replace with your EmailJS service ID
        const templateID = 'template_x48vhgr'; // Replace with your EmailJS template ID
        const userID = 'B8lpomI9lg1Ys_mmQ';         // Replace with your EmailJS user ID

        emailjs.send(serviceID, templateID, formData, userID)
            .then((result) => {
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            }, (error) => {
                alert('Failed to send the message, please try again.');
                console.error('Error:', error);
            });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
