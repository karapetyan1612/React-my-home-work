import { useTranslation } from "react-i18next";

function FooterContact(params) {
  const { t } = useTranslation();
  return (
    <div className="footercontact">
      <div>
        <div className="email"></div>
        <span>{t("glxavorEj.email")}</span>
      </div>
      <div>
        <div className="address"></div>
        <span>{t("glxavorEj.address")}</span>
      </div>
      <div>
        <div className="footerdate"></div>
        <span>{t("glxavorEj.date")}</span>
      </div>
      <div>
        <div className="footernomer"></div>
        <span>{t("glxavorEj.nomer")}</span>
      </div>
    </div>
  );
}

export default FooterContact;
