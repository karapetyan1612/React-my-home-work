function ProfilBody(params) {
  const ArrayMemo = params.arr;
  return (
    <div className="profilbody">
      <div className="profilbodyleft">
        <div className="bodytext1">
          <div className="bodytextlogo">
            <div className="kalendar"></div>
            <span>{ArrayMemo[0].zapis}</span>
          </div>
          <p>{ArrayMemo[0].zapisdate}</p>
        </div>
        <div className="bodytext">
          <div className="bodytextlogo">
            <div className="glxark"></div>
            <span>{ArrayMemo[0].education}</span>
          </div>
          <p>{ArrayMemo[0].educationp}</p>
          <p>{ArrayMemo[0].educationp1}</p>
        </div>
        <div className="bodytext">
          <div className="bodytextlogo">
            <div className="medd"></div>
            <span>{ArrayMemo[0].masnagitutyun}</span>
          </div>
          <p>{ArrayMemo[0].lorem}</p>
        </div>
        <div className="bodytext">
          <div className="bodytextlogo">
            <div></div>
            <span>{ArrayMemo[0].lracucich}</span>
          </div>
          <p>{ArrayMemo[0].lorem}</p>
        </div>
      </div>
      <div className="hhk"></div>
    </div>
  );
}

export default ProfilBody;
