import "./index.css";

const Header = () => (
  <div className="header-container">
    <div className="header-logo-container">
      <img
        src="https://res.cloudinary.com/dhwz560kk/image/upload/v1717848394/skbgwd3cphapryovpnh3.png"
        alt="website logo"
        className="header-logo"
      />
      <h1 className="header-logo-text">LAMA.</h1>
    </div>
    <div className="header-setting-container">
      <i className="fa-solid fa-gear header-setting"></i>
      <i className="fa-regular fa-bell header-bell"></i>
    </div>
  </div>
);

export default Header;
