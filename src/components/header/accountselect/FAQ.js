import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function FAQ() {
  const { t } = useTranslation();
  return (
    <Link to={"*"}>
      <button className="select">{t("glxavorEj.FAQ")}</button>
    </Link>
  );
}

export default FAQ;
