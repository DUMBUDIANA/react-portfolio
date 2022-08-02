
// eslint-disable-next-line no-unused-vars


//  import TopBar from './components/topbar/TopBar'
//  import Menu from './components/Menu/Menu';
//  import { useState  } from 'react';
 import ContaCt from './components/Contact/ContaCt';
import IntroDuction from './components/Intro/IntroDuction';
// import Port from './components/port/Port';
import WorkList from './components/WorkList/WorkList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services/Services';
import Intouch from './components/Intouch/Intouch'






function App() {
  // const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
    
    {/* <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> */}
    
    
    
   
   




    <div className='sections'>
    

    
    <IntroDuction/>
    {/* <Port/> */}
    {/* <WorKs/> */}
<Services/>
    <WorkList/>
    <ContaCt/>
    <Intouch/>    


    
    </div>
     
    </div>
  );
}

export default App;
