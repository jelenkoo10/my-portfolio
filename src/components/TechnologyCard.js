import React from "react";

function TechnologyCard(props) {
  const { name, image } = props;

  return (
    <div className="tech-icon">
      <div>
        <img
          src={require(`../images/technologies/${props.image}`)}
          alt={`${name} Icon`}
        />
      </div>
      <h2>{name}</h2>
    </div>
  );
}

export default TechnologyCard;
