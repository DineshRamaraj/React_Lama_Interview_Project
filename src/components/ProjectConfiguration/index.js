import { useState } from "react";
import UploadSideNav from "../UploadSideNav";
import NavBar from "../NavBar";
import "./index.css";

const confiListItem = [
    {
        id: 1,
        title: "General"
    },
    {
        id: 2,
        title: "Display"
    },
    {
        id: 3,
        title: "Advanced"
    },
]

const renderGeneral = () => (
    <div className="project-confi-general-container">
        <div className="project-confi-chatbox-container">
            <label className="project-confi-label">Chatbot Name</label>
            <input type="text" className="project-confi-input"/>
            <p className="project-confi-hint">Lorem Ipsuim dolor sit Lorem Ipsuim dolor sit amet</p>
        </div>
        <div className="project-confi-welcome-container">
            <label className="project-confi-label">Chatbot Name</label>
            <input type="text" className="project-confi-input"/>
            <p className="project-confi-hint">Lorem Ipsuim dolor sit Lorem Ipsuim dolor sit amet</p>
        </div>
        <div className="project-confi-input-container">
            <label className="project-confi-label">Chatbot Name</label>
            <input type="text" className="project-confi-input"/>
            <p className="project-confi-hint">Lorem Ipsuim dolor sit Lorem Ipsuim dolor sit amet</p>
        </div>
    </div>
)

const ProjectConfiguration = () => {
  const [confiTabId, setConfiTabId] = useState(confiListItem[0].id);
  return (
    <div className="main-project-confi-container">
      <UploadSideNav />
      <div>
        <NavBar />
        <div className="project-confi-container">
          <h1 className="project-confi-heading">Configuration</h1>
          <div className="project-confi-list-hr-line-container">
            <ul className="project-confi-list-container">
                {confiListItem.map(eachItem=> 
              <li className="project-confi-list-item" key={eachItem.id} onClick={()=> setConfiTabId(eachItem.id)}>
                <button type="button" className={`${confiTabId === eachItem.id ? "project-confi-list-button-active" : "project-confi-list-button"}`}>
                  {eachItem.title}
                </button>
              </li>)}
            </ul>
            <hr className="project-confi-list-hr-line" />
          </div>

          {confiTabId === 1 && renderGeneral()}
        </div>
      </div>
    </div>
  );
};

export default ProjectConfiguration;
