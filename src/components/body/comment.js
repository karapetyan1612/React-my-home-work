import { useCallback, useState, useMemo } from "react";
import CreatButton from "../button/CreatButton";
import BodyCont from "./bodycont";
import HeaderCont from "./conteinerheader";
import { useTranslation } from "react-i18next";
import publicAPI from "../../services/api/publicAPI";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "../../store/actions";

function Comment() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [Index, setIndex] = useState();
  // const arr = t("commentArray", { returnObjects: true });

  const ArrFunc = useCallback((index) => {
    return () => {
      publicAPI
        .get(`/?page=1&category=${index}`)

        .then((res) => {
          return dispatch(UserActions.setUser(res));
        })
        .then(() => {
          setIndex(index);
        });
    };
  }, []);

  const select = useSelector(UserActions.setUser).payload.user;

  const list = useMemo(() => {
    if (select == null) {
      return null;
    } else {
      const user = select.data.results[0];

      return (
        <div className="comment">
          <div className="conteiner">
            <HeaderCont date={user}></HeaderCont>
            <BodyCont date={user}></BodyCont>
          </div>
        </div>
      );
    }
  }, [select, Index]);

  return (
    <div className="bodyConteiner">
      <div className="bodytable">
        <CreatButton onClick={ArrFunc(1)}>
          {t("glxavorEj.bodytableA")}
        </CreatButton>
        <CreatButton onClick={ArrFunc(2)}>
          {t("glxavorEj.bodytableB")}
        </CreatButton>
        <CreatButton onClick={ArrFunc(4)}>
          {t("glxavorEj.bodytableC")}
        </CreatButton>
      </div>
      {Index ? list : null}
    </div>
  );
}

export { Comment };
