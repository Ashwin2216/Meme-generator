import "./App.css";
import Header from "./assets/Header";
import { useEffect, useState } from "react";
function App() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/2wifvo.jpg",
  });

  const [allMeme, setAllMeme] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((memeData) => setAllMeme(memeData.data.memes));
  }, []);

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const randomMemeimg = allMeme[randomNumber].url;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImg: randomMemeimg,
      };
    });
    console.log(meme, "checking state of meme");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <Header />
      <section className="input-section">
        <form onSubmit={handleSubmit} className="form " action="">
          <input
            placeholder="Top-text"
            className="text-box-1"
            type="text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            placeholder="Bottom-text"
            className="text-box-2"
            type="text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
          <button className="meme-button" type="button" onClick={getMemeImage}>
            New meme image
          </button>
        </form>
        <div className="image-container ">
          <img src={meme.randomImg} alt="meme-image" />
          <h2 className="meme-text meme-text-top">{meme.topText}</h2>
          <h2 className="meme-text meme-text-bottom ">{meme.bottomText}</h2>
        </div>
      </section>
    </div>
  );
}

export default App;
