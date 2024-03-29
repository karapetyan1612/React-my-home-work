import CreatButton from "../../button/CreatButton";
import CreatTranslate from "../../translate/CreatTranslate";
import { useContext } from "react";

function Exit() {
  const t = useContext(CreatTranslate);
  return <CreatButton className="select">{t.value.exit}</CreatButton>;
}

export default Exit;
