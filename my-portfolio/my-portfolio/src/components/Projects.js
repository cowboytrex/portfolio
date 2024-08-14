import React from 'react';
import '../css/Projects.css';

const projects = [
    {
        name: 'Dad-Dinner',
        description: "Dad-Dinner is an application that enhances the lives of busy parents everywhere and takes the stress out of the long asked question \"What's for dinner?\". Just search for your main ingredient on the homepage and choose to randomize it if you're feeling like an adventure.",
        imgSrc: 'Screenshot 2024-08-15 at 05.22.17.png',
        githubLink: 'https://github.com/adammathis05/dad-dinner',
        WebLink:'https://adammathis05.github.io/dad-dinner/',
    },
    {
        name: 'Memable',
        description: "Memable is a web application where users can log in, play, and search for memes. Built with React on the front end and MongoDB for the back end, Memable offers a fun and interactive experience for meme enthusiasts.",
        imgSrc: 'Screenshot 2024-08-15 at 05.22.36.png',
        githubLink: 'https://github.com/BrianTib/memable',
        WebLink: 'https://memable-0472.onrender.com/',
    }
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <img src={project.imgSrc} alt={`${project.name} Image`} className="project-image"/>
                        </a>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
