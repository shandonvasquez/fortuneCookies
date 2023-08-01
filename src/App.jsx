import { useState } from "react";
import "./App.css";
import ContainerInfo from "./components/ContainerInfo";
import db from "./db/phrase.json";

const backgrounds = ["bg1", "bg2", "bg3", "bg4"];

function App() {
  const getRandomItem = (listItems) => {
    const randomIndex = Math.floor(Math.random() * listItems.length);
    return listItems[randomIndex];
  };

  const [quote, setQuote] = useState(getRandomItem(db));
  const [bgImage, setBgImage] = useState(getRandomItem(backgrounds));

  const CreateNewQuote = () => {
    setQuote(getRandomItem(db));
    setBgImage(getRandomItem(backgrounds));
  };

  return (
    <div className={`App ${bgImage}`}>
      <ContainerInfo quote={quote} CreateNewQuote={CreateNewQuote} />
      {foo()} {/* Including the footer here */}
    </div>
  );
}

const foo = () => {
  return (
    <footer>
      <p>Web developer Shandon Vasquez</p>
    </footer>
  );
};

export default App;
