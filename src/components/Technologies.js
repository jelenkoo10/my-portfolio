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
    </section>
  );
}

export default Technologies;
