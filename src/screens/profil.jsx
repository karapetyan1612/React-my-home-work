import { useParams } from "react-router-dom";
import "../components/profildoctor/profil.css";
import ProfilBody from "../components/profildoctor/profilbody.js";
import ProfilHedaer from "../components/profildoctor/profilhedaer/profilheader.jsx";
import { useEffect, useMemo } from "react";

import { useTranslation } from "react-i18next";
import { doctorsProfileActions } from "../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { doctorProfileSelectors } from "../store/selectors/index.js";

function ProfilDoctor() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(
    doctorProfileSelectors.doctorProfile
  );

  const { t } = useTranslation();

  // const arr = t("commentArray", { returnObjects: true });

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(doctorsProfileActions.get(id));
  }, [dispatch]);

  const list = useMemo(() => {
    if (data == null) {
      return null;
    } else {
      return (
        <div className="profildoctor">
          <ProfilHedaer arr={data}></ProfilHedaer>
          {/* <ProfilBody arr={select}></ProfilBody> */}
        </div>
      );
    }
  }, []);
  return <>{list}</>;
}
export default ProfilDoctor;
