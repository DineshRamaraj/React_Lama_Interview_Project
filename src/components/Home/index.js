import "./index.css";

const Home = () => (
  <div className="home-container">
    <h1 className="home-title">Create a New Project</h1>
    <img
      className="home-image"
      src="https://res.cloudinary.com/dhwz560kk/image/upload/v1717847794/Group_16_zvlgt6.png"
      alt="create project"
    />
    <p className="home-description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
      dolores corrupti quas accusantium libero cumque nemo id aperiam beatae sit
      fuga voluptas, vitae velit explicabo repudiandae esse omnis eius amet!
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ad
      quisquam explicabo ducimus distinctio ab ipsa quaerat facilis corrupti cum
      quod quam sapiente harum sequi ipsum sed non nam praesentium?
    </p>
    <button type="button" className="create-button">
      <i class="fa-solid fa-plus create-icon"></i>
      <p className="create-button-text">Create New Project</p>
    </button>
  </div>
);

export default Home;
