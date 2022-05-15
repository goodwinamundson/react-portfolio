import React from "react";
import "./style.css";
import Mugshot from "../../assets/images/aboutMe.jpg"

function About(){
    return(
        <div className = "uk-container">
            <div className = "uk-text-center">
                <div className = "about-container">
                    <div className = "about-me">
                    <img id = "mugshot" src={Mugshot} alt="Me" style={{ width: 180 }} />
                        <h1 className="about-me-title uk-heading-divider">About Me</h1>
                        <div className = "about-text-container"> 
                            <p>
                            Hi. My name is Goodwin Amundson and I am a fresh, full-stack web developer. 
                            For several years I worked as an electrical apprentice in the solar energy industry. 
                            This career has taught me the value of hard work, discipline, and flexibility- the same principles that I try to apply to learning web development.
                            </p>
                            <br></br>
                            <p>
                            Right now, I am finishing the Full-Stack Web Development Bootcamp 
                            from the University of Minnesota where I have learned 
                            to create fully functional web applications. I am excited to put these skills to good use and land a promising new career as a 
                            web developer.
                            </p>
                        </div>
                        <div className="uk-text-center uk-text-middle">
                            <a uk-icon="icon: github-alt ; ratio: 1.5" className="contact-icon contact-link-icon" href="https://github.com/gidmp"  target="_blank"></a>
                            <a uk-icon="icon: mail ; ratio: 1.5" className="contact-icon contact-link-icon" href="mailto:danielluke08@gmail.com"></a>
                            <a uk-icon="icon: linkedin ; ratio: 1.5" className="contact-icon contact-link-icon" href="https://www.linkedin.com/in/danieltanoeihusada/" target="_blank"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About