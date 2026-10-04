import { FiArrowUpRight, FiGithub } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="project-image"
          loading="lazy"
        />
        
        {project.status === "Complete" && (
          <span className="project-status-badge project-complete-badge">
            <span className="status-dot"></span>
            COMPLETED
          </span>
          )}

          {project.status === "Complete" && (
          <span className="project-status-badge project-complete-badge">
            <span className="status-dot"></span>
            COMPLETED
          </span>
          )}

        {/* IN PROGRESS BADGE */}
        {project.status === "In Progress" && (
          <span className="project-status-badge">
            <span className="status-dot"></span>
            IN PROGRESS
          </span>
        )}

        <div className="project-image-overlay">
          <a
            href={project.liveUrl}
            target={project.liveUrl !== "#" ? "_blank" : undefined}
            rel={project.liveUrl !== "#" ? "noreferrer" : undefined}
            className="project-preview-link"
          >
            View Project ↗
          </a>
        </div>
      </div>

      <div className="project-content">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>0{project.id}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>

        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.liveUrl}
            target={project.liveUrl !== "#" ? "_blank" : undefined}
            rel={project.liveUrl !== "#" ? "noreferrer" : undefined}
          >
            Live Demo ↗
          </a>

          <a
            href={project.githubUrl}
            target={project.githubUrl !== "#" ? "_blank" : undefined}
            rel={project.githubUrl !== "#" ? "noreferrer" : undefined}
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;