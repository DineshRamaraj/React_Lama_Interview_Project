import Popup from "reactjs-popup";
import "./index.css";
import { useState } from "react";

const Home = () => {
  const [error_msg, seterrorMsg] = useState("none");
  const [inputValue, setInputValue] = useState("");

  const changeInputText = (event) => {
    setInputValue(event.target.value);
  };

  const errorMsg = (event) => {
    event.preventDefault();
    if (inputValue === "") seterrorMsg("block");
    else seterrorMsg("none");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Create a New Project</h1>
      <img
        className="home-image"
        src="https://res.cloudinary.com/dhwz560kk/image/upload/v1717847794/Group_16_zvlgt6.png"
        alt="create project"
      />
      <p className="home-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
        dolores corrupti quas accusantium libero cumque nemo id aperiam beatae
        sit fuga voluptas, vitae velit explicabo repudiandae esse omnis eius
        amet! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ad
        quisquam explicabo ducimus distinctio ab ipsa quaerat facilis corrupti
        cum quod quam sapiente harum sequi ipsum sed non nam praesentium?
      </p>
      <Popup
        trigger={
          <button type="button" className="create-button">
            <i class="fa-solid fa-plus create-icon"></i>
            <p className="create-button-text">Create New Project</p>
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="home-popup-container">
            {/* <button className="close" onClick={close}>
              &times;
            </button> */}
            <h1 className="home-popup-heading">Create Project</h1>
            <form className="home-popup-form" onSubmit={errorMsg}>
              <label className="home-popup-label">Enter Project Name</label>
              <input
                type="text"
                className="home-popup-input"
                placeholder="Type here"
                onChange={changeInputText}
              />
              <p
                className="home-popup-error-message"
                style={{ display: error_msg }}
              >
                Project Name Can't be empty
              </p>
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
                <button type="submit" className="home-popup-submit-button">
                  Create
                </button>
              </div>
            </form>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default Home;
