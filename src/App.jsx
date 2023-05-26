import Header from "./component/Header"
import playIcon from './assets/landing/Play.png'
import star from './assets/landing/Star.png'
import landingImg from './assets/landing/landing-img.jpg'
import underline from './assets/landing/underline.png'
import './App.scss'
function App() {

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
          <img src={landingImg} alt="" />
        </div>
      </section>
    </>
  )
}

export default App
