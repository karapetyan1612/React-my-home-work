import { useCallback, useEffect, useState } from "react";
import AccountSelect from "./accountselect/accountselect";
import Translate from "./translateButton";
import { useTranslation } from "react-i18next";

function HeaderAccount() {
  const [isShow, Show] = useState(false);
  useEffect(() => {
    document.onclick = () => {
      if (isShow) {
        Show(false);
      }
    };
  }, [isShow]);

  const ClickArrow = useCallback(
    (event) => {
      event.stopPropagation();
      if (isShow === false) {
        Show(true);
      } else {
        Show(false);
      }
    },
    [isShow]
  );

  const { t } = useTranslation();

  return (
    <>
      <div className="header-account">
        <div className="header-account-logo">
          <span>{t("glxavorEj.name")[0]}</span>
        </div>
        <div className="header-account-name">
          <span className="name1">{t("glxavorEj.name")} </span>
          <span>{t("glxavorEj.surname")}</span>
        </div>
        <button className="header-account-arrow" onClick={ClickArrow}></button>
        <Translate></Translate>
      </div>
      {isShow ? <AccountSelect></AccountSelect> : null}
    </>
  );
}

export default HeaderAccount;
