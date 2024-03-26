import { useState } from "react";
import "./App.css";

import Header from "./header/header.js";
import HeaderContext from "./header/HeaderLenguageContext.js";
import BodyContext from "./body/BodyLenguageContext.js";
import { HeaderRu } from "./header/headtranslate.js";
import { HeaderEn } from "./header/headtranslate.js";
import Body from "./body/body.js";
import { BodyEn } from "./body/bodytranslate.js";
import { BodyRu } from "./body/bodytranslate.js";
import FooterContext from "./footer/footerLenguageContext.js";
import { Footer } from "./footer/footer.js";
import { FooterRu } from "./footer/footerTranslet.js";
import { FooterEn } from "./footer/footerTranslet.js";

function App() {
  <button>fger</button>;
  const [headlenguage, setHeadLenguage] = useState(HeaderRu);
  const [bodylenguage, setBodyLenguage] = useState(BodyRu);
  const [footerlenguage, setFooterLenguage] = useState(FooterRu);

  const LenguageRU = function () {
    setHeadLenguage(HeaderRu);
    setBodyLenguage(BodyRu);
    setFooterLenguage(FooterRu);
  };
  const LenguageEN = function () {
    setHeadLenguage(HeaderEn);
    setBodyLenguage(BodyEn);
    setFooterLenguage(FooterEn);
  };

  return (
    <div className="main">
      <HeaderContext.Provider
        value={{
          value: headlenguage,
          LenguageRu: LenguageRU,
          LenguageEn: LenguageEN,
        }}
      >
        <Header></Header>
      </HeaderContext.Provider>
      <BodyContext.Provider value={bodylenguage}>
        <Body></Body>
      </BodyContext.Provider>
      <FooterContext.Provider value={footerlenguage}>
        <Footer></Footer>
      </FooterContext.Provider>
    </div>
  );
}

export default App;
