import { useContext } from "react";
import HeaderAccount from "./header-account";
import CreatTranslate from "../translate/CreatTranslate";
import { Link } from "react-router-dom";

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
  const t = useContext(CreatTranslate);
  return (
    <div className="BodyFrame">
      <Link to={"*"}>
        <button className="BodyFrameButton">{t.value.bodyframe1}</button>
      </Link>

      <Link to={"/zapis"}>
        <button className="BodyFrameButton">{t.value.bodyframe2}</button>
      </Link>
      <Link to={"*"}>
        <button className="BodyFrameButton">{t.value.bodyframe3}</button>
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
