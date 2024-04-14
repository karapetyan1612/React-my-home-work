import CreatButton from "../button/CreatButton";
import { useTranslation } from "react-i18next";

function HeaderCont(params) {
  const { t } = useTranslation();
  console.log(params.date);
  return (
    <div className="headerCont">
      <div className="headerCont1">
        <div className="cont1">
          <div></div>
          <span>{params.date[0].date_of_birth}</span>
        </div>
        <div className="cont2">
          <div></div>
          <span>{params.date.hour}</span>
        </div>
        <div className="cont3">
          <div></div>
          <span>{t("glxavorEj.video")}</span>
        </div>
      </div>
      <CreatButton className={params.date.class}>
        {params.date.contbut}
      </CreatButton>
    </div>
  );
}

export default HeaderCont;
