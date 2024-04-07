function DataMoney(params) {
  const ArrayMemo = params.arr;

  return (
    <div className="datamoney">
      <span className="datamoney1">{ArrayMemo[0].money}</span>
      <span className="datamoney2">{ArrayMemo[0].minut}</span>
    </div>
  );
}
export default DataMoney;
