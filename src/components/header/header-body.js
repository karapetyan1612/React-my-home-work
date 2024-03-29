import { useContext } from "react";
import HeaderAccount from "./header-account";
import CreatTranslate from "../translate/CreatTranslate";

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
      <button className="BodyFrameButton">{t.value.bodyframe1}</button>
      <button className="BodyFrameButton">{t.value.bodyframe2}</button>
      <button className="BodyFrameButton">{t.value.bodyframe2}</button>
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
