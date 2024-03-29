import { useContext } from "react";
import CreatTranslate from "../translate/CreatTranslate";
import CreatButton from "../button/CreatButton";

function HeaderCont(params) {
  const t = useContext(CreatTranslate);
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
          <span>{t.value.video}</span>
        </div>
      </div>
      <CreatButton className={params.date.class}>
        {params.date.contbut}
      </CreatButton>
    </div>
  );
}

export default HeaderCont;
