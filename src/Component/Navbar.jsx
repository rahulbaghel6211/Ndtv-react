import './Navbar.css';

import { Link } from 'react-router-dom';

import {
  faEarlybirds,
  faFacebook,
  faSearchengin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar=()=>{
    return(
        <div>
            <div className='firstnav'>
                <button className='btn'>NDTV</button>
                <button className='btn'>हिन्दीन्यूज़</button>
                <button className='btn'>BUSINESS</button>
                <button className='btn'>MOVIES</button>
                <button className='btn'>CRICKET</button>
                <button className='btn'>TECH</button>
                <button className='btn'>FOOD</button>
                <button className='btn'>CRYPTO</button>
                <button className='btn'>WEB STORIES</button>
                <button className='btn'>EDUCATION</button>
                <button className='btn'>AUTO</button>
                <button className='btn'>LIFESTYLE</button>
                <button className='btn'>HEALTH</button>
                <button className='btn'>SHOPPING</button>
                <button className='btn'>ART</button>

            </div>
        <nav className='nav'>
        <img className='img1' src='https://logodix.com/logo/2131947.png' alt=''/>
       <Link className='livetv' to="/live">LIVETV</Link>
       <Link className='livetv'  to="/">LATEST</Link>
       <Link  className='livetv' to="/covid">COVID</Link>
       <Link className='livetv'  to="/india">INDIA</Link>
       <Link className='livetv'  to="/opinion">OPINION</Link>
       <Link className='livetv'  to="/video">VIDEO</Link>
       <Link className='livetv'  to="/cities">CITIES</Link>
       <Link className='livetv'  to="/world">WORLD</Link>
       <Link className='livetv'  to="/offbeat">OFFBEAT</Link>
       <Link className='livetv'  to="/trends">TRENDS</Link>
       <Link className='livetv'  to="/photo">PHOTOS</Link>
       <Link className='more'  to="/more">.  .  .</Link>
       <div className='flex'>
       <FontAwesomeIcon icon={faTwitter} className="icon1"/>
       <FontAwesomeIcon icon={faFacebook} className="icon1"/>
       <FontAwesomeIcon icon={faEarlybirds} className="icon1"/>
       <FontAwesomeIcon icon={faSearchengin}  className="icon1" />
       </div>
        </nav>
      
        </div>
    )
}
export default Navbar;