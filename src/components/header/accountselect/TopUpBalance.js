import { useContext } from "react";
import CreatTranslate from "../../translate/CreatTranslate";
import { Link } from "react-router-dom";

function TopUpBalance() {
  const t = useContext(CreatTranslate);
  return (
    <Link to={"/balans"}>
      <button className="select">{t.value.balans}</button>
    </Link>
  );
}

export default TopUpBalance;
