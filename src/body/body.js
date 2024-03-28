import { useContext } from "react";
import Appointment from "./appointment";
import Countseling from "./counseling";
import BodyContext from "./BodyLenguageContext";
import { Comment } from "./comment";
import CreatButton from "../CreatButton";
import "./body.css";

function Body(params) {
  const t = useContext(BodyContext);
  return (
    <div className="Body">
      <div className="bodyCounseling">
        <Countseling></Countseling>
        <Appointment></Appointment>
      </div>
      <div className="bodydivbut">
        <CreatButton className="bodybut1">{t.bodybut}</CreatButton>
      </div>
      <Comment></Comment>
    </div>
  );
}

export default Body;
