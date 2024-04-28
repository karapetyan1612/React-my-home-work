import { useCallback, useState, useMemo } from "react";
import CreatButton from "../button/CreatButton";
import BodyCont from "./bodycont";
import HeaderCont from "./conteinerheader";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { UserActions, doctorsListActions } from "../../store/actions";
import { doctorListSelectors } from "../../store/selectors";
import store from "../../store";

function Comment() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [Index, setIndex] = useState("1");
  // const arr = t("commentArray", { returnObjects: true });

  const ArrFunc = useCallback(
    (index) => {
      return () => {
        dispatch(doctorsListActions.get(index));
        setIndex(index);
      };
    },
    [dispatch]
  );

  const list = useSelector(doctorListSelectors.doctorList);
  console.log(store.getState());
  console.log(list, "list");

  const listArr = useMemo(() => {
    if (list == null) {
      return null;
    } else {
      return (
        <div className="comment">
          <div className="conteiner">
            <HeaderCont date={list}></HeaderCont>
            <BodyCont date={list}></BodyCont>
          </div>
        </div>
      );
    }
  }, [Index]);

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
      {Index ? listArr : null}
    </div>
  );
}

export { Comment };
