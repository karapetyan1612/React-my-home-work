import { useContext } from "react";
import FooterContext from "./footerLenguageContext";
import LogoComp from "./logocomp";
import CreatButton from "../CreatButton";

function FooterLogo() {
  const t = useContext(FooterContext);
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
