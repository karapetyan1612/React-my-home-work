import BalansConteiner from "../components/balans/balansConteiner";
import ".././components/balans/balans.css";
import Balanshedaer from "../components/balans/balanshedaer";
import { useTranslation } from "react-i18next";
function Balans() {
  const { t } = useTranslation();
  return (
    <div className="balansMain">
      <div className="balans">
        <Balanshedaer></Balanshedaer>
        <span className="payment">{t("glxavorEj.payment")}</span>
        <BalansConteiner></BalansConteiner>
      </div>
    </div>
  );
}

export default Balans;
