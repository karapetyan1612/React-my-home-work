import { useCallback, useContext, useMemo, useState } from "react";
import CreatButton from "../button/CreatButton";
import CreatTranslate from "../translate/CreatTranslate";

function BalansConteiner(params) {
  const t = useContext(CreatTranslate);
  const [index, setIndex] = useState(0);

  const func = useCallback((index) => {
    return () => {
      setIndex(index);
    };
  }, []);

  const list = useMemo(() => {
    const ArrayMemo = t.balans.filter((item) => {
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
  }, [index, t.balans]);

  return (
    <div className="balansconteiner">
      <div className="balanshelp">
        <CreatButton
          onClick={func(0)}
          className={index === 0 ? "balanshelpgray" : "balanshelpwhite"}
        >
          {t.value.today}
        </CreatButton>
        <CreatButton
          onClick={func(1)}
          className={index === 1 ? "balanshelpgray" : "balanshelpwhite"}
        >
          {t.value.month}
        </CreatButton>
        <CreatButton
          onClick={func(2)}
          className={index === 2 ? "balanshelpgray" : "balanshelpwhite"}
        >
          {t.value.time}
        </CreatButton>
      </div>
      {list}
    </div>
  );
}
export default BalansConteiner;
