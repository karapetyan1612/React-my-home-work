import { useContext } from "react";
import HeaderAccount from "./header-account";
import HeaderContext from "./HeaderLenguageContext";

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
  const t = useContext(HeaderContext);
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
