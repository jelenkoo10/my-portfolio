import React from "react";

function TechnologyCard(props) {
  const { name, image, description } = props;

  return (
    <div className="bg-gray-200 py-2 px-4 flex items-center gap-2 rounded-md w-[190px] sm:w-full">
      <img
        src={require(`../images/technologies/${image}`)}
        alt={`${name} Icon`}
        className="w-6"
      />
      <div className="flex flex-col">
        <span className="font-semibold">{name}</span>
        <span className="text-sm">{description}</span>
      </div>
    </div>
  );
}

export default TechnologyCard;
