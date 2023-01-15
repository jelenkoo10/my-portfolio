import React from "react"
import ProjectCard from "./ProjectCard"
import GroupProjectsData from "../groupProjectData"
import ProjectGrid from "./ProjectGrid"

function GroupProjects() {
    const [projects, setProjects] = React.useState(GroupProjectsData)
    const [projectNum, setProjectNum] = React.useState(Math.floor(Math.random() * projects.length))
    const [togglePhoto, setTogglePhoto] = React.useState(false)
    const [toggleWidth, setToggleWidth] = React.useState(window.screen.width < 1000 ? "below 1000" : "above 1000")

    function changeProject(direction) {
        setTogglePhoto(true)
        if (direction == "right") { 
            if (projectNum < projects.length - 1) {
                setProjectNum(prevNum => prevNum + 1)
            } else {
                setProjectNum(0)
            }
        }
        if (direction == "left") {
            if (projectNum > 0) {
                setProjectNum(prevNum => prevNum - 1)
            } else {
                setProjectNum(projects.length - 1)
            }
        }
    }

    window.addEventListener("resize", function() {
        if (window.screen.width > 1000) {
            setToggleWidth("above 1000")
        }
        if (window.screen.width < 1000) {
            setToggleWidth("below 1000")
        }
    })


    return (
        <section className="projects" id="group-projects-section" aria-labelledby="group-projects">
            <h1 id="group-projects">Group projects I worked on</h1>
            {toggleWidth == "below 1000" ? <div className="project-display">
                <div className="slider" onClick={() => changeProject("left")}>{"<"}</div>
                <ProjectCard key={projects[projectNum].id} project={projects[projectNum]} img={projects[projectNum].image_path} toggle={togglePhoto} />
                <div className="slider" onClick={() => changeProject("right")}>{">"}</div>
            </div> : <ProjectGrid projects={projects} />}
            <div className="dot-links">
                <a aria-label="Link to home section" aria-describedby="home" href="#home" className="dot"></a>
                <a aria-label="Link to about section" aria-describedby="about" href="#about-section" className="dot"></a>
                <a aria-label="Link to projects section" aria-describedby="projects" href="#projects-section" className="dot"></a>
                <a aria-label="Link to group projects section" aria-describedby="group-projects" href="#group-projects-section" className="dot selected"></a>
                <a aria-label="Link to technologies section" aria-describedby="tech" href="#tech-section" className="dot"></a>
                <a aria-label="Link to contact section" aria-describedby="contact" href="#contact-section" className="dot"></a>
            </div>
        </section>
    )
}

export default GroupProjects