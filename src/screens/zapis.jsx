import { Comment } from "../components/body/comment";
import "../App.css";
import { useTranslation } from "react-i18next";

function Zapis() {
  const { t } = useTranslation();
  return (
    <div className="zapis">
      <div className="bodybutzapis">
        <span>{t("glxavorEj.bodybut")}</span>
      </div>

      <Comment></Comment>
    </div>
  );
}

export default Zapis;
