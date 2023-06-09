import logo from "../assets/header/logo.png";
import logoText from "../assets/header/logoText.png";
import menu from "../assets/header/menu.png";

function Header() {
  const navLists = ["Home", "Features", "About Us", "News", "Contact"];
  return (
    <>
      <header className="header-section">
        <div className="header-wrapper">
          <a className="logo">
            <img className="logo-img" src={logo} alt="logo" />
            <img className="logo-text" src={logoText} alt="logotext" />
          </a>
          <div className="header-navbar-btn">
            <button className="header-btn">
              <p>Start Now</p>
            </button>
            <div className="header-navbar">
              <button className="header-nav-btn">
                <img src={menu} alt="menu-btn" />
              </button>
              <nav>
                <ul className="header-nav-lists">
                  {navLists.map((navList, index) => {
                    return (
                      <li key={index} className="header-nav-list">
                        <a href="#">{navList}</a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
