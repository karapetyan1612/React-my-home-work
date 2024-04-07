import { useContext } from "react";
import CreatTranslate from "../../translate/CreatTranslate";
import { Link } from "react-router-dom";

function FAQ() {
  const t = useContext(CreatTranslate);
  return (
    <Link to={"*"}>
      <button className="select">{t.value.FAQ}</button>
    </Link>
  );
}

export default FAQ;
