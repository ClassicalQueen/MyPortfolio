function ProjectCard({ title, description, techStack, liveLink, repoLink }) {
    return (
      <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Technologies:</strong></p>
        <ul>
          {techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div>
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
            
          )}
          <br />
          {repoLink && (
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    );
  }
  
  export default ProjectCard;
  