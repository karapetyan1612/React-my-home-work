import { useContext } from "react";
import { Comment } from "../body/comment";
import CreatTranslate from "../translate/CreatTranslate";
import "../../App.css";

function Zapis() {
  const t = useContext(CreatTranslate);
  return (
    <div className="zapis">
      <div className="bodybutzapis">
        <span>{t.value.bodybut}</span>
      </div>

      <Comment></Comment>
    </div>
  );
}

export default Zapis;
