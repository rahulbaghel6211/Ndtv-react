import './Navbar.css';

// import { Link } from 'react-router-dom';
import {
  faEarlybirds,
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faSearchengin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer=()=>{
    return(
        <div className='footer'>
            <div >
         <img className='img1' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/NDTV_logo.svg/2560px-NDTV_logo.svg.png' alt=''/>
           <p>FOLLOW US ON</p>
           <div className='flex'>
       <FontAwesomeIcon icon={faTwitter} className="icon2"/>
       <FontAwesomeIcon icon={faFacebook} className="icon2"/>
       <FontAwesomeIcon icon={faEarlybirds} className="icon2"/>
       <FontAwesomeIcon icon={faInstagram} className="icon2"/>
       <FontAwesomeIcon icon={faLinkedinIn} className="icon2"/>
       </div>
       <div className='palcerhoder'>
       <input type='text' placeholder='SEARCH' ></input>
       <FontAwesomeIcon icon={faSearchengin} className="icon2"/> 
       </div>
            </div>
            <div className='second'>
                <div className='third'>
                   <p>ABOUT US</p>
                   <p>ADVERTISE</p>
                   <p>EPG SERVICES</p>
                   <p>CAREERS</p>
                   <p>CHANNELS</p>
                   <p>DISCLAMER</p>
                   <p>FEEDBACK</p>
                   <p>INVESTORS</p>
                   <p>REDRESSALS</p>
                   <p>SERVICE TERMS</p>
                   <p>ARCHIVES</p>
                </div>
                <div className='line'></div>
                <div className='fourth'>
                   <p className='ndtvg'>NDTV GROUP SITES</p>
                   <p>NEWS</p>
                   <p>BUSINESS</p>
                   <p>HINDI</p>
                   <p>MOVIES</p>
                   <p>CRICKET</p>
                   <p>FOOD</p>
                   <p>TECH</p>
                   <p>AUTO</p>
                   <p>TRAINS</p>
                   <p>ART</p>
                </div>
                <div className='line'></div>
                <div className='fitth'>
                    <div>WEBSITE FOLLOWS THE DNPA OF ETHICS</div>
                    <div className='high'></div>
                    <div> © COPYRIGHT NDTV CONVERGENCE LIMITED 2022. ALL RIGHTS RESERVED.</div>
                </div>

            </div>
       
        </div>
    )
}
export default Footer;