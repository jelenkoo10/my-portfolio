import React from "react"
import TodoSvg from "../images/illustrations/todo.svg"
import GrowthSvg from "../images/illustrations/growth.svg"
import UserSvg from "../images/illustrations/user.svg"

function AboutMe() {
    return (
        <section className="about-me" id="about">
            <h1>About me</h1>
            <div className="info-cards">
                <div className="info-card">
                    <div>
                        <img src={UserSvg} alt="" width="50px" height="50px" />
                    </div>
                    <p>Veljko is 21 years old and is currently a software engineering student of the Faculty of Engineering Sciences. He also finished <a href="https://scrimba.com/learn/frontend" target="_blank">Frontend Developer Career Path</a> and <a href="https://scrimba.com/learn/designbootcamp" target="_blank">UI Design Bootcamp</a> on Scrimba. He has tons of small projects, mostly from Scrimba and <a href="https://www.frontendmentor.io/profile/jelenkoo10" target="_blank">Frontend Mentor</a>.</p>
                </div>
                <div className="info-card">
                    <div>
                        <img src={GrowthSvg} alt="" width="50px" height="50px" />
                    </div>
                    <p>Veljko is looking to become a passionate frontend developer, as he already has a lot of knowledge with HTML5, CSS3, JavaScript and React. He is also skillful with jQuery, Bootstrap, GSAP and REST API. Good UI design is a must with him. He is looking to gain some experience with Angular too, and he has established his profiles on <a href="https://github.com/jelenkoo10" target="_blank">Github</a> and <a href="https://www.linkedin.com/in/veljko-jelenkovi%C4%87-182981250/" target="_blank">LinkedIn</a>.</p>
                </div>
                <div className="info-card">
                    <div>
                        <img src={TodoSvg} alt="" width="50px" height="50px" />
                    </div>
                    <p>Skills that he likes to highlight most are his ability to plan and organize everything before putting any effort, and his ability to solve different problems with ease. His work ethic and dedication are truly great, and he is always looking forward to learn something new on his frontend journey every single day.</p>
                </div>
            </div>
            <div className="dot-links">
                <a href="#home" className="dot"></a>
                <a href="#about" className="dot selected"></a>
                <a href="#projects" className="dot"></a>
                <a href="#tech" className="dot"></a>
                <a href="#contact" className="dot"></a>
            </div>
        </section>
    )
}

export default AboutMe