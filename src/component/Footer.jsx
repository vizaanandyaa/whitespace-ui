import logoText from "../assets/header/logoText.png";
import logo from "../assets/header/logo.png";
import linkedin from "../assets/footer/linkedin.png";
import facebook from "../assets/footer/facebook.png";
import twitter from "../assets/footer/twitter.png";
import instagram from "../assets/footer/instagram.png";

function Footer(){
    let socmedlinks = [{img: instagram, link:'https://www.instagram.com/'},{img:facebook,link:'https://www.facebook.com/'},{img:twitter,link:'https://www.twitter.com/'}, {img:linkedin,link:'https://www.linkedin.com/'}];
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
            </footer>
        </>
    )
}

export default Footer;