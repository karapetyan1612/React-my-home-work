import CreatButton from "../button/CreatButton";
import { useTranslation } from "react-i18next";

function HeaderCont(params) {
  const { t } = useTranslation();
  return (
    <div className="headerCont">
      <div className="headerCont1">
        <div className="cont1">
          <div></div>
          <span>{params.date?.date_of_birth}</span>
        </div>
        <div className="cont2">
          <div></div>
          <span>{params.date?.excperience_start_year}</span>
        </div>
        <div className="cont3">
          <div></div>
          <span>{t("glxavorEj.video")}</span>
        </div>
      </div>
      <CreatButton>Hello</CreatButton>
    </div>
  );
}

export default HeaderCont;
