import { useContext } from "react";
import CreatTranslate from "../../translate/CreatTranslate";

function DataMoney() {
  const t = useContext(CreatTranslate);
  const CommentArray = t.comment;

  const localId = localStorage.getItem("id");

  const ArrayMemo = CommentArray.filter((item) => {
    if (item.id == localId) {
      return [].push(item);
    }
  });
  return (
    <div className="datamoney">
      <span className="datamoney1">{ArrayMemo[0].money}</span>
      <span className="datamoney2">{ArrayMemo[0].minut}</span>
    </div>
  );
}
export default DataMoney;
