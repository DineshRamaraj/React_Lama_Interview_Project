import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import ContextComponent from "./Context/contextComponent";
import Home from "./components/Home";
import Projects from "./components/Projects";
import UploadFlow from "./components/UploadFlow";
import ProjectConfiguration from "./components/ProjectConfiguration";
import "./App.css";

const projectItem = [
  {
    id: uuidv4(),
    name: "SampleProject",
    episodes: 4,
    editingTime: "week",
  },
  {
    id: uuidv4(),
    name: "SampleProject",
    episodes: 4,
    editingTime: "week",
  },
  {
    id: uuidv4(),
    name: "SampleProject",
    episodes: 4,
    editingTime: "week",
  },
  {
    id: uuidv4(),
    name: "SampleProject",
    episodes: 4,
    editingTime: "week",
  },
  {
    id: uuidv4(),
    name: "SampleProject",
    episodes: 4,
    editingTime: "week",
  },
];

class App extends Component {
  state = {
    projects: projectItem,
  };

  addNewProjectItem = (projectName) => {
    const newObject = {
      id: uuidv4(),
      name: projectName[0].toUpperCase() + projectName.slice(1),
      episodes: 4,
      editingTime: "now",
    };
    this.setState((prevState) => ({
      projects: [...prevState.projects, newObject]
    }));
    console.log("Hello");
  };

  render() {
    const { projects } = this.state;
    console.log(projects);
    return (
      <BrowserRouter>
        <div className="App">
          <ContextComponent.Provider
            value={{
              addNewProjectItem: this.addNewProjectItem,
              projects: projects,
            }}
          >
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path='/upload' element={<UploadFlow />} />
              <Route path='/configuration' element={<ProjectConfiguration />} />
            </Routes>
          </ContextComponent.Provider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
