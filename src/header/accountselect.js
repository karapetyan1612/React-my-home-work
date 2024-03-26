import MyProfil from "./MyProfile";
import TopUpBalance from "./TopUpBalance";
import FAQ from "./FAQ";
import Exit from "./Exit";

export default function AccountSelect(props) {
  return (
    <div className="account-select">
      <MyProfil></MyProfil>
      <TopUpBalance></TopUpBalance>
      <FAQ></FAQ>
      <Exit></Exit>
    </div>
  );
}
