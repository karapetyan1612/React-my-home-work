import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function TopUpBalance() {
  const { t } = useTranslation();
  return (
    <Link to={"/balans"}>
      <button className="select">{t("glxavorEj.balans")}</button>
    </Link>
  );
}

export default TopUpBalance;
