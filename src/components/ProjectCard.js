import React from "react";
import { motion } from "framer-motion";

function ProjectCard(props) {
  return (
    <motion.div
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="project-card max-w-[400px] m-0 border border-[var(--base-color)] rounded-lg cursor-pointer"
    >
      <a
        href={props.project.link}
        target={props.project.link != "" ? "_blank" : "_self"}
      >
        <img
          src={require("../images/project_screenshots" + props.img)}
          alt={`Screenshot of ${props.project.title} project`}
          className="rounded-t-lg aspect-[1.449] object-cover"
        />

        <div className="p-4 h-32">
          <h2 className="font-bold mb-2">{props.project.title}</h2>
          <p className="text-sm">{props.project.description}</p>
        </div>
      </a>
    </motion.div>
  );
}

export default ProjectCard;
