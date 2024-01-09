import image from "../Images/gears3.png";

function Header() {
  return (
    <>
      <section className="header-section">
        <div className="logo">
          <h2 className="logo-text">Meme generator</h2>
          <img src={image} alt="logo" />
        </div>
        <div className="header-right">
          <h5>Build your own memes</h5>
        </div>
      </section>
    </>
  );
}

export default Header;
