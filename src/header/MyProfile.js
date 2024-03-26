import HeaderContext from "./HeaderLenguageContext";
import { useContext } from "react";

function MyProfil(params) {
  const t = useContext(HeaderContext);
  return <button className="select">{t.value.profil}</button>;
}

export default MyProfil;
