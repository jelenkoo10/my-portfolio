import React from "react"

function Technologies() {
    return (
        <section className="technologies" id="tech-section" aria-labelledby="tech">
            <h1 id="tech">Tech Stack</h1>
            <div className="icons-grid">
                <div className="tech-icon">
                    <div>
                        <img src={require("../images/technologies/html-5.png")} alt="HTML Icon" />
                    </div>
                    <h2>HTML</h2>
                </div>
                <div className="tech-icon">
                    <div>
                        <img src={require("../images/technologies/css-3.png")} alt="CSS Icon" />
                    </div>
                    <h2>CSS</h2>
                </div>
                <div className="tech-icon">
                    <div>
                        <img src={require("../images/technologies/sass.png")} alt="CSS Icon" />
                    </div>
                    <h2>SCSS</h2>
                </div>
                <div className="tech-icon">
                    <div>
                        <img src={require("../images/technologies/js.png")} alt="JavaScript Icon" />
                    </div>
                    <h2>JavaScript</h2>
                </div>
                <div className="tech-icon">
                    <div>
                        <img src={require("../images/technologies/atom.png")} alt="React Icon" />
                    </div>
                    <h2>React</h2>
                </div>
                <div className="tech-icon">
                    <div>
                        <img src={require("../images/technologies/git.png")} alt="Git Icon" />
                    </div>
                    <h2>Git</h2>
                </div>
                <div className="tech-icon">
                    <div>
                        <img src={require("../images/technologies/php.png")} alt="PHP Icon" />
                    </div>
                    <h2>PHP</h2>
                </div>
                <div className="tech-icon">
                    <div>
                        <img src={require("../images/technologies/laravel.png")} alt="PHP Icon" />
                    </div>
                    <h2>Laravel</h2>
                </div>
                <div className="tech-icon">
                    <div>
                        <img src={require("../images/technologies/api.png")} alt="API Icon" />
                    </div>
                    <h2>APIs</h2>
                </div>
                <div className="tech-icon">
                    <div>
                        <img src={require("../images/technologies/jquery.png")} alt="jQuery Icon" />
                    </div>
                    <h2>jQuery</h2>
                </div>
                <div className="tech-icon">
                    <div>
                        <img src={require("../images/technologies/bootstrap.png")} alt="Bootstrap Icon" />
                    </div>
                    <h2>Bootstrap</h2>
                </div>
                <div className="tech-icon">
                    <div>
                        <img src={require("../images/technologies/gsap.png")} alt="GSAP Icon" />
                    </div>
                    <h2>GSAP</h2>
                </div>
            </div>
            <div className="dot-links">
                <a aria-label="Link to home section" aria-describedby="home" href="#home" className="dot"></a>
                <a aria-label="Link to about section" aria-describedby="about" href="#about-section" className="dot"></a>
                <a aria-label="Link to projects section" aria-describedby="projects" href="#projects-section" className="dot"></a>
                <a aria-label="Link to group projects section" aria-describedby="group-projects" href="#group-projects-section" className="dot"></a>
                <a aria-label="Link to technologies section" aria-describedby="tech" href="#tech-section" className="dot selected"></a>
                <a aria-label="Link to contact section" aria-describedby="contact" href="#contact-section" className="dot"></a>
            </div>
        </section>
    )
}

export default Technologies