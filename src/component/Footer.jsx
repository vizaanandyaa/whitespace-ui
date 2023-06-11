import logoText from "../assets/header/logoText.png";
import logo from "../assets/header/logo.png";
import linkedin from "../assets/footer/linkedin.png";
import facebook from "../assets/footer/facebook.png";
import twitter from "../assets/footer/twitter.png";
import instagram from "../assets/footer/instagram.png";
import email from '../assets/footer/Email.png'
import phone from '../assets/footer/Phone.png'
import location from '../assets/footer/Location Point.png'

function Footer(){
    let socmedlinks = [{img: instagram, link:'https://www.instagram.com/'},{img:facebook,link:'https://www.facebook.com/'},{img:twitter,link:'https://www.twitter.com/'}, {img:linkedin,link:'https://www.linkedin.com/'}];
    let footerLinks = [{title: 'Product', item:['Pricing','Case Studies','Features','Reviews','Updates']}, {title: 'Company', item:['About','Careers','News','Blog','Contact']}, {title: 'Support', item:['Help Center','Status','Report a Bug','Chat Support']}]
    let footerContacts =[{item:['hello@whitespaceui.design','+1 (500) 300 250','3891 Ranchview Dr. Richardson, CA 62639'],icon:email,phone,location}]

    return(
        <>
            <footer className="compo footer container">
                <div className="footer-headline">
                    <a className="logo">
                        <img className="logo-img" src={logo} alt="logo" />
                        <img className="logo-text" src={logoText} alt="logotext" />
                    </a>
                    <p>We love working with ambitious people. Let's build something great together now.</p>
                    <div className="footer-link">
                        {socmedlinks.map((socmedlink,index)=>{
                            return(
                                <a href={socmedlink.link} key={index}>
                                    <img src={socmedlink.img} alt="socmed-icon" />
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className="footer-contents">
                    <div className="footer-links">
                        {footerLinks.map((footerLink,index)=>{
                            return(
                                <div className="footer-link" key={index}>
                                    <span className="footer-contents-title">{footerLink.title}</span>
                                    
                                    <a className="footer-contents-item" href="#">{footerLink.item}</a>
                                </div>
                            )
                        })}
                    </div>
                    <div className="footer-contacts">
                        <span className="footer-contents-title">Contact Us</span>
                        {footerContacts.map((footerContact,index)=>{
                            return(
                                <div className="footer-contact" key={index}>
                                    <img src={footerContact.icon}/>
                                    <p>{footerContact.item}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="footer-footnote"></div>
            </footer>
        </>
    )
}

export default Footer;