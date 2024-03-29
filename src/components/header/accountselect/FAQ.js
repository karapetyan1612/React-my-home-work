import { useContext } from "react";
import CreatTranslate from "../../translate/CreatTranslate";

function FAQ() {
  const t = useContext(CreatTranslate);
  return <button className="select">{t.value.FAQ}</button>;
}

export default FAQ;
