import "./creators.css"
import Button from "../Button/Button"
import {RocketLaunch } from "../../assets";
import ArtistCard from "../TrendingCollection/card/ArtistCard";

const Creators = () => {
  return (
    <>
      <div className="creator-container">
        <div className="top">
          <div className="top-creator">
          <h3>Top Creators</h3>
            <p>Checkout Top Rated Creators on the NFT Marketplace</p>
          </div>
           <div className="creator-btn">
           <Button text={`View Rankings`} img={RocketLaunch} />
           </div>
        </div>
        <div className="artist-card-container">
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
        </div>
        <div className="creator-mobile-btn">
           <Button text={`View Rankings`} img={RocketLaunch} />
           </div>
      </div>
    </>
  )
}

export default Creators
