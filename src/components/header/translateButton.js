import { useContext } from "react";
import CreatTranslate from "../translate/CreatTranslate";

function Translate() {
  const t = useContext(CreatTranslate);
  return (
    <div className="translate">
      <button
        className={t.Color ? "hedaerblue" : "hedaerwhite"}
        onClick={t.LenguageRu}
      >
        Ru
      </button>
      <button
        className={t.Color ? "hedaerwhite" : "hedaerblue"}
        onClick={t.LenguageEn}
      >
        En
      </button>
    </div>
  );
}
export default Translate;
