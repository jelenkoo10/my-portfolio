import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsData from "../projectData";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Projects() {
  const projects = ProjectsData;

  let projectsSplideHtml = projects.map((project) => (
    <SplideSlide key={project.id}>
      <ProjectCard project={project} img={project.image_path} />
    </SplideSlide>
  ));

  let projectsHtml = projects.map((project) => (
    <ProjectCard project={project} img={project.image_path} />
  ));

  return (
    <section
      className="p-5 max-w-[1200px] my-12 xl:mx-auto"
      id="projects-section"
      aria-labelledby="projects"
    >
      <h1 id="tech" className="text-2xl lg:text-4xl font-extrabold mb-8">
        Projects
      </h1>
      <div className="visible-until-xl">
        <Splide
          options={{
            autoWidth: true,
            perPage: 1,
            gap: "1rem",
            arrows: true,
            pagination: false,
            padding: 20,
          }}
          style={{ margin: "0 -20px" }}
        >
          {projectsSplideHtml}
        </Splide>
      </div>
      <div className="visible-from-xl grid grid-cols-3 gap-x-16 gap-y-12">
        {projectsHtml}
      </div>
    </section>
  );
}

export default Projects;
