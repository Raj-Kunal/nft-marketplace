import { animalPrimary, animal_1, animal_2, FoxAvatar } from "../../assets";
import Card from "./card/Card";
import "./trending.css";



const Trending = () => {
  return (
    <section className='trending-container'>
      <div className="trending-text">
        <h3>Trending Collection</h3>
        <p>Checkout our weekly updated trending collection.</p>
      </div>
      <div className="trending-cards">
      <Card />
      <Card />
      <Card />
      </div>
    </section>
  )
}

export default Trending
