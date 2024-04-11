import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import AccountSelect from "./accountselect/accountselect";
import CreatTranslate from "../translate/CreatTranslate";
import Translate from "./translateButton";

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

  const t = useContext(CreatTranslate);

  return (
    <>
      <div className="header-account">
        <div className="header-account-logo">
          <span>{t.value.name[0]}</span>
        </div>
        <div className="header-account-name">
          <span className="name1">{t.value.name} </span>
          <span>{t.value.surname}</span>
        </div>
        <button className="header-account-arrow" onClick={ClickArrow}></button>
        <Translate></Translate>
      </div>
      {isShow ? <AccountSelect></AccountSelect> : null}
    </>
  );
}

export default HeaderAccount;
