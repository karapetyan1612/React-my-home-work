import { useContext } from "react";
import CreatTranslate from "../../translate/CreatTranslate";

function MyProfil(params) {
  const t = useContext(CreatTranslate);
  return <button className="select">{t.value.profil}</button>;
}

export default MyProfil;
