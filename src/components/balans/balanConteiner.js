import { useContext, useMemo, useState } from "react";
import CreatButton from "../button/CreatButton";
import CreatTranslate from "../translate/CreatTranslate";

function BalansConteiner(params) {
  const t = useContext(CreatTranslate);
  const [color, setColor] = useState(false);
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const [status, setStatus] = useState(0);
  const [id, setId] = useState(0);

  const func1 = function () {
    setColor(true);
    setColor1(false);
    setColor2(false);
    setStatus(1);
    setId(0);
  };
  const func2 = function () {
    setColor(false);
    setColor1(true);
    setColor2(false);
    setStatus(2);
    setId(0);
  };
  const func3 = function () {
    setColor(false);
    setColor1(false);
    setColor2(true);
    setStatus(0);
    setId(3);
  };

  const list = useMemo(() => {
    const ArrayMemo = t.balans.filter((item) => {
      if (item.status === status || item.id === id) {
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
  }, [status, id, t.balans]);

  return (
    <div className="balansconteiner">
      <div className="balanshelp">
        <CreatButton
          onClick={func1}
          className={color ? "balanshelpgray" : "balanshelpwhite"}
        >
          {t.value.today}
        </CreatButton>
        <CreatButton
          onClick={func2}
          className={color1 ? "balanshelpgray" : "balanshelpwhite"}
        >
          {t.value.month}
        </CreatButton>
        <CreatButton
          onClick={func3}
          className={color2 ? "balanshelpgray" : "balanshelpwhite"}
        >
          {t.value.time}
        </CreatButton>
      </div>
      {list}
    </div>
  );
}
export default BalansConteiner;
