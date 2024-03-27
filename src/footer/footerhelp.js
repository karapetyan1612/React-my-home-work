import { useContext } from "react";
import CreatButton from "../CreatButton";
import FooterContext from "./footerLenguageContext";

function FooterHelp(params) {
  const t = useContext(FooterContext);
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
