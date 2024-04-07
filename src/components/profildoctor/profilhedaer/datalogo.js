import { useContext, useMemo } from "react";

function DataLogo(params) {
  const ArrayMemo = params.arr;
  const list = useMemo(() => {
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
