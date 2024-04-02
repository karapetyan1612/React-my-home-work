import { useContext } from "react";
import Appointment from "./appointment";
import Countseling from "./counseling";
import CreatTranslate from "../translate/CreatTranslate";
import { Comment } from "./comment";
import CreatButton from "../button/CreatButton";
import "./body.css";
import { Link } from "react-router-dom";

function Body(params) {
  const t = useContext(CreatTranslate);
  return (
    <div className="Body">
      <div className="bodyCounseling">
        <Countseling></Countseling>
        <Appointment></Appointment>
      </div>
      <div className="bodydivbut">
        <Link to={"/zapis"}>
          <CreatButton className="bodybut1">{t.value.bodybut}</CreatButton>
        </Link>
      </div>
      <Comment></Comment>
    </div>
  );
}

export default Body;
