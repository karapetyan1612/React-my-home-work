import { useState } from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import Body from "./components/body/body.jsx";
import Footer from "./components/footer/footer.jsx";
import { TranslateEn, TranslateRu } from "./components/translate/translate.jsx";
import CreatTranslate from "./components/translate/CreatTranslate.jsx";

function App() {
  const [Translate, setTranslate] = useState(TranslateRu);
  const [buttonColor, setButtonColor] = useState(true);

  const LenguageRU = function () {
    setTranslate(TranslateRu);
    setButtonColor(!buttonColor);
  };
  const LenguageEN = function () {
    setTranslate(TranslateEn);
    setButtonColor(!buttonColor);
  };

  return (
    <div className="main">
      <CreatTranslate.Provider
        value={{
          value: Translate,
          LenguageRu: LenguageRU,
          LenguageEn: LenguageEN,
          Color: buttonColor,
        }}
      >
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </CreatTranslate.Provider>
    </div>
  );
}

export default App;
