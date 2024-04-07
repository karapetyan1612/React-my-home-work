import FooterLogo from "../components/footer/footerlogo";
import FooterContact from "../components/footer/footercontact";
import FooterHelp from "../components/footer/footerhelp";
import "../components/footer/footer.css";

function Footer() {
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

export default Footer;
