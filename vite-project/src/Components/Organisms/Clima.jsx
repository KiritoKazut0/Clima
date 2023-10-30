import styled from 'styled-components';
import Container from '../Atoms/Container';
import { useState } from "react";
import Buscador from '../Molecule/Buscador';

const FondClima = styled.div`
    background: url(https://i.imgur.com/qADKjZj.jpg);
    background-size: cover;
    width: 100%;
    height: 100vh;
   
`;

function Clima() {
    const ApiWater = "https://api.weatherapi.com/v1/current.json?key=8eb817c62edf40a7bc1171510232410&q=";

    //estados
    const [Date, setDate] = useState('');
  
    const [Error, setError] = useState({
      error: false,
      message: "",
      display: "none",
      warning: "warning"
  
    });
  
    const [Weather, setWeather] = useState ({
      conditionText: "",
      icon: "",
      temp: "",
      nameCity: "",
      viento: "",
      humedad: "",
      vis_km: "",
      precip_mm:"",
      uv: ""
  
    });
  
  
    const handleInputChange = (e) => {
      setDate(e.target.value);
      console.log(e.target.value);
    }
  
    const handlerClick = async (e) => {
  
      setError({
        message: "",
        display: "none",
        warning: "warning"
      });
    
      try {
        if (!Date.trim()) {
          throw {message: "El campo no debe de estar vacío"};
        }
    
        const response = await fetch(`${ApiWater}${Date}`);
        const data = await response.json();
  
        if (data.error) throw {message: data.error.message}
        setWeather ({
          
        });

        
      } catch (error) {
        console.log(error);
        setError({
          message: error.message,
          display: "",
          warning: "warning",
        });
      }
    };
    

    return (
        <>
            <FondClima>
                <Buscador onChange={handleInputChange}
                          onClick={handlerClick}
                          display={Error.display}
                          warning={Error.warning}
                ></Buscador>

               <Container></Container>

            </FondClima>
        </>

    );
}

export default Clima;
