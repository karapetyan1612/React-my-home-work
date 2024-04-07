import { useState } from "react";
import "./App.css";
import Header from "./screens/header.jsx";
import Body from "./screens/body.jsx";
import Footer from "./screens/footer.jsx";
import { TranslateEn, TranslateRu } from "./components/translate/translate.jsx";
import CreatTranslate from "./components/translate/CreatTranslate.jsx";
import ProfilDoctor from "./screens/profil.jsx";
import { Route, Routes } from "react-router-dom";
import {
  CommentArrayEn,
  CommentArrayRu,
} from "./components/body/commentarray.js";
import Balans from "./screens/balans.jsx";
import { BalansArrEn, BalansArrRu } from "./components/balans/balansarray.js";
import Zapis from "./screens/zapis.jsx";

function App() {
  const [Translate, setTranslate] = useState(TranslateRu);
  const [buttonColor, setButtonColor] = useState(true);
  const [commentarray, setCommentArray] = useState(CommentArrayRu);
  const [balansArr, setBalansArr] = useState(BalansArrRu);

  const LenguageRU = function () {
    setTranslate(TranslateRu);
    setButtonColor(true);
    setCommentArray(CommentArrayRu);
    setBalansArr(BalansArrRu);
  };
  const LenguageEN = function () {
    setTranslate(TranslateEn);
    setButtonColor(false);
    setCommentArray(CommentArrayEn);
    setBalansArr(BalansArrEn);
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
          balans: balansArr,
        }}
      >
        <Header></Header>
        <Routes>
          <Route path="/" element={<Body></Body>} />
          <Route path="/profil/:id" element={<ProfilDoctor></ProfilDoctor>} />
          <Route path="/balans" element={<Balans></Balans>} />
          <Route path="/zapis" element={<Zapis></Zapis>} />
          <Route path="/*" element={<h1>404 Not Found</h1>}></Route>
        </Routes>
        <Footer></Footer>
      </CreatTranslate.Provider>
    </div>
  );
}

export default App;
