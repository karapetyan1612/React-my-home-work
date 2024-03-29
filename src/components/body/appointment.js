import { useContext } from "react";
import CreatTranslate from "../translate/CreatTranslate";
import CreatButton from "../button/CreatButton";

function Appointment() {
  const t = useContext(CreatTranslate);
  return (
    <div className="div11">
      <div className="appointment">
        <div className="image1"></div>
        <div className="appointmentbody">
          <h1>{t.value.bodyh}</h1>
          <p>{t.value.bodyp}</p>
          <div className="bodyul">
            <div></div>
            <p>{t.value.bodyul}</p>
          </div>
          <div className="bodyul">
            <div></div>
            <p>{t.value.bodyull}</p>
          </div>
          <div className="bodyul">
            <div></div>
            <p>{t.value.bodyull}</p>
          </div>
          <CreatButton>{t.value.but}</CreatButton>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
