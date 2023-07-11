import {Route, Routes} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getCountryAll} from './actions/index.js';
import Home from './pages/Home.js';
import DetailCountry from './pages/DetailCountry.js';


function App() {

  const dispatch = useDispatch();

    useEffect(() =>{
      dispatch(getCountryAll())
    },[])

  return ( 
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/home/detail/:country" element={<DetailCountry />} /> 
    </Routes> 
  ); 
} 
 
export default App;