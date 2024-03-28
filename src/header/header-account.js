import { useCallback, useContext, useState } from "react";
import HeaderContext from "./HeaderLenguageContext";
import AccountSelect from "./accountselect";

function HeaderAccount() {
  const [isShow, Show] = useState(false);

  const ClickArrow = useCallback(() => {
    if (isShow === false) {
      Show(true);
    } else {
      Show(false);
    }
  }, [isShow]);

  const t = useContext(HeaderContext);

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

function Translate() {
  const t = useContext(HeaderContext);

  return (
    <div className="translate">
      <button
        className={t.Color ? "hedaerblue" : "hedaerwhite"}
        onClick={t.LenguageRu}
      >
        Ru
      </button>
      <button
        className={t.Color ? "hedaerwhite" : "hedaerblue"}
        onClick={t.LenguageEn}
      >
        En
      </button>
    </div>
  );
}

export default HeaderAccount;
