import HedaerData from "./hedaerdata";

function ProfilHedaer(params) {
  const ArrayMemo = params.arr;
  return (
    <div className="headprof">
      <div className="profilhedaer">
        <div className="prof1">
          <span className="med">{ArrayMemo[0].vrach}</span>
          <p>{">"}</p>
          <span className="med">{ArrayMemo[0].pediatr}</span>
          <p>{">"}</p>
          <span className="med1">{ArrayMemo[0].profilvrach}</span>
        </div>
        <HedaerData arr={params.arr}></HedaerData>
      </div>
    </div>
  );
}
export default ProfilHedaer;
