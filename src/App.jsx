import "./App.css";
import Card from "./components/Card";

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
  return (
    <>
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
