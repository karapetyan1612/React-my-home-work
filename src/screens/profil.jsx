import { useParams } from "react-router-dom";
import "../components/profildoctor/profil.css";
import ProfilBody from "../components/profildoctor/profilbody.js";
import ProfilHedaer from "../components/profildoctor/profilhedaer/profilheader.jsx";
import { useEffect, useMemo } from "react";

import { useTranslation } from "react-i18next";

function ProfilDoctor() {
  let { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  const arr = t("commentArray", { returnObjects: true });

  const ArrayMemo = useMemo(() => {
    return arr.filter((item) => {
      if (+item.id === +id) {
        return [].push(item);
      }
    });
  }, [arr, id]);

  return (
    <div className="profildoctor">
      <ProfilHedaer arr={ArrayMemo}></ProfilHedaer>
      <ProfilBody arr={ArrayMemo}></ProfilBody>
    </div>
  );
}
export default ProfilDoctor;
