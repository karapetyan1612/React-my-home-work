import { useCallback, useContext, useState } from "react";
import BodyContext from "./BodyLenguageContext";
import CreatButton from "../CreatButton";

function HeaderCont(params) {
  const [isShow, Show] = useState(false);
  const ContBut = useCallback(() => {
    if (isShow === false) {
      Show(true);
    } else {
      Show(false);
    }
  }, [isShow]);
  const t = useContext(BodyContext);
  return (
    <div className="headerCont">
      <div className="headerCont1">
        <div className="cont1">
          <div></div>
          <span>{params.date.date}</span>
        </div>
        <div className="cont2">
          <div></div>
          <span>{params.date.hour}</span>
        </div>
        <div className="cont3">
          <div></div>
          <span>{t.video}</span>
        </div>
      </div>
      {isShow ? (
        <CreatButton className="contbutt" onClick={ContBut}>
          {params.date.contbut1}
        </CreatButton>
      ) : (
        <CreatButton className="contbutt1" onClick={ContBut}>
          {params.date.contbut}
        </CreatButton>
      )}
    </div>
  );
}

export default HeaderCont;
