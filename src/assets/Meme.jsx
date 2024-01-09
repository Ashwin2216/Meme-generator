import React from "react";

function Meme({ handleChange, handleSubmit, memeData, getMemeImage }) {
  return (
    <section className="input-section">
      <form onSubmit={handleSubmit} className="form " action="">
        <input
          placeholder="Top-text"
          className="text-box-1"
          type="text"
          name="topText"
          value={memeData?.topText}
          onChange={handleChange}
        />
        <input
          placeholder="Bottom-text"
          className="text-box-2"
          type="text"
          name="bottomText"
          value={memeData?.bottomText}
          onChange={handleChange}
        />
        <button className="meme-button" type="button" onClick={getMemeImage}>
          New meme image
        </button>
      </form>
      <div className="image-container ">
        <img src={memeData?.randomImg} alt="meme-image" />
      </div>
    </section>
  );
}

export default Meme;
