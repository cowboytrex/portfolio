import React from 'react';
import '../css/About.css';  // Corrected path to go up one directory and then into the css directory

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2>About Me</h2>
                <p>
                I am a passionate and dedicated Full-Stack Developer with a strong foundation in both front-end and back-end technologies. My journey in the world of technology has been driven by a deep curiosity about how things work and a love for problem-solving. I specialize in creating dynamic and responsive web applications that offer intuitive user experiences. My expertise spans modern front-end frameworks like React, where I bring designs to life with clean, efficient code. On the back-end, I am proficient in Node.js, Express, and MongoDB.
Beyond my technical skills, I am actively working on creating my own startup focused on developing innovative technologies that help children with disabilities and revolutionize the way they learn in school.
                </p>
            </div>
        </section>
    );
}

export default About;
