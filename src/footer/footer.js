import FooterLogo from "./footerlogo";
import FooterContact from "./footercontact";
import FooterHelp from "./footerhelp";

function Footer(params) {
  return (
    <div className="footer">
      <div className="footermain">
        <FooterLogo></FooterLogo>
        <FooterHelp></FooterHelp>
        <FooterContact></FooterContact>
      </div>
    </div>
  );
}

export { Footer };
