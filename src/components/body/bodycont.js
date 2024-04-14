import CreatButton from "../button/CreatButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function BodyCont(props) {
  const { t } = useTranslation();

  return (
    <div className="bodyCont">
      <div className="bodycont1">
        <Link to={`/profil/${props.date.id}`}>
          <div className={props.date.classname}></div>
        </Link>

        <div className="conttext">
          <span className="contextspan1">{props.date.name}</span>
          <span className="contextspan2">{props.date.profession}</span>
          <span className="contextspan3">{props.date.staj}</span>
        </div>
      </div>
      <div className="bodycont2">
        <CreatButton className="contbut1">
          {t("glxavorEj.contbutt")}
        </CreatButton>
        <CreatButton className="contbut2">{t("glxavorEj.butcont")}</CreatButton>
      </div>
    </div>
  );
}

export default BodyCont;
