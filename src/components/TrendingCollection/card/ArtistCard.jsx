import { animalPrimary, Avatar } from "../../../assets";
import "./artistCard.css";


const ArtistCard = () => {
  return (
    <div className="artist-card">
      <div className="number">
        1
      </div>
      <div className="creator-artist-avatar">
        <img src={Avatar} alt="creator" />
      </div>
      <div className="creator-artist-info">
        <h5>Keepitreal</h5>
        <div className="creator-total-sale">
            Total Sale: <span className="creator-sale-count">34.53 ETH</span>
        </div>
      </div>
    </div>
  )
}

export default ArtistCard
