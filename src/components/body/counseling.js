import CreatButton from "../button/CreatButton";
import { useTranslation } from "react-i18next";

function Countseling() {
  const { t } = useTranslation();
  return (
    <div className="heightcouns">
      <div className="counseling">
        <div className="counseling1">
          <h1>{t("glxavorEj.hh")}</h1>
          <p>{t("glxavorEj.p")}</p>
          <CreatButton className="but1">{t("glxavorEj.but")}</CreatButton>
          <CreatButton className="but2">{t("glxavorEj.butt")}</CreatButton>
        </div>
        <div className="counseimg"></div>
      </div>
    </div>
  );
}
export default Countseling;
