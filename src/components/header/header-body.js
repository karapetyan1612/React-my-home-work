import HeaderAccount from "./header-account";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function HeaderBody() {
  return (
    <div className="header-body">
      <BodyFrame></BodyFrame>
      <Notifications></Notifications>
      <HeaderAccount></HeaderAccount>
    </div>
  );
}

export default HeaderBody;

function BodyFrame() {
  const { t } = useTranslation();
  return (
    <div className="BodyFrame">
      <Link to={"*"}>
        <button className="BodyFrameButton">{t("glxavorEj.bodyframe1")}</button>
      </Link>

      <Link to={"/zapis"}>
        <button className="BodyFrameButton">{t("glxavorEj.bodyframe2")}</button>
      </Link>
      <Link to={"*"}>
        <button className="BodyFrameButton">{t("glxavorEj.bodyframe3")}</button>
      </Link>
    </div>
  );
}

function Notifications() {
  return (
    <div className="notifications">
      <button className="notifications-zang"></button>

      <button className="notifications-elips">
        <span>3</span>
      </button>
    </div>
  );
}
