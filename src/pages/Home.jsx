import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Creators from '../components/Top creators/Creators'
import Trending from '../components/TrendingCollection/Trending'


const Home = () => {
  return (
    <>
     <Navbar />
     <Hero />
    <Trending />
    <Creators />
    </>
  )
}

export default Home
