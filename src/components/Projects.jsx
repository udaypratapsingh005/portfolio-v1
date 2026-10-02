import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-heading projects-heading">
          <span className="section-label">Selected Work</span>

          <h2 className="section-title">
            Things I've
            <br />
            built.
          </h2>

          <p className="section-description">
            A selection of projects I've built while learning and working with
            modern web technologies.
          </p>
        </div>

        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className="other-projects">
            <div className="other-projects-heading">
              <span>More Projects</span>
            </div>

            <div className="other-projects-grid">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;