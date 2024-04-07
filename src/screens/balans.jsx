import { useContext } from "react";
import BalansConteiner from "../components/balans/balanConteiner";
import ".././components/balans/balans.css";
import Balanshedaer from "../components/balans/balanshedaer";
import CreatTranslate from "../components/translate/CreatTranslate";
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
