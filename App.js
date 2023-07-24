import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const apiKey ="f56f24967aaf51182d1d4df628297c6d"
  const [inputCity, setInputCity] = useState({})
  const[data,setData] =useState({})

  const getweatherDetails =(cityName) => {
    if(!cityName) return;
    const apiURL ="https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

    axios.get(apiURL).then((res) =>{
      console.log("response",res.data)
      setData(res.data)
    }).catch((err)=>{
      console.log("err",err)
    })
  }
  const handleChangeInput = (e) => {
    //console.log("value", e.target)
    setInputCity(e.target.value)
  }
  const handleSearch = () =>{
    getweatherDetails(inputCity)
  }

  
  return (
    <div className="cl-md-12">
      <div className="weatherBg">
        <h1 className= "heading" > Weather App</h1>
       <div className = "d-grid col-4 mt-4">
       <input type ="text" classNmae ="form-control" 
       onChange={ handleChangeInput}/>
       <button className = "btn btn-primary my-3" type="button" onClick={handleSearch}>Search</button>
      </div>
      </div>
      <div
        className ="col-md-12 text-center mt-5">
        <div
        className ="shadow rounded weatherResultBox">
          <img src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png" className ="weatherIcon"/>
          
          <h5 className ="weatherCity"> {data?.name}</h5>
          <h6 className= "weatherTemp"> {((data?.main?.temp)-273.15).toFixed(2)} °C</h6>
        </div>
        
      </div>

    </div>
  );
}

export default App;