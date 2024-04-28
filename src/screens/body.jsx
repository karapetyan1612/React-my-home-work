import Appointment from "../components/body/appointment";
import Countseling from "../components/body/counseling";
import { Comment } from "../components/body/comment";
import CreatButton from "../components/button/CreatButton";
import "../components/body/body.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import store from "../store";

function Body() {
  const { t } = useTranslation();
  return (
    <div className="Body">
      <div className="bodyCounseling">
        <Countseling></Countseling>
        <Appointment></Appointment>
      </div>
      <div className="bodydivbut">
        <Link to={"/zapis"}>
          <CreatButton className="bodybut1">
            {t("glxavorEj.bodybut")}
          </CreatButton>
        </Link>
      </div>
      <Comment></Comment>
    </div>
  );
}

export default Body;
