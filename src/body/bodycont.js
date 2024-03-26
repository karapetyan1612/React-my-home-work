import { useContext } from "react";
import BodyContext from "./BodyLenguageContext";
import CreatButton from "../CreatButton";
function BodyCont(props) {
  const t = useContext(BodyContext);
  return (
    <div className="bodyCont">
      <div className="bodycont1">
        <div className={props.date.classname}></div>
        <div className="conttext">
          <span className="contextspan1">{props.date.name}</span>
          <span className="contextspan2">{props.date.profession}</span>
          <span className="contextspan3">{props.date.staj}</span>
        </div>
      </div>
      <div className="bodycont2">
        <CreatButton className="contbut1">{t.contbutt}</CreatButton>
        <CreatButton className="contbut2">{t.butcont}</CreatButton>
      </div>
    </div>
  );
}

export default BodyCont;
