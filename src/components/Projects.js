import React from "react"
import ProjectCard from "./ProjectCard"
import ProjectsData from "../projectData"
import ProjectGrid from "./ProjectGrid"

function Projects() {
    const [projects, setProjects] = React.useState(ProjectsData)
    const [projectNum, setProjectNum] = React.useState(Math.floor(Math.random() * projects.length))
    const [togglePhoto, setTogglePhoto] = React.useState(false)
    const [toggleWidth, setToggleWidth] = React.useState(window.screen.width < 1000 ? "below 1000" : "above 1000")

    function changeProject(direction) {
        setTogglePhoto(true)
        selectProjects(document.getElementById('tags').options[document.getElementById('tags').selectedIndex].value)
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

    function selectProjects(tag) {
        if (tag != "none") {
            let taggedProjects = ProjectsData.filter(project => project.tags.includes(tag))
            setProjects(taggedProjects)
        } else {
            setProjects(ProjectsData)
        }
    }

    function saveTag() {
        let select = document.getElementById('tags');
        let value = select.options[select.selectedIndex].value;
        let taggedProjects = ProjectsData.filter(project => project.tags.includes(value))
        if (projectNum >= taggedProjects.length) {
            setProjectNum(0)
        }
        selectProjects(value)
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
        <section className="projects" id="projects">
            <h1>My projects</h1>
            <label htmlFor="tags">Choose a project tag: </label>
            <select name="tags" id="tags" defaultValue={"none"} onChange={saveTag}>
                <option value="none">None</option>
                <option value="react">React</option>
                <option value="api">API</option>
                <option value="ui">UI/UX</option>
                <option value="interactive">Interactive</option>
            </select>
            {toggleWidth == "below 1000" ? <div className="project-display">
                <div className="slider" onClick={() => changeProject("left")}>{"<"}</div>
                <ProjectCard key={projects[projectNum].id} project={projects[projectNum]} img={projects[projectNum].image_path} toggle={togglePhoto} />
                <div className="slider" onClick={() => changeProject("right")}>{">"}</div>
            </div> : <ProjectGrid projects={projects} />}
        </section>
    )
}

export default Projects