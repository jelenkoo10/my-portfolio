import React from "react";
import TechnologyCard from "./TechnologyCard";

function Technologies() {
  return (
    <section className="technologies" id="tech-section" aria-labelledby="tech">
      <h1 id="tech">Tech Stack</h1>
      <div className="icons-grid">
        <TechnologyCard image="html-5.png" name="HTML" />
        <TechnologyCard image="css-3.png" name="CSS" />
        <TechnologyCard image="sass.png" name="SCSS" />
        <TechnologyCard image="tailwind.png" name="TailwindCSS" />
        <TechnologyCard image="js.png" name="JavaScript" />
        <TechnologyCard image="ts.png" name="TypeScript" />
        <TechnologyCard image="atom.png" name="React" />
        <TechnologyCard image="mongodb.png" name="MongoDB" />
        <TechnologyCard image="nodejs.png" name="Node.js" />
        <TechnologyCard image="expressjs.png" name="Express.js" />
        <TechnologyCard image="git.png" name="Git" />
        <TechnologyCard image="postman.png" name="Postman" />
        <TechnologyCard image="php.png" name="PHP" />
        <TechnologyCard image="laravel.png" name="Laravel" />
        <TechnologyCard image="mysql.png" name="MySQL" />
        <TechnologyCard image="api.png" name="APIs" />
        <TechnologyCard image="bootstrap.png" name="Bootstrap" />
        <TechnologyCard image="gsap.png" name="GSAP" />
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
          className="dot"
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
          className="dot selected"
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

export default Technologies;
