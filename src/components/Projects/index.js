import Popup from "reactjs-popup";
import { useState } from "react";
import ContextComponent from "../../Context/contextComponent";
import Header from "../Header";
import "./index.css";

const Projects = () => {
  const [error_msg, seterrorMsg] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const changeInputText = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <ContextComponent.Consumer>
      {(value) => {
        const { addNewProjectItem, projects } = value;

        return (
          <>
            <Header />
            <div className="project-container">
              <div className="project-header-container">
                <h1 className="project-title">Projects</h1>
                <div>
                  <Popup
                    trigger={
                      <button type="button" className="project-add-button">
                        <i className="fa-solid fa-plus add-icon"></i>
                        <p className="project-add-button-text">
                          Create New Project
                        </p>
                      </button>
                    }
                    modal
                    nested
                  >
                    {(close) => {
                      const errorMsg = (event) => {
                        event.preventDefault();
                        if (inputValue === "") {
                          seterrorMsg(true);
                        } else {
                          seterrorMsg(false);
                          close();
                          addNewProjectItem(inputValue);
                        }
                      };

                      return (
                        <div className="home-popup-container">
                          {/* <button className="close" onClick={close}>
              &times;
            </button> */}
                          <h1 className="home-popup-heading">Create Project</h1>
                          <form className="home-popup-form" onSubmit={errorMsg}>
                            <label className="home-popup-label">
                              Enter Project Name
                            </label>
                            <input
                              type="text"
                              className="home-popup-input"
                              placeholder="Type here"
                              onChange={changeInputText}
                            />
                            {error_msg ? (
                              <p className="home-popup-error-message">
                                Project Name Can't be empty
                              </p>
                            ) : null}
                            <div className="home-popup-buttons-container">
                              <button
                                type="button"
                                className="home-popup-close-button"
                                onClick={() => {
                                  close();
                                }}
                              >
                                Close
                              </button>
                              <button
                                type="submit"
                                className="home-popup-submit-button"
                              >
                                Create
                              </button>
                            </div>
                          </form>
                        </div>
                      );
                    }}
                  </Popup>
                </div>
              </div>
              <ul className="project-list-container">
                {projects.map((eachItem) => (
                  <li className="project-item" key={eachItem.id}>
                    <div className="project-logo">{eachItem.name[0]}</div>
                    <div className="project-name-container">
                      <div>
                        <h1 className="project-name">{eachItem.name}</h1>
                        <p className="project-episodes">
                          {eachItem.episodes} Episodes
                        </p>
                      </div>
                      <p className="project-editing-time">
                        Last edited a {eachItem.editingTime} ago
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        );
      }}
    </ContextComponent.Consumer>
  );
};

export default Projects;
