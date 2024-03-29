import { useContext } from "react";
import CreatTranslate from "../translate/CreatTranslate";
import LogoComp from "./logocomp";
import CreatButton from "../button/CreatButton";

function FooterLogo() {
  const t = useContext(CreatTranslate).value;
  return (
    <div className="footerlogo">
      <div className="footlogo"></div>
      <div className="footp">
        <p>{t.footp}</p>
        <p>{t.footp1}</p>
      </div>
      <LogoComp></LogoComp>
      <div className="downlogo">
        <CreatButton className="appstory"></CreatButton>
        <CreatButton className="googleplay"></CreatButton>
      </div>
    </div>
  );
}

export default FooterLogo;
