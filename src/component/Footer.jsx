import logoText from "../assets/header/logoText.png";
import logo from "../assets/header/logo.png";
import linkedin from "../assets/footer/linkedin.png";
import facebook from "../assets/footer/facebook.png";
import twitter from "../assets/footer/twitter.png";
import instagram from "../assets/footer/instagram.png";
import email from "../assets/footer/Email.png";
import phone from "../assets/footer/Phone.png";
import location from "../assets/footer/Location Point.png";

function Footer() {
  let socmedlinks = [
    { img: instagram, link: "https://www.instagram.com/" },
    { img: facebook, link: "https://www.facebook.com/" },
    { img: twitter, link: "https://www.twitter.com/" },
    { img: linkedin, link: "https://www.linkedin.com/" },
  ];
  let footerLinks = [
    {
      title: "Product",
      item: ["Pricing", "Case Studies", "Features", "Reviews", "Updates"],
    },
    { title: "Company", item: ["About", "Careers", "News", "Blog", "Contact"] },
    {
      title: "Support",
      item: ["Help Center", "Status", "Report a Bug", "Chat Support"],
    },
  ];
  let footerContacts = [
    { item: "hello@whitespaceui.design", icon: email },
    { item: "+1 (500) 300 250", icon: phone },
    { item: "3891 Ranchview Dr. Richardson, CA 62639", icon: location },
  ];

  return (
    <>
      <footer className="compo footer container">
        <div className="footer-items">
          <div className="footer-headline">
            <a className="logo footer-logo">
              <img className="logo-img" src={logo} alt="logo" />
              <img className="logo-text" src={logoText} alt="logotext" />
            </a>
            <p className="footer-desc">
              We love working with ambitious people. <br/> Let's build something great
              together now.
            </p>
            <div className="footer-socmed">
              {socmedlinks.map((socmedlink, index) => {
                return (
                  <a href={socmedlink.link} key={index}>
                    <img className="footer-socmed-icon" src={socmedlink.img} alt="socmed-icon" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="footer-contents">
            <div className="footer-links">
              {footerLinks.map((footerLink, index) => {
                return (
                  <div className="footer-link" key={index}>
                    <span className="footer-contents-title">
                      {footerLink.title}
                    </span>
                    <div className="footer-contents-item">
                      {footerLink.item.map((item, index) => {
                          return (
                          <a href="#" key={index}>
                              {item}
                          </a>
                          );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="footer-contacts">
              <span className="footer-contents-title">Contact Us</span>
              <div className="footer-contact-item">
                  {footerContacts.map((footerContact, index) => {
                  return (
                      <div className="footer-contact" key={index}>
                      <img src={footerContact.icon} />
                      <p>{footerContact.item}</p>
                      </div>
                  );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-footnote">
            <span className="footer-footnote-title">
                © 2023 Whitespace UI - All rights reserved
            </span>
            <div className="footnote-child">
                <a href="#">Terms of Service</a>
                <span>|</span>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
