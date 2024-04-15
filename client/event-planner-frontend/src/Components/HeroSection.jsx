import { Link } from 'react-scroll';
import Event1 from "../images/event1.jpg";

const HeroSection = () => {
  return (
    <section className='hero'>
      <img src={Event1} alt='events'/>
      <div className='item'>
        <h1>Dream Maker</h1>
        <div>
          <h1>Your personal dream maker</h1>
          <p>
            We believe that it is all about the BIG DREAMS and the small
          </p>
          <Link to="contact" spy={true} duration={500}>
            Book Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection