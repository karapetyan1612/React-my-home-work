import LogoComp from "./logocomp";
import CreatButton from "../button/CreatButton";
import { useTranslation } from "react-i18next";

function FooterLogo() {
  const { t } = useTranslation();
  return (
    <div className="footerlogo">
      <div className="footlogo"></div>
      <div className="footp">
        <p>{t("glxavorEj.footp")}</p>
        <p>{t("glxavorEj.footp1")}</p>
      </div>
      <LogoComp></LogoComp>
      <div className="downlogo">
        <CreatButton className="appstory"></CreatButton>
        <CreatButton className="googleplay"></CreatButton>
      </div>
    </div>
  );
}

export default FooterLogo;
