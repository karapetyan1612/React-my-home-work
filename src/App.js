import { useState } from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import Body from "./components/body/body.jsx";
import Footer from "./components/footer/footer.jsx";
import { TranslateEn, TranslateRu } from "./components/translate/translate.jsx";
import CreatTranslate from "./components/translate/CreatTranslate.jsx";
import ProfilDoctor from "./components/profildoctor/profil.jsx";
import { Route, Routes } from "react-router-dom";
import {
  CommentArrayEn,
  CommentArrayRu,
} from "./components/body/commentarray.js";

function App() {
  const [Translate, setTranslate] = useState(TranslateRu);
  const [buttonColor, setButtonColor] = useState(true);
  const [commentarray, setCommentArray] = useState(CommentArrayRu);

  const LenguageRU = function () {
    setTranslate(TranslateRu);
    setButtonColor(!buttonColor);
    setCommentArray(CommentArrayRu);
  };
  const LenguageEN = function () {
    setTranslate(TranslateEn);
    setButtonColor(!buttonColor);
    setCommentArray(CommentArrayEn);
  };

  return (
    <div className="main">
      <CreatTranslate.Provider
        value={{
          value: Translate,
          LenguageRu: LenguageRU,
          LenguageEn: LenguageEN,
          Color: buttonColor,
          comment: commentarray,
        }}
      >
        <Header></Header>
        <Routes>
          <Route path="/" element={<Body></Body>} />
          <Route path="/profil" element={<ProfilDoctor></ProfilDoctor>} />
        </Routes>
        <Footer></Footer>
      </CreatTranslate.Provider>
    </div>
  );
}

export default App;
