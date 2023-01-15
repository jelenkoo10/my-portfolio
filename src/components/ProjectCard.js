import React from "react"
import { gsap } from "gsap"

function ProjectCard(props) {
    const imgRef = React.useRef()

    React.useEffect(() => {
        if (props.toggle) {
            gsap.from(imgRef.current, { duration: 0.5, opacity: 0 })
        }
    }, [props.toggle])

    return (
        <div className="project-card">
            <a href={props.project.link} target={props.project.link != "" ? "_blank" : "_self"}>
                <img src={require("../images/project_screenshots" + props.img)} alt={`Screenshot of ${props.project.title} project`} className="project-image" ref={imgRef} />
            </a>
            <h2 className="project-title">{props.project.title}</h2>
            <p className="project-desc">{props.project.description}</p>
            {props.project.role ? <p className="project-role">Role: {props.project.role}</p> : ""}
        </div>
    )
}

export default ProjectCard
