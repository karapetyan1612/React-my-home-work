import CreatButton from "../CreatButton";
import HeaderContext from "./HeaderLenguageContext";
import { useContext } from "react";

function Exit() {
  const t = useContext(HeaderContext);
  return <CreatButton className="select">{t.value.exit}</CreatButton>;
}

export default Exit;
