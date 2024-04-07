import { useContext } from "react";
import CreatTranslate from "../translate/CreatTranslate";
import CreatButton from "../button/CreatButton";
import { Link } from "react-router-dom";

function BodyCont(props) {
  const t = useContext(CreatTranslate);

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
        <CreatButton className="contbut1">{t.value.contbutt}</CreatButton>
        <CreatButton className="contbut2">{t.value.butcont}</CreatButton>
      </div>
    </div>
  );
}

export default BodyCont;
