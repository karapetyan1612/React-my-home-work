import { useContext } from "react";
import CreatTranslate from "../../translate/CreatTranslate";
import HedaerData from "./hedaerdata";

function ProfilHedaer() {
  const t = useContext(CreatTranslate);
  const CommentArray = t.comment;

  const localId = localStorage.getItem("id");

  const ArrayMemo = CommentArray.filter((item) => {
    if (item.id == localId) {
      return [].push(item);
    }
  });
  return (
    <div className="headprof">
      <div className="profilhedaer">
        <div className="prof1">
          <span className="med">{ArrayMemo[0].vrach}</span>
          <p>{">"}</p>
          <span className="med">{ArrayMemo[0].pediatr}</span>
          <p>{">"}</p>
          <span className="med1">{ArrayMemo[0].profilvrach}</span>
        </div>
        <HedaerData></HedaerData>
      </div>
    </div>
  );
}
export default ProfilHedaer;
