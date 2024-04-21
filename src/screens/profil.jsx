import { useParams } from "react-router-dom";
import "../components/profildoctor/profil.css";
import ProfilBody from "../components/profildoctor/profilbody.js";
import ProfilHedaer from "../components/profildoctor/profilhedaer/profilheader.jsx";
import { useEffect, useMemo } from "react";

import { useTranslation } from "react-i18next";
import publicAPI from "../services/api/publicAPI.js";
import { UserActions } from "../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";

function ProfilDoctor() {
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  // const arr = t("commentArray", { returnObjects: true });

  useEffect(() => {
    fetch(`https://api.allodoc.md/users/user/${id}/?role=doctor`)
      .then((r) => r.json())
      .then((res) => {
        return dispatch(UserActions.userProf(res));
      });
  }, []);

  const select = useSelector(UserActions.userProf).payload.prof;

  const list = useMemo(() => {
    if (select == null) {
      return null;
    } else {
      console.log(select);

      return (
        <div className="profildoctor">
          <ProfilHedaer arr={select}></ProfilHedaer>
          {/* <ProfilBody arr={select}></ProfilBody> */}
        </div>
      );
    }
  }, []);
  return <>{list}</>;
}
export default ProfilDoctor;
