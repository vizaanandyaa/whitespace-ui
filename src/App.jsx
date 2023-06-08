import Header from "./component/Header";
import playIcon from "./assets/landing/Play.png";
import star from "./assets/landing/Star.png";
import landingImg from "./assets/landing/landing-img.jpg";
import underline from "./assets/landing/underline.png";
import chip from "./assets/landing/EMV Chip.png";
import visa from "./assets/landing/visa-logo.png";
import checkGrad from "./assets/features/Check Circle.png";
import mobileGrad from "./assets/features/Mobile.png";
import emailGrad from "./assets/features/Email Open.png";
import featuresImg1 from "./assets/features/features-img1.jpg";
import featuresImg2 from "./assets/features/features-img2.jpg";
import featuresImg3 from "./assets/features/features-img3.jpg";
import featuresImg4 from "./assets/features/features-img4.jpg";
import cardImg1 from "./assets/blog/card-img1.jpg";
import cardImg2 from "./assets/blog/card-img2.jpg";
import cardImg3 from "./assets/blog/card-img3.jpg";
import ava from "./assets/blog/Avatar.jpg"
import emailIcon from "./assets/faq/Email.png"
import Accordion from "./component/Accordion";
import "./App.scss";
function App() {
  let featuresContents = [
    {
      img: checkGrad,
      title: "Project Structure",
      desc: "Check out our proven methods, guides, and exercises that help make work better, and people happier.",
    },
    {
      img: mobileGrad,
      title: "Responsive",
      desc: "This Design System and UI kit is coming with full-responsive screens for tablet and mobile devices.",
    },
    {
      img: emailGrad,
      title: "Messaging",
      desc: "On mobile, customers can send text, or audio messages to agents, like using any messaging app",
    },
  ];
  let featuresImgs = [featuresImg1, featuresImg2, featuresImg3, featuresImg4];
  let servicesContents = [
    "Unlimited pages",
    "Easy Access",
    "14-days free trial",
  ];
  let questions = [
    "01. What are properties in Figma?",
    "02. How Whitespace UI kit and Design System can help me?",
    "03. What is your return policy?",
    "04. How can i contact customer support?",
    "05. What payment methods do you accept?",
  ];
  let blogs = [{title : 'Meet an web designer in his studio in Amsterdam',img : cardImg1, desc:"We'll get to know the designer and their design philosophy, as well as take a look..."},{title : "The Evolution of UI/UX Design: From Skeuomorphism to Flat Design",img:cardImg2,desc:"Discussing the shift from realistic designs to minimalistic, flat designs."},{title:"The Importance of User-Centered Design in IT Projects",img:cardImg3,desc:"Exploring the significance of putting the user first in IT projects"}]
  let categories = [{type:'ui', text:'UI/UX'},{type:'studio', text:'Studio'},{type:'webDesign', text:'Web Design'}]
  return (
    <>
      <Header />
      <section className="landing container">
        <div className="landing-info">
          <h1 className="landing-title">
            <span>
              Everything you need to scale a{" "}
              <span className="landing-title--underline">
                <p>global&nbsp;</p>
                <img
                  className="title-underline--long"
                  src={underline}
                  alt=""
                />{" "}
              </span>
              <span className="landing-title--underline">
                <p>team</p>
                <img
                  className="title-underline--short"
                  src={underline}
                  alt=""
                />{" "}
              </span>
            </span>
          </h1>
          <p className="paragraph">
            Check out our proven methods, guides, and exercises that help make
            work better, and people happier.
          </p>
          <div className="btns landing-btns">
            <button className="btn btn--blue landing-btn">Learn more</button>
            <button className="btn btn--white btn-w-icon landing-btn">
              <img src={playIcon} className="play-icon" />
              <p>Watch demo</p>
            </button>
          </div>
          <p className="paragraph paragraph--size">
            Trusted by over than 1M customers
          </p>
          <div className="stars">
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
          </div>
        </div>
        <div className="landing-img">
          <img className="landing-img-cover" src={landingImg} alt="" />
          <div className="landing-card">
            <p className="landing-card-title">Whitespace UI Bank</p>
            <img className="landing-card-chip" src={chip} alt="chip" />
            <p className="landing-card-num">
              9876&nbsp;&nbsp;5432&nbsp;&nbsp;1234&nbsp;&nbsp;5678
            </p>
            <p className="landing-card-detail">
              Jenny Wilson <span>05/23</span>
            </p>
            <img className="landing-card-visa" src={visa} alt="visa" />
          </div>
        </div>
      </section>
      <section className="compo features container">
        <div className="compo-headline">
          <span className="compo-tag">Our Features</span>
          <h2 className="compo-headline-title">Our key benefit</h2>
          <p className="compo-headline-desc">
            Our services are designed to cater to your specific needs and goals
          </p>
        </div>
        <div className="compo-contents-flex-desktop">
          <div className="features-texts">
            {featuresContents.map((featuresContent, index) => {
              return (
                <div className="features-text" key={index}>
                  <span className="compo-icon --features">
                    <img src={featuresContent.img} />
                  </span>
                  <h3 className="features-title">{featuresContent.title}</h3>
                  <div className="features-desc">{featuresContent.desc}</div>
                </div>
              );
            })}
          </div>
          <div className="features-imgs">
            {featuresImgs.map((featuresImg, index) => {
              return (
                <img key={index} src={featuresImg} className="features-img" />
              );
            })}
          </div>
        </div>
      </section>
      <section className="compo services container">
        <div className="compo-headline --big">
          <h2 className="compo-headline-title --big">
            Streamline your workflow with SaaS: Get started now
          </h2>
          <p className="compo-headline-desc">
            Stay up to date with the most relevant information
          </p>
        </div>
        <div className="services-contents">
          {servicesContents.map((servicesContent, index) => {
            return (
              <div className="service" key={index}>
                <span className="compo-icon --services">
                  <img src={checkGrad} />
                </span>
                <p>{servicesContent}</p>
              </div>
            );
          })}
        </div>
        <div className="btns services-btns">
          <button className="btn btn--blue landing-btn">Learn more</button>
          <button className="btn btn--white btn-w-icon landing-btn">
            <img src={playIcon} alt="play-icon" className="play-icon" />
            <p>Watch demo</p>
          </button>
        </div>
      </section>
      <section className="compo faq container">
        <div className="compo-headline">
          <h2 className="compo-headline-title">Frequently Asked Questions</h2>
          <p className="compo-headline-desc">
            We tried to answer most common questions, if you have any
            additional, please get in touch with our friendly team
          </p>
        </div>
        <div className="compo-contents">
          <div className="accordions">
            {questions.map((question, index) => {
              return <Accordion key={index} quest={question} />;
            })}
          </div>
          <div className="modal">
            <h3 className="modal-title">Still have a questions?</h3>
            <p className="modal-text">We're sorry we couldn't provide you with the information you were looking for. Please contact us and we'll be happy to help.</p>
            <button className="btn btn--blue btn-w-icon btn-modal">
            <img src={emailIcon} className="play-icon" />
              <p>Contact us</p>
            </button>
          </div>
        </div>
      </section>
      <section className="compo blog container">
        <div className="compo-headline --big">
          <span className="compo-tag">Blog</span>
          <h2 className="compo-headline-title">Our fresh news</h2>
          <p className="compo-headline-desc">
          Our blog is more than just a collection of articles - it's a hub of ideas, inspiration, and thought-provoking discussions.
          </p>
        </div>
        <div className="compo-contents-flex-desktop compo-blog">
          {blogs.map((blog,index)=>{
            return(
            <div className="compo-card" key={index}>
              <a href="#" className="card-img">
                <img src={blog.img} alt="card-img" />
              </a>
              <div className="card-profile">
                <div className="profile-img">
                  <img src={ava} alt="ava"/>
                </div>
                <div className="profile-info">
                  <h4 className="profile-name">Jenny Wilson</h4>
                  <h5 className="profile-date">May 9, 2023</h5>
                </div>
              </div>
              <a href="#">
                <h3 className="card-title">{blog.title}</h3>
              </a>
              <p className="card-text">{blog.desc}</p>
              <div className="card-tags">
                {categories.map((category,index)=>{
                  return(
                    <span key={index} className={`card-tag ${category.type}`}>{category.text}</span>
                  )
                })}
                <span className="card-tag --summary">+2</span>
              </div>
            </div>
            )
          })}
        </div>
        <div className="compo-btn">
          <button className="btn btn--blue">Load more</button>
        </div>
      </section>
      <section className="container subs-container">
        <div className="compo subs">
          <div className="compo-headline subs-headline">
            <h2 className="compo-headline-title subs-title">Enter your e-mail address and get started for free</h2>
            <p className="compo-headline-desc subs-desc">Stay up to date with the most relevant information, our new collections, news and special offers!</p>
          </div>
          <div className="subs-contents">
            <input className="compo-input" type="email" placeholder="Your e-mail address"/>
            <button className="btn btn--blue">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
