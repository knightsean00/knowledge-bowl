import { FaInstagram, FaRegEnvelope } from "react-icons/fa6";

function Footer() {
  return (
    <div
      className="container"
      style={{ paddingTop: "3rem", paddingBottom: "3rem", alignItems: "center" }}
    >
      <h3 style={{ textAlign: "center" }}>
        Follow us to be the first to hear about future events
      </h3>
      <div className="icon-container">
        <a className="icon" href="https://www.instagram.com/ldnknowledgebowl/">
          <FaInstagram />
        </a>
        <a className="icon" href="https://forms.gle/cmX79fTiRCebecow7">
          <FaRegEnvelope />
        </a>
      </div>
    </div>
  );
}

export default Footer;
