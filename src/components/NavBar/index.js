import "./index.css";

const NavBar = () => (
  <div className="nav-bar-container">
    <div className="nav-bar-direction-container">
      <i class="fa-solid fa-house nav-bar-home-icon"></i>
    </div>
    <div className="nav-bar-lang-bell-container">
      <div className="nav-bar-lang-icon-container">
        <span className="nav-bar-lang-name">EN</span>
        <img
          src="https://res.cloudinary.com/dhwz560kk/image/upload/v1717995917/aveuwmq7pqfqdvsd8olt.png"
          alt="lang icon"
          className="nav-bar-lang-icon"
        />
      </div>

      <div className="nav-bar-bell-container">
        <i className="fa-regular fa-bell nav-bar-bell"></i>
      </div>
    </div>
  </div>
);

export default NavBar;
