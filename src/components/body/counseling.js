import { useContext } from "react";
import CreatTranslate from "../translate/CreatTranslate";
import CreatButton from "../button/CreatButton";

function Countseling() {
  const t = useContext(CreatTranslate);
  return (
    <div className="heightcouns">
      <div className="counseling">
        <div className="counseling1">
          <h1>{t.value.hh}</h1>
          <p>{t.value.p}</p>
          <CreatButton className="but1">{t.value.but}</CreatButton>
          <CreatButton className="but2">{t.value.butt}</CreatButton>
        </div>
        <div className="counseimg"></div>
      </div>
    </div>
  );
}
export default Countseling;
