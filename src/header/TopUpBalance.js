import { useContext } from "react";
import HeaderContext from "./HeaderLenguageContext";

function TopUpBalance() {
  const t = useContext(HeaderContext);
  return <button className="select">{t.value.balans}</button>;
}

export default TopUpBalance;
