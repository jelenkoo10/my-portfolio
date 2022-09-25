import React from "react"
import { gsap } from "gsap"
import HelloSvg from "../images/illustrations/hello.svg"
import GitSvg from "../images/icons/git.svg"
import ReactSvg from "../images/icons/react.svg"
import CssSvg from "../images/icons/css.svg"
import toggleNav from "../utils/util"

function Header() {
    const titleRef = React.useRef()
    const parRef = React.useRef()
    const btnRef = React.useRef()
    const currentWidth = window.screen.width
    const [display, setDisplay] = React.useState(false)
    
    React.useEffect(() => {
        if (display) {
            gsap.to(btnRef.current, { duration: 1, opacity: 0 })
            if (currentWidth < 600) {
                gsap.to(titleRef.current, { x: "-65", y: "+160", scale: "3", duration: 1, width: "120px" })
                gsap.to(parRef.current, { delay: 1, opacity: 1})
            } else if (currentWidth < 1000) {
                gsap.to(titleRef.current, { x: "-65", y: "+160", scale: "4.5", duration: 1, width: "120px" })
                gsap.to(parRef.current, { delay: 1, opacity: 1})
            } else {
                gsap.to(titleRef.current, { x: "-50", y: "-20", scale: "4.5", opacity: 1, duration: 1, width: "200" })
                gsap.to(parRef.current, { x: "-45",  delay: 1, opacity: 1})
            }
        }
    }, [display])


    return (
         <header>
            <section className="nav" id="home">
                <img src={require("../images/icons/welcome.png")} alt="Icon that says `welcome`" className="welcome" />
                <div id="overlay">
                    <div id="close-btn" onClick={toggleNav}></div>
                    <nav>
                        <ul>
                            <li><a href="#home" onClick={toggleNav}>Home</a></li>
                            <li><a href="#about" onClick={toggleNav}>About me</a></li>
                            <li><a href="#projects" onClick={toggleNav}>Projects</a></li>
                            <li><a href="#tech" onClick={toggleNav}>Technologies</a></li>
                            <li><a href="#contact" onClick={toggleNav}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="hamburger" id="hamburger" onClick={toggleNav}></div>
            </section>
            <section className="header-illustration">
                <div className="illustration">
                    <img src={HelloSvg} alt="`Hello` illustration" className="hello" />
                    <img src={GitSvg} alt="Git icon" className="git-icon" />
                    <img src={ReactSvg} alt="React icon" className="react-icon" />
                    <img src={CssSvg} alt="CSS icon" className="css-icon" />
                </div> 
                <div className="introduction">
                    <h1 id="header-title" ref={titleRef}>Hello world! I am Veljko.</h1>
                    <p className="header-desc" ref={parRef}>frontend developer | software engineering student</p>
                    <button className="header-btn" ref={btnRef} onClick={() => setDisplay(true)}>Let me introduce myself</button>
                </div> 
            </section>
            <div className="dot-links">
                <a aria-label="Link to home section" aria-describedby="home" href="#home" className="dot selected"></a>
                <a aria-label="Link to about section" aria-describedby="about" href="#about" className="dot"></a>
                <a aria-label="Link to projects section" aria-describedby="projects" href="#projects" className="dot"></a>
                <a aria-label="Link to technologies section" aria-describedby="tech" href="#tech" className="dot"></a>
                <a aria-label="Link to contact section" aria-describedby="contact" href="#contact" className="dot"></a>
            </div>
         </header>
    )
}

export default Header