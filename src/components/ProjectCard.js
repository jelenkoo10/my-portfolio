import React from "react";
import { motion } from "framer-motion";

function ProjectCard(props) {
  return (
    <div className="project-card max-w-[400px] m-0 border border-[var(--base-color)] rounded-lg relative">
      <img
        src={require("../images/project_screenshots" + props.img)}
        alt={`Screenshot of ${props.project.title} project`}
        className="rounded-t-lg aspect-[1.449] object-cover"
      />
      {props.project.isGroupProject && (
        <span className="absolute top-2 right-2 bg-red-500 text-white inline-block px-2 text-sm rounded-lg shadow-lg">
          Collaborator
        </span>
      )}

      <div className="p-4 pb-6 h-44 flex flex-col justify-between">
        <h2 className="font-bold mb-2">{props.project.title}</h2>
        <p className="text-sm mb-5">{props.project.description}</p>
        <div>
          {props.project.demoLink ? (
            <motion.div
              className="inline-block"
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <a
                href={props.project.demoLink}
                target="_blank"
                className="border border-[var(--base-color)] px-4 py-1 rounded-lg bg-[var(--base-color)] text-white font-bold mr-4"
              >
                Live Demo
              </a>
            </motion.div>
          ) : null}
          {props.project.githubLink ? (
            <motion.div
              className="inline-block"
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <a
                href={props.project.githubLink}
                target="_blank"
                className="border border-black px-4 py-1 rounded-lg"
              >
                View Code
              </a>
            </motion.div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
