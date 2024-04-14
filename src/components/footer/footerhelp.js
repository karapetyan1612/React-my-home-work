import CreatButton from "../button/CreatButton";
import { useTranslation } from "react-i18next";

function FooterHelp() {
  const { t } = useTranslation();
  return (
    <div className="footerhelp">
      <CreatButton>{t("glxavorEj.help1")}</CreatButton>
      <CreatButton>{t("glxavorEj.help2")}</CreatButton>
      <CreatButton>{t("glxavorEj.help3")}</CreatButton>
      <CreatButton>{t("glxavorEj.help4")}</CreatButton>
      <CreatButton>{t("glxavorEj.help5")}</CreatButton>
      <CreatButton>{t("glxavorEj.help6")}</CreatButton>
    </div>
  );
}

export default FooterHelp;
