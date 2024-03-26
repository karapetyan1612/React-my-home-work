import HeaderContext from "./HeaderLenguageContext";
import { useContext } from "react";

function FAQ() {
  const t = useContext(HeaderContext);
  return <button className="select">{t.value.FAQ}</button>;
}

export default FAQ;
