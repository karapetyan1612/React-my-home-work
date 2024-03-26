import { useContext } from "react";
import BodyContext from "./BodyLenguageContext";
import CreatButton from "../CreatButton";

function Countseling() {
  const t = useContext(BodyContext);
  return (
    <div className="heightcouns">
      <div className="counseling">
        <div className="counseling1">
          <h1>{t.hh}</h1>
          <p>{t.p}</p>
          <CreatButton className="but1">{t.but}</CreatButton>
          <CreatButton className="but2">{t.butt}</CreatButton>
        </div>
        <div className="counseimg"></div>
      </div>
    </div>
  );
}
export default Countseling;
