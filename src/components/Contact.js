import React from "react"

function Contact() {
    function copyAddress() {
        navigator.clipboard.writeText("veljkojelenkovic00@gmail.com")
        alert("Copied Veljko's email address: veljkojelenkovic00@gmail.com")
    }

    return (
        <section className="contact" id="contact-section" aria-labelledby="contact">
            <h1 id="contact">Contact me</h1>
            <img src={require("../images/illustrations/social.png")} alt="Social media illustration" width="386px" height="383px" useMap="#socialmap" />
            <map name="socialmap">
                <area target="_blank" alt="Map link to Instagram profile" title="Instagram" href="https://www.instagram.com/veljko_jelenkovic" coords="125,270,25" shape="circle" />
                <area target="_blank" alt="Map link to LinkedIn profile" title="LinkedIn" href="https://www.linkedin.com/in/veljko-jelenkovi%C4%87-182981250/" coords="34,242,26" shape="circle" />
                <area target="_blank" alt="Map link to GitHub profile" title="GitHub" href="https://www.github.com/jelenkoo10" coords="28,143,26" shape="circle" />
                <area target="_blank" alt="Copying email address" title="Email" onClick={copyAddress} coords="114,100,27" shape="circle" />
            </map>
            <div className="dot-links">
                <a aria-label="Link to home section" aria-describedby="home" href="#home" className="dot"></a>
                <a aria-label="Link to about section" aria-describedby="about" href="#about-section" className="dot"></a>
                <a aria-label="Link to projects section" aria-describedby="projects" href="#projects-section" className="dot"></a>
                <a aria-label="Link to technologies section" aria-describedby="tech" href="#tech-section" className="dot"></a>
                <a aria-label="Link to contact section" aria-describedby="contact" href="#contact-section" className="dot selected"></a>
            </div>
            <p>&copy;Veljko Jelenković 2022. All rights reserved.</p>
        </section>
    )
}

export default Contact