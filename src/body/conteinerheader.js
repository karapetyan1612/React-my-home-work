import { useCallback, useContext, useState } from "react";
import BodyContext from "./BodyLenguageContext";
import CreatButton from "../CreatButton";

function HeaderCont(params) {
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
      <CreatButton className={params.date.class}>
        {params.date.contbut}
      </CreatButton>
    </div>
  );
}

export default HeaderCont;
