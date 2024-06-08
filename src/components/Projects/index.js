import "./index.css";

const Projects = () => (
  <div className="project-container">
    <div className="project-header-container">
      <h1 className="project-title">Projects</h1>
      <div>
        <button type="button" className="project-add-button">
          <i class="fa-solid fa-plus add-icon"></i>
          <p className="project-add-button-text">Create New Project</p>
        </button>
      </div>
    </div>
  </div>
);

export default Projects;
