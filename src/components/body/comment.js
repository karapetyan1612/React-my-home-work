import { useCallback, useContext, useState, useMemo } from "react";
import CreatTranslate from "../translate/CreatTranslate";
import CreatButton from "../button/CreatButton";
import BodyCont from "./bodycont";
import HeaderCont from "./conteinerheader";

function Comment() {
  const t = useContext(CreatTranslate);
  const CommentArray = t.comment;
  const [status, setStatus] = useState(0);

  const ArrFunc = useCallback((index) => {
    return () => {
      setStatus(index);
    };
  }, []);

  const list = useMemo(() => {
    const ArrayMemo = CommentArray.filter((item) => {
      if (item.status === status) {
        return [].push(item);
      }
    });
    return ArrayMemo.map((item, index) => {
      return (
        <div className="comment" key={index}>
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
        <CreatButton onClick={ArrFunc(1)}>{t.value.bodytableA}</CreatButton>
        <CreatButton onClick={ArrFunc(2)}>{t.value.bodytableB}</CreatButton>
        <CreatButton onClick={ArrFunc(3)}>{t.value.bodytableC}</CreatButton>
      </div>
      {list}
    </div>
  );
}

export { Comment };
