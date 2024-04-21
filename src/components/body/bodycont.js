import CreatButton from "../button/CreatButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function BodyCont(props) {
  const { t } = useTranslation();

  return (
    <div className="bodyCont">
      <div className="bodycont1">
        <Link to={`/profil/${props.date.id}`}>
          <img className="imgprops" src={props.date.profile_image} />
        </Link>

        <div className="conttext">
          <span className="contextspan1">
            {props.date.first_name} {props.date.last_name}
          </span>
          <span className="contextspan2">
            {props.date.user_categories[0].category.title.ru}
          </span>
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
