import Popup from "reactjs-popup";
import { useState } from "react";

import ContextComponent from "../../Context/contextComponent";
import Header from "../Header"
import "./index.css";

const Home = () => {
  const [error_msg, seterrorMsg] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const changeInputText = (event) => {
    setInputValue(event.target.value);
  };

  // const toggleButton = () => {
  //   var blur = document.getElementById("homeContainer");
  //   console.log(blur);
  //   blur.classList.toggle("blur-effect");
  // };

  return (
    <ContextComponent.Consumer>
      {(value) => {
        const { addNewProjectItem } = value;
        return (
          <>
            <Header />
            <div className="home-container" id="homeContainer">
              <h1 className="home-title">Create a New Project</h1>
              <img
                className="home-image"
                src="https://res.cloudinary.com/dhwz560kk/image/upload/v1717847794/Group_16_zvlgt6.png"
                alt="create project"
              />
              <p className="home-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Necessitatibus dolores corrupti quas accusantium libero cumque
                nemo id aperiam beatae sit fuga voluptas, vitae velit explicabo
                repudiandae esse omnis eius amet! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Amet, ad quisquam explicabo
                ducimus distinctio ab ipsa quaerat facilis corrupti cum quod
                quam sapiente harum sequi ipsum sed non nam praesentium?
              </p>
              <Popup
                trigger={
                  <button type="button" className="create-button">
                    <i className="fa-solid fa-plus create-icon"></i>
                    <p className="create-button-text">Create New Project</p>
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
          </>
        );
      }}
    </ContextComponent.Consumer>
  );
};

export default Home;
