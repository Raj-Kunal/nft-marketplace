import "./hero.css";
import Button from "../Button/Button";
import { Avatar, ImagePlaceholder, RocketLaunch } from "../../assets";
import { heroInfo } from "../../constants";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero">
         <div className="hero-left">
         <div className="headline">
            <h1 className="heading">Discover digital art & Collect NFTs</h1>
          <p className="hero-content">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
          </div>
          <div className="hero-right mobile">
            <img
              src={ImagePlaceholder}
              alt="placeholder"
              className="placeholder"
            />
            <div className="img-caption">
              <h5>Space Walking</h5>
              <div className="animakid flex">
                <img src={Avatar} alt="avatar" />
                <p>Animakid</p>
              </div>
            </div>
          </div>
             <Button img={RocketLaunch} text={`Get Started`} />
  <div className="flex ">
  {
     heroInfo.map((info, index) => {
       return (
         <div className="info-container" key={info.id}>
    <div className="info">
    <h4 className="hero-info-count">{info.count}</h4>
     <p className="hero-info-title">{info.title}</p>
    </div>
   </div>
       )
     })
   }
  </div>
         </div>
          
          <div className="hero-right">
            <img
              src={ImagePlaceholder}
              alt="placeholder"
              className="placeholder"
            />
            <div className="img-caption">
              <h5>Space Walking</h5>
              <div className="animakid flex">
                <img src={Avatar} alt="avatar" />
                <p>Animakid</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Hero;

// <section className='hero-container'>
// <div className="hero">
// <div className="hero-left">
//   <h1 className="heading">Discover digital art & Collect NFTs</h1>
//   <p className="hero-content">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>

// </div>

// </div>
// </section>
