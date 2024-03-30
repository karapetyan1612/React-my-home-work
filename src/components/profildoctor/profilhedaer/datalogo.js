import { useContext, useMemo } from "react";
import { CommentArrayRu } from "../../body/commentarray";
import CreatTranslate from "../../translate/CreatTranslate";

function DataLogo() {
  const t = useContext(CreatTranslate);
  const CommentArray = t.comment;

  const list = useMemo(() => {
    const localId = localStorage.getItem("id");
    const ArrayMemo = CommentArray.filter((item) => {
      if (item.id == localId) {
        return [].push(item);
      }
    });
    return (
      <div className="conttextimg">
        <span className="imgspan1">{ArrayMemo[0].name}</span>
        <span className="imgspan2">{ArrayMemo[0].profession}</span>
        <span className="imgspan3">{ArrayMemo[0].staj}</span>
      </div>
    );
  }, []);

  return (
    <div className="datalogo">
      <div className="imglogo">
        <div className="contimglogo logoimg1"></div>
        {list}
      </div>
    </div>
  );
}

export { DataLogo };
