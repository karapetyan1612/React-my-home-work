function CreatButton(params) {
  return (
    <button className={params.className} onClick={params.onClick}>
      {params.children}
    </button>
  );
}

export default CreatButton;
