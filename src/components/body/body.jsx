import { useContext } from "react";
import Appointment from "./appointment";
import Countseling from "./counseling";
import CreatTranslate from "../translate/CreatTranslate";
import { Comment } from "./comment";
import CreatButton from "../button/CreatButton";
import "./body.css";

function Body(params) {
  const t = useContext(CreatTranslate);
  console.log(t);
  return (
    <div className="Body">
      <div className="bodyCounseling">
        <Countseling></Countseling>
        <Appointment></Appointment>
      </div>
      <div className="bodydivbut">
        <CreatButton className="bodybut1">{t.value.bodybut}</CreatButton>
      </div>
      <Comment></Comment>
    </div>
  );
}

export default Body;
