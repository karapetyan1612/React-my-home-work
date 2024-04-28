import { useCallback, useMemo, useState } from "react";
import CreatButton from "../button/CreatButton";
import { useTranslation } from "react-i18next";

function BalansConteiner(params) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const func = useCallback((index) => {
    return () => {
      setIndex(index);
    };
  }, []);

  const arr = useMemo(() => {
    return t("balansArr", { returnObjects: true });
  });
  const list = useMemo(() => {
    const ArrayMemo = arr.filter((item) => {
      if (item.status === index + 1 || index === 2) {
        return [].push(item);
      }
    });
    return ArrayMemo.map((item) => {
      return (
        <div className="balanscontext">
          <div className="balansconthead">
            <div className={item.classname}></div>
            <span>{item.balansdate}</span>
          </div>
          <div className="balanscontbody">
            <h3>{item.balansstate}</h3>
            <p className={item.classcolor}>{item.money}</p>
          </div>
        </div>
      );
    });
  }, [index, arr]);

  return (
    <div className="balansconteiner">
      <div className="balanshelp">
        <CreatButton
          onClick={func(0)}
          className={index === 0 ? "balanshelpgray" : "balanshelpwhite"}
        >
          {t("glxavorEj.today")}
        </CreatButton>
        <CreatButton
          onClick={func(1)}
          className={index === 1 ? "balanshelpgray" : "balanshelpwhite"}
        >
          {t("glxavorEj.month")}
        </CreatButton>
        <CreatButton
          onClick={func(2)}
          className={index === 2 ? "balanshelpgray" : "balanshelpwhite"}
        >
          {t("glxavorEj.time")}
        </CreatButton>
      </div>
      {list}
    </div>
  );
}
export default BalansConteiner;
