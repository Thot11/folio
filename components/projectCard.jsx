import React from 'react';

const ProjectCard = ({project}) => {

  console.log(project)

  return (
    <div className="projectCardContainer">
      <p>{project.name}</p>
    </div>
  );
};

export default ProjectCard;
