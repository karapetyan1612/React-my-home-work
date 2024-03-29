import { useContext } from "react";
import CreatTranslate from "../translate/CreatTranslate";

function FooterContact(params) {
  const t = useContext(CreatTranslate).value;
  return (
    <div className="footercontact">
      <div>
        <div className="email"></div>
        <span>{t.email}</span>
      </div>
      <div>
        <div className="address"></div>
        <span>{t.address}</span>
      </div>
      <div>
        <div className="footerdate"></div>
        <span>{t.date}</span>
      </div>
      <div>
        <div className="footernomer"></div>
        <span>{t.nomer}</span>
      </div>
    </div>
  );
}

export default FooterContact;
