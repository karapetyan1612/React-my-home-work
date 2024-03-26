import { useContext } from "react";
import BodyContext from "./BodyLenguageContext";
import CreatButton from "../CreatButton";

function Appointment(params) {
  const t = useContext(BodyContext);
  return (
    <div className="div11">
      <div className="appointment">
        <div className="image1"></div>
        <div className="appointmentbody">
          <h1>{t.bodyh}</h1>
          <p>{t.bodyp}</p>
          <div className="bodyul">
            <div></div>
            <p>{t.bodyul}</p>
          </div>
          <div className="bodyul">
            <div></div>
            <p>{t.bodyull}</p>
          </div>
          <div className="bodyul">
            <div></div>
            <p>{t.bodyull}</p>
          </div>
          <CreatButton>{t.but}</CreatButton>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
