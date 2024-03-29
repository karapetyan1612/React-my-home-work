import { useContext } from "react";
import CreatButton from "../button/CreatButton";
import CreatTranslate from "../translate/CreatTranslate";

function FooterHelp() {
  const t = useContext(CreatTranslate).value;
  return (
    <div className="footerhelp">
      <CreatButton>{t.help1}</CreatButton>
      <CreatButton>{t.help2}</CreatButton>
      <CreatButton>{t.help3}</CreatButton>
      <CreatButton>{t.help4}</CreatButton>
      <CreatButton>{t.help5}</CreatButton>
      <CreatButton>{t.help6}</CreatButton>
    </div>
  );
}

export default FooterHelp;
