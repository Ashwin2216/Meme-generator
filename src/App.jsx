import "./App.css";
import Header from "./assets/Header";
import Meme from "./assets/Meme";
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
      ({
        ...prevMeme,
        randomImg: randomMemeimg,
      });
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
      <Meme
        memeData={meme}
        handleChange={handleChange}
        getMemeImage={getMemeImage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
