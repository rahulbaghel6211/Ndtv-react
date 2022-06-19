import {
  Route,
  Routes,
} from 'react-router-dom';

import Cities from './Cities';
import Covid from './Covid';
import Footer from './Footer';
import India from './India';
import Latest from './Latest';
import LiveTv from './LiveTv';
import More from './More';
import Navbar from './Navbar';
import Offbeat from './Offbeat';
import Opinion from './Opinion';
import Photo from './Photos';
import Trendes from './Trends.Jsx';
import Video from './Video';
import World from './World';

function AllRoutes(){
      return(
          <>
          <Navbar/>
          <Routes>
              <Route path='/live' element={<LiveTv/>}></Route>
              <Route path='/' element={<Latest/>}></Route>
              <Route path='/covid' element={<Covid/>}></Route>
              <Route path='/india' element={<India/>}></Route>
              <Route path='/opinion' element={<Opinion/>}></Route>
              <Route path='video/' element={<Video/>}></Route>
              <Route path='/cities' element={<Cities/>}></Route>
              <Route path='/world' element={<World/>}></Route>
              <Route path='/offbeat' element={<Offbeat/>}></Route>
              <Route path='/trendes' element={<Trendes/>}></Route>
              <Route path='/photo' element={<Photo/>}></Route>
              <Route path='/more' element={<More/>}></Route>
          </Routes>
          <Footer></Footer>
          </>
      )
  }
  export default AllRoutes