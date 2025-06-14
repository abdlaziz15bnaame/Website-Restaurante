
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Home from './componente/Home.js/Home';
import { Fragment } from 'react';
import  Navs from './componente/Navs/Navs';
function App() {


  return (
    <Fragment>

    <Navs/>
    <Home/> 
    
    </Fragment>

  );
}

export default App;
