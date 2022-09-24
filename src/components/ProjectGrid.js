import React from "react"
import ProjectCard from "./ProjectCard"

function ProjectGrid(props) {
    let projectsHtml = props.projects.map(project => 
        <ProjectCard key={project.id} project={project} img={project.image_path} />
    )

    return (
        <div className="project-grid">
            {projectsHtml}
        </div>
    )
}

export default ProjectGrid