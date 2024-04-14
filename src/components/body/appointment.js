import CreatButton from "../button/CreatButton";
import { useTranslation } from "react-i18next";

function Appointment() {
  const { t } = useTranslation();
  return (
    <div className="div11">
      <div className="appointment">
        <div className="image1"></div>
        <div className="appointmentbody">
          <h1>{t("glxavorEj.bodyh")}</h1>
          <p>{t("glxavorEj.bodyp")}</p>
          <div className="bodyul">
            <div></div>
            <p>{t("glxavorEj.bodyul")}</p>
          </div>
          <div className="bodyul">
            <div></div>
            <p>{t("glxavorEj.bodyull")}</p>
          </div>
          <div className="bodyul">
            <div></div>
            <p>{t("glxavorEj.bodyull")}</p>
          </div>
          <CreatButton>{t("glxavorEj.but")}</CreatButton>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
