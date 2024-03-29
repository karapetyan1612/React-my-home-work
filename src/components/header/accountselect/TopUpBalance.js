import { useContext } from "react";
import CreatTranslate from "../../translate/CreatTranslate";

function TopUpBalance() {
  const t = useContext(CreatTranslate);
  return <button className="select">{t.value.balans}</button>;
}

export default TopUpBalance;
