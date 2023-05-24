import logo from '../assets/header/logo.png'
import logoText from '../assets/header/logoText.png'
import menu from '../assets/header/menu.png'

function Header(){
    return(
        <>
            <header className="header-wrapper">
                <a className="header-logo">
                    <img className='header-logo-img' src={logo} alt="logo" />
                    <img className='header-logo-text' src={logoText} alt="logotext" />
                </a>
                <div className="header-navbar-btn">  
                    <button className='header-btn'><p>Start Now</p></button>
                    <div className="header-navbar">
                        <button className='header-nav-btn'><img src={menu} alt="menu-btn" /></button>
                        <nav>
                            <ul className='header-nav-lists'>
                                <li className='header-nav-list'><a href="#">Home</a></li>
                                <li className='header-nav-list'><a href="#">Features</a></li>
                                <li className='header-nav-list'><a href="#">About Us</a></li>
                                <li className='header-nav-list'><a href="#">News</a></li>
                                <li className='header-nav-list'><a href="#">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header