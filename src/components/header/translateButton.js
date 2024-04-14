import i18n from "../../services/i18n";
function Translate() {
  return (
    <div className="translate">
      <button
        className={i18n.language === "ru" ? "hedaerblue" : "hedaerwhite"}
        onClick={() => {
          i18n.changeLanguage("ru");
        }}
      >
        Ru
      </button>
      <button
        className={i18n.language === "en" ? "hedaerblue" : "hedaerwhite"}
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        En
      </button>
    </div>
  );
}
export default Translate;
