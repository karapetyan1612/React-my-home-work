import { useTranslation } from "react-i18next";
import CreatButton from "../../button/CreatButton";

function Exit() {
  const { t } = useTranslation();
  return <CreatButton className="select">{t("glxavorEj.exit")}</CreatButton>;
}

export default Exit;
