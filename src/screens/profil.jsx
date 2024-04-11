import { useParams } from "react-router-dom";
import "../components/profildoctor/profil.css";
import ProfilBody from "../components/profildoctor/profilbody.js";
import ProfilHedaer from "../components/profildoctor/profilhedaer/profilheader.jsx";
import { useContext, useEffect, useMemo } from "react";
import CreatTranslate from "../components/translate/CreatTranslate.jsx";

function ProfilDoctor() {
  let { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = useContext(CreatTranslate);
  const CommentArray = t.comment;
  const ArrayMemo = CommentArray.filter((item) => {
    if (item.id == id) {
      return [].push(item);
    }
  });
  return (
    <div className="profildoctor">
      <ProfilHedaer arr={ArrayMemo}></ProfilHedaer>
      <ProfilBody arr={ArrayMemo}></ProfilBody>
    </div>
  );
}
export default ProfilDoctor;
