import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import { useState } from "react";

// add theme song on clicked character

function App() {
  const images = [
    { fileName: "jeff.jpg", altText: "Jeff image" },
    { fileName: "sue.jpg", altText: "Emma Stone image" },
    { fileName: "adam.jpg", altText: "Adam Warlock image" },
    { fileName: "hela.jpg", altText: "Hela image" },
    { fileName: "ironman.jpg", altText: "Iron Man image" },
    { fileName: "luna.jpg", altText: "Luna Snow image" },
    { fileName: "strange.jpg", altText: "Dr. Strange image" },
    { fileName: "emma.jpg", altText: "Sue Storm image" },
  ];
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  // const gifs = [];
  // const gif_id = 0;
  // const apiKey = import.meta.env.VITE_GIPHY_API || "your_default_api_key";
  // const api = `http://api.giphy.com/v1/gifs/${gif_id}&api_key=${apiKey}`;
  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore}/>
      <div className="grid-layout">
        {images.map((image, index) => (
          <Card
            key={index}
            src={`../assets/${image.fileName}`}
            alt={image.altText}
          />
        ))}
      </div>
    </>
  );
}

export default App;
