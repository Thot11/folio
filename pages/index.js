import ProjectCard from "../components/ProjectCard";


export default function Home({ projects }) {
  return (
    <div className="projects-grid">
      {projects.map((project, i) => (
        <ProjectCard project={project.attributes} />
      ))}
    </div>
  );
}
export async function getServerSideProps() {
  
  const response = await fetch(`http://localhost:1337/api/projects`);
  const projects = await response.json();
  return {
    props: {
      projects: projects.data,
    },
  };
}