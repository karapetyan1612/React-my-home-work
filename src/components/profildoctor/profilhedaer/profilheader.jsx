import HedaerData from "./hedaerdata";

function ProfilHedaer(params) {
  return (
    <div className="headprof">
      <div className="profilhedaer">
        <div className="prof1">
          <span className="med"></span>
          <p>{">"}</p>
          <span className="med"></span>
          <p>{">"}</p>
          <span className="med1"></span>
        </div>
        <HedaerData arr={params.arr}></HedaerData>
      </div>
    </div>
  );
}
export default ProfilHedaer;
