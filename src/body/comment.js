import { useCallback, useContext, useState, useMemo } from "react";
import BodyContext from "./BodyLenguageContext";
import { CommentArray } from "./commentarray";
import CreatButton from "../CreatButton";
import BodyCont from "./bodycont";
import HeaderCont from "./conteinerheader";

function Comment() {
  const t = useContext(BodyContext);
  const [isShow1, Show1] = useState(false);
  const [isShow2, Show2] = useState(false);
  const [isShow3, Show3] = useState(false);

  const ArrFunc1 = useCallback(() => {
    Show1(true);
    Show2(false);
    Show3(false);
  }, []);
  const ArrFunc2 = useCallback(() => {
    Show1(false);
    Show2(true);
    Show3(false);
  }, []);
  const ArrFunc3 = useCallback(() => {
    Show1(false);
    Show2(false);
    Show3(true);
  }, []);

  function ComCont(props) {
    const ArrayMemo = useMemo(() => {
      return CommentArray.filter((item) => {
        if (item.status === props.status) {
          return [].push(item);
        }
      });
    }, [props.status]);

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
  }

  return (
    <div className="bodyConteiner">
      <div className="bodytable">
        <CreatButton onClick={ArrFunc1}>{t.bodytableA}</CreatButton>
        <CreatButton onClick={ArrFunc2}>{t.bodytableB}</CreatButton>
        <CreatButton onClick={ArrFunc3}>{t.bodytableC}</CreatButton>
      </div>
      {isShow1 ? <ComCont status={1}></ComCont> : null}
      {isShow2 ? <ComCont status={2}></ComCont> : null}
      {isShow3 ? <ComCont status={3}></ComCont> : null}
    </div>
  );
}

export { Comment };
