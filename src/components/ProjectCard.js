import React from "react";
import { gsap } from "gsap";

function ProjectCard(props) {
  const imgRef = React.useRef();

  React.useEffect(() => {
    if (props.toggle) {
      gsap.from(imgRef.current, { duration: 0.5, opacity: 0 });
    }
  }, [props.toggle]);

  return (
    <div className="project-card max-w-[400px] m-0 border border-[var(--base-color)] rounded-lg">
      <a
        href={props.project.link}
        target={props.project.link != "" ? "_blank" : "_self"}
      >
        <img
          src={require("../images/project_screenshots" + props.img)}
          alt={`Screenshot of ${props.project.title} project`}
          className="rounded-t-lg aspect-[1.449] object-cover"
          ref={imgRef}
        />
      </a>
      <div className="p-4 h-32">
        <h2 className="font-bold mb-2">{props.project.title}</h2>
        <p className="text-sm">{props.project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
