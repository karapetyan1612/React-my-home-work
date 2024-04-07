import { DataLogo } from "./datalogo";
import DataMoney from "./datamoney";

function HedaerData(params) {
  return (
    <div className="headerdata">
      <DataLogo arr={params.arr}></DataLogo>
      <DataMoney arr={params.arr}></DataMoney>
    </div>
  );
}

export default HedaerData;
