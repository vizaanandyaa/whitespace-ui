import Header from "./component/Header"
import playIcon from './assets/landing/Play.png'
import star from './assets/landing/Star.png'
import landingImg from './assets/landing/landing-img.jpg'
import underline from './assets/landing/underline.png'
import chip from './assets/landing/EMV Chip.png'
import visa from './assets/landing/visa-logo.png'
import checkGrad from './assets/features/Check Circle.png'
import mobileGrad from './assets/features/Mobile.png'
import emailGrad from './assets/features/Email Open.png'
import featuresImg1 from './assets/features/features-img1.jpg'
import featuresImg2 from './assets/features/features-img2.jpg'
import featuresImg3 from './assets/features/features-img3.jpg'
import featuresImg4 from './assets/features/features-img4.jpg'
import './App.scss'
function App() {
  let featuresContents = [{img:checkGrad,title:'Project Structure',desc:'Check out our proven methods, guides, and exercises that help make work better, and people happier.'},
  {img:mobileGrad,title:'Responsive',desc:'This Design System and UI kit is coming with full-responsive screens for tablet and mobile devices.'},
  {img:emailGrad,title:'Messaging',desc:'On mobile, customers can send text, or audio messages to agents, like using any messaging app'}];
  let featuresImgs = [featuresImg1,featuresImg2,featuresImg3,featuresImg4];
  return (
    <>
      <Header/>
      <section className="landing container">
        <div className="landing-info">
          <h1 className="landing-title">
           <span>Everything you need to scale a <span className="landing-title--underline"><p>global&nbsp;</p><img className="title-underline--long" src={underline} alt="" /> </span><span className="landing-title--underline"><p>team</p><img className="title-underline--short" src={underline} alt="" /> </span></span> 
          </h1>
          <p className="paragraph">
          Check out our proven methods, guides, and exercises that help make work better, and people happier.
          </p>
          <div className="landing-btns">
            <button className="btn btn--blue landing-btn">Learn more</button>
            <button className="btn btn--white btn-w-icon landing-btn">
              <img src={playIcon} alt="play-icon" className="play-icon" />
              <p>Watch demo</p> 
            </button>
          </div>
          <p className="paragraph paragraph--size">Trusted by over than 1M customers</p>
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
            <img className="landing-card-chip" src={chip} alt="chip"/>
            <p className="landing-card-num">9876&nbsp;&nbsp;5432&nbsp;&nbsp;1234&nbsp;&nbsp;5678</p>
            <p className="landing-card-detail">Jenny Wilson <span>05/23</span></p>
            <img className="landing-card-visa" src={visa} alt="visa" />
          </div>
        </div>
      </section>
      <section className="compo features container">
        <div className="compo-headline">
          <span className="compo-tag">Our Features</span>
          <h2 className="compo-headline-title">Our key benefit</h2>
          <p className="compo-headline-desc">Our services are designed to cater to your specific needs and goals</p>
        </div>
        <div className="compo-contents-flex">
          <div className="features-texts">
            {featuresContents.map((featuresContent,index)=>{
              return(
                <div className="features-text" key={index}>
                  <span className="features-icon"><img src={featuresContent.img}/></span>
                  <h3 className="features-title">{featuresContent.title}</h3>
                  <div className="features-desc">{featuresContent.desc}</div>
                </div>
              )
            })}
          </div>
          <div className="features-imgs">
            {featuresImgs.map((featuresImg,index)=>{
              return(
                <img key={index} src={featuresImg} className="features-img"/>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
