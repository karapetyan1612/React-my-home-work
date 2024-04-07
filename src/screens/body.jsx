import { useContext } from "react";
import Appointment from "../components/body/appointment";
import Countseling from "../components/body/counseling";
import CreatTranslate from "../components/translate/CreatTranslate";
import { Comment } from "../components/body/comment";
import CreatButton from "../components/button/CreatButton";
import "../components/body/body.css";
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
