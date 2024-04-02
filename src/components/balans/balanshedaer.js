import { useContext } from "react";
import CreatButton from "../button/CreatButton";
import CreatTranslate from "../translate/CreatTranslate";

function Balanshedaer(params) {
  const t = useContext(CreatTranslate);
  return (
    <div className="balansheader">
      <span className="balansspan">{t.value.balans1}</span>
      <div>
        <span className="balansspan1">1 058,68 $</span>
        <CreatButton className="balanstoup">{t.value.toupbalans}</CreatButton>
      </div>
    </div>
  );
}
export default Balanshedaer;
