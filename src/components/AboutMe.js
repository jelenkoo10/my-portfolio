import React from "react";
import TodoSvg from "../images/illustrations/todo.svg";
import GrowthSvg from "../images/illustrations/growth.svg";
import UserSvg from "../images/illustrations/user.svg";

function AboutMe() {
  return (
    <section className="about-me" id="about-section" aria-labelledby="about">
      <h1 id="about">About me</h1>
      <div className="info-cards">
        <div className="info-card">
          <div>
            <img src={UserSvg} alt="" width="50px" height="50px" />
          </div>
          <p>
            Veljko is 22 years old and has recently acquired Bachelor's Degree
            in software engineering studies at the Faculty of Engineering
            Sciences. He also finished{" "}
            <a href="https://scrimba.com/learn/frontend" target="_blank">
              Frontend Developer Career Path
            </a>{" "}
            and{" "}
            <a href="https://scrimba.com/learn/designbootcamp" target="_blank">
              UI Design Bootcamp
            </a>{" "}
            on Scrimba. He has tons of small projects, mostly from Scrimba and{" "}
            <a
              href="https://www.frontendmentor.io/profile/jelenkoo10"
              target="_blank"
            >
              Frontend Mentor
            </a>
            , and also some bigger and more serious projects from college.
          </p>
        </div>
        <div className="info-card">
          <div>
            <img src={GrowthSvg} alt="" width="50px" height="50px" />
          </div>
          <p>
            Veljko is looking forward to become a passionate frontend developer,
            as he already has a lot of knowledge with HTML5, CSS3, JavaScript,
            has experience with React and MERN stack in general, and also has
            knowledge of many other technologies. Good UI design is a must with
            him. He has established his profiles on{" "}
            <a href="https://github.com/jelenkoo10" target="_blank">
              Github
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/veljko-jelenkovi%C4%87-182981250/"
              target="_blank"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
        <div className="info-card">
          <div>
            <img src={TodoSvg} alt="" width="50px" height="50px" />
          </div>
          <p>
            Skills that he likes to highlight most are his ability to plan and
            organize everything before putting any effort, and his ability to
            solve different problems with ease. His work ethic and dedication
            are truly great, and he is always looking forward to learn something
            new on his frontend journey every single day.
          </p>
        </div>
      </div>
      <div className="dot-links">
        <a
          aria-label="Link to home section"
          aria-describedby="home"
          href="#home"
          className="dot"
        ></a>
        <a
          aria-label="Link to about section"
          aria-describedby="about"
          href="#about-section"
          className="dot selected"
        ></a>
        <a
          aria-label="Link to projects section"
          aria-describedby="projects"
          href="#projects-section"
          className="dot"
        ></a>
        <a
          aria-label="Link to group projects section"
          aria-describedby="group-projects"
          href="#group-projects-section"
          className="dot"
        ></a>
        <a
          aria-label="Link to technologies section"
          aria-describedby="tech"
          href="#tech-section"
          className="dot"
        ></a>
        <a
          aria-label="Link to contact section"
          aria-describedby="contact"
          href="#contact-section"
          className="dot"
        ></a>
      </div>
    </section>
  );
}

export default AboutMe;
