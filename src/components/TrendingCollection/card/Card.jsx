import "./card.css"
import { animalPrimary, animal_1, animal_2, FoxAvatar } from "../../../assets";

const Card = () => {
  return (
    <div className="card">
    <div className="card-items">
    <img src={animalPrimary} alt="" className="primary-img"/>
    <div className="frames">
    <img src={animal_1} alt="" className="frame" />
    <img src={animal_2} alt="" className="frame" />
    </div>
    </div>
    <div className="card-info">
      <div className="card-name">
        <h5>DSGN Animals</h5>
      </div>
      <div className="artist">
        <img src={FoxAvatar} alt="" className="artist-avatar" />
        <p className="artist-name">MrFox</p>
      </div>
    </div>
  </div>
  )
}

export default Card
