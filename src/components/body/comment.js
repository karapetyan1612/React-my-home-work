import { useCallback, useState, useMemo } from "react";
import CreatButton from "../button/CreatButton";
import BodyCont from "./bodycont";
import HeaderCont from "./conteinerheader";
import { useTranslation } from "react-i18next";
import publicAPI from "../../services/api/publicAPI";

function Comment() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const arr = t("commentArray", { returnObjects: true });

  const ArrFunc = useCallback((index) => {
    return () => {
      publicAPI.get(`/?page=1&category=${index}`).then((res) => {
        setData([res.data]);
      });
    };
  }, []);

  const list = useMemo(() => {
    return data.map((item, index) => {
      return (
        <div className="comment" key={index}>
          <div className="conteiner">
            <HeaderCont date={item.results}></HeaderCont>
            <BodyCont date={item.results}></BodyCont>
          </div>
        </div>
      );
    });
  }, [data]);

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
      {list}
    </div>
  );
}

export { Comment };
