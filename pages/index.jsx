import React from 'react';
import ProjectCard from "../components/ProjectCard";
import SceneOne from '../components/sceneOne';

const qs = require('qs');

export default function Home({ projects }) {

  return (
    <div className='background'>
      <SceneOne />
      {/* <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard project={project.attributes} />
        ))}
      </div> */}
    </div>
  );
}
export async function getServerSideProps() {
  const query = qs.stringify({
    populate: [
      'name',
      'startOfProject',
      'endOfProject',
      'pictures',
      'company.name',
      'company.status'
    ],
  }, {
    encodeValuesOnly: true,
  });

  console.log(query)
  
  const response = await fetch(`http://localhost:1337/api/projects`);
  const projects = await response.json();
  return {
    props: {
      projects: projects.data,
    },
  };
}