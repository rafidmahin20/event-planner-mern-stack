import Birthday from "../images/birthday.jpg";
import Anniversary from "../images//anniversary.jpg";
import Camping from "../images//camping.jpg";
import Game from "../images//game.jpg";
import Wedding from "../images/wedding.jpg";
import Party from "../images/party.jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      url: Birthday,
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: Anniversary,
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: Camping,
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: Game,
      title: "Game Night Planning",
    },
    {
      id: 5,
      url: Wedding,
      title: "Wedding Planning",
    },
    {
      id: 6,
      url: Party,
      title: "Party Planning",
    },
  ]
  return (
    <div>
      <div className='services container'>
        <h2>OUR SERVICES</h2>
        <div className='banner'>
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
              <h3>{element.title}</h3>
              <img src={element.url} alt={element.title}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services