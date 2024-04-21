function DataLogo(params) {
  const ArrayMemo = params.arr;
  return (
    <div className="datalogo">
      <div className="imglogo">
        <img src={ArrayMemo.profile_image} className="imgprops" />
        <div className="conttextimg">
          <span className="imgspan1">
            {ArrayMemo.first_name}
            {ArrayMemo.last_name}
          </span>
          <span className="imgspan2">{ArrayMemo.role}</span>
          {/* <span className="imgspan3">{ArrayMemo[0].staj}</span> */}
        </div>
      </div>
    </div>
  );
}

export { DataLogo };
