import { useContext } from "react";
import CreatTranslate from "../../translate/CreatTranslate";
import { Link } from "react-router-dom";

function MyProfil(params) {
  const t = useContext(CreatTranslate);
  return (
    <Link to={"/"}>
      <button className="select">{t.value.profil}</button>
    </Link>
  );
}

export default MyProfil;
