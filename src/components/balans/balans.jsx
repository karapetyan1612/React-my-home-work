import { useContext } from "react";
import BalansConteiner from "./balanConteiner";
import "./balans.css";
import Balanshedaer from "./balanshedaer";
import CreatTranslate from "../translate/CreatTranslate";
function Balans() {
  const t = useContext(CreatTranslate);
  return (
    <div className="balansMain">
      <div className="balans">
        <Balanshedaer></Balanshedaer>
        <span className="payment">{t.value.payment}</span>
        <BalansConteiner></BalansConteiner>
      </div>
    </div>
  );
}

export default Balans;
