import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import "./index.css";

const navItem = [
  {
    id: 1,
    title: "Projects",
  },
  {
    id: 2,
    title: "Widget Configurations",
  },
  {
    id: 3,
    title: "Deployment",
  },
  {
    id: 4,
    title: "Pricing",
  },
];

const UploadSideNav = () => {
  const [activeTabId, setActiveTab] = useState(1);

  return (
    <div className="upload-side-nav-container">
      <div>
        <div className="upload-logo-container">
          <img
            src="https://res.cloudinary.com/dhwz560kk/image/upload/v1717848394/skbgwd3cphapryovpnh3.png"
            alt="website logo"
            className="upload-logo"
          />
          <h1 className="upload-logo-text">LAMA.</h1>
        </div>
        <p className="upload-side-nav-hint">Podcast Upload Flow</p>
        <ul className="upload-nav-list-container">
          {navItem.map((eachItem) => (
            <li
              className={`upload-nav-item ${
                activeTabId === eachItem.id ? "upload-nav-item-active" : null
              }`}
              key={eachItem.id}
              onClick={() => setActiveTab(eachItem.id)}
            >
              <p
                className={`upload-nav-item-number ${
                  activeTabId === eachItem.id
                    ? "upload-nav-item-number-active"
                    : null
                }`}
              >
                {eachItem.id}
              </p>
              <p
                className={`upload-nav-item-title ${
                  activeTabId === eachItem.id
                    ? "upload-nav-item-title-active"
                    : null
                }`}
              >
                {eachItem.title}
              </p>
            </li>
          ))}
        </ul>
        <hr className="upload-hr-line" />
      </div>
      <div>
        <hr className="upload-hr-line" />
        <div
          className={`upload-setting ${
            activeTabId === 5 ? "upload-setting-active" : null
          }`}
          onClick={()=> setActiveTab(5)}
        >
          <p
            className={`upload-setting-icon ${
              activeTabId === 5 ? "upload-setting-icon-active" : null
            }`}
          >
            <i className="fa-solid fa-gear"></i>
          </p>
          <p
            className={`upload-setting-title ${
              activeTabId === 5 ? "upload-setting-title-active" : null
            }`}
          >
            Settings
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadSideNav;
