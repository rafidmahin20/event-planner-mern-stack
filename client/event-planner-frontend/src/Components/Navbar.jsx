import { useState } from 'react';
import {Link} from "react-scroll";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className='logo'>EVENT PLANNER</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className='links'>
          <Link to="landing" spy={true} duration={500}>HOME</Link>
          <Link to="serviecs" spy={true} duration={500}>SERVICES</Link>
          <Link to="about" spy={true} duration={500}>ABOUT</Link>
          <Link to="contact" spy={true} duration={500}>CONTACT</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar