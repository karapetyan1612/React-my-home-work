function DataLogo(params) {
  const ArrayMemo = params.arr;

  return (
    <div className="datalogo">
      <div className="imglogo">
        <div className="contimglogo logoimg1"></div>
        <div className="conttextimg">
          <span className="imgspan1">{ArrayMemo[0].name}</span>
          <span className="imgspan2">{ArrayMemo[0].profession}</span>
          <span className="imgspan3">{ArrayMemo[0].staj}</span>
        </div>
      </div>
    </div>
  );
}

export { DataLogo };
