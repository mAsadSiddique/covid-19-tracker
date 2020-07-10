import React, { useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Panel from './Components/panel';
// import AllCountries from './Components/allCountries';
import CountryCardDisplay from './Components/countryCard';



function App() {
  // const [getCountry, setCountry] = useState(AllCountries())
  // function handleCountryData(){
  //   console.log(getCountry)
  // }
  return (
    <div className="App">
      <NavBar/>
      <h1>Global World Condition </h1>
      <Panel/>
      <CountryCardDisplay/>
      {/* <AllCountries/> */}
    </div>
  );
}

export default App;
