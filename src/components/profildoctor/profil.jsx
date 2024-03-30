import "./profil.css";
import ProfilBody from "./profilbody";
import ProfilHedaer from "./profilhedaer/profilheader.jsx";

function ProfilDoctor() {
  return (
    <div className="profildoctor">
      <ProfilHedaer></ProfilHedaer>
      <ProfilBody></ProfilBody>
    </div>
  );
}
export default ProfilDoctor;
