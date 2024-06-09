import "./index.css";

const listItem = [
  {
    id: 1,
    name: "SampleProject",
    episodes: 4,
    editingTime: "week",
  },
  {
    id: 2,
    name: "SampleProject",
    episodes: 4,
    editingTime: "week",
  },
  {
    id: 3,
    name: "SampleProject",
    episodes: 4,
    editingTime: "week",
  },
  {
    id: 4,
    name: "SampleProject",
    episodes: 4,
    editingTime: "week",
  },
  {
    id: 5,
    name: "SampleProject",
    episodes: 4,
    editingTime: "week",
  },
];

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
    <ul className="project-list-container">
      {listItem.map((eachItem) => (
        <li className="project-item" key={eachItem.id}>
          <div className="project-logo">{eachItem.name[0]}</div>
          <div className="project-name-container">
            <div>
              <h1 className="project-name">{eachItem.name}</h1>
              <p className="project-episodes">{eachItem.episodes} Episodes</p>
            </div>
            <p className="project-editing-time">
              Last edited a {eachItem.editingTime} ago
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Projects;
