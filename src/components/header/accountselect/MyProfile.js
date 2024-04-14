import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MyProfil(params) {
  const { t } = useTranslation();
  return (
    <Link to={"/"}>
      <button className="select">{t("glxavorEj.profil")}</button>
    </Link>
  );
}

export default MyProfil;
