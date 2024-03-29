import { useCallback, useContext, useState, useMemo } from "react";
import CreatTranslate from "../translate/CreatTranslate";
import { CommentArray } from "./commentarray";
import CreatButton from "../button/CreatButton";
import BodyCont from "./bodycont";
import HeaderCont from "./conteinerheader";

function Comment() {
  const t = useContext(CreatTranslate);
  const [status, setStatus] = useState(0);

  const ArrFunc1 = useCallback(() => {
    setStatus(1);
  }, []);
  const ArrFunc2 = useCallback(() => {
    setStatus(2);
  }, []);
  const ArrFunc3 = useCallback(() => {
    setStatus(3);
  }, []);

  const list = useMemo(() => {
    const ArrayMemo = CommentArray.filter((item) => {
      if (item.status === status) {
        return [].push(item);
      }
    });
    return ArrayMemo.map((item) => {
      return (
        <div className="comment">
          <div className="conteiner">
            <HeaderCont date={item}></HeaderCont>
            <BodyCont date={item}></BodyCont>
          </div>
        </div>
      );
    });
  }, [status]);

  return (
    <div className="bodyConteiner">
      <div className="bodytable">
        <CreatButton onClick={ArrFunc1}>{t.value.bodytableA}</CreatButton>
        <CreatButton onClick={ArrFunc2}>{t.value.bodytableB}</CreatButton>
        <CreatButton onClick={ArrFunc3}>{t.value.bodytableC}</CreatButton>
      </div>
      {list}
    </div>
  );
}

export { Comment };
