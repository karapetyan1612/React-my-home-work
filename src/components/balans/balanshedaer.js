import CreatButton from "../button/CreatButton";
import { useTranslation } from "react-i18next";

function Balanshedaer() {
  const { t } = useTranslation();
  return (
    <div className="balansheader">
      <span className="balansspan">{t("glxavorEj.balans1")}</span>
      <div>
        <span className="balansspan1">1 058,68 $</span>
        <CreatButton className="balanstoup">
          {t("glxavorEj.toupbalans")}
        </CreatButton>
      </div>
    </div>
  );
}
export default Balanshedaer;
