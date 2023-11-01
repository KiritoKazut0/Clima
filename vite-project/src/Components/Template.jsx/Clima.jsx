import styled from 'styled-components';
import Container from '../Atoms/Container';
import { useState } from "react";
import Buscador from '../Molecule/Buscador';
import Span from '../Atoms/Span';
import Title from '../Atoms/Title';
import Icon from '../Organisms/Icon';


import Condicion from '../Organisms/Condicion';
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
      uv: "",
      temperatura: "",
      vientotext: "",
      humedadText: "",
      visibilidad: "",
      pressure:"",
      uvText: "",
      presion: ""
  
    });
  
  
    const handleInputChange = (e) => {
      setDate(e.target.value);
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
        console.log (data);
        setWeather ({
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
          temp: data.current.temp_c + " °C",
          nameCity: data.location.name + " "+ data.location.region,
          viento: data.current.wind_kph + " km",
          humedad: data.current.humidity + " %",
          vis_km: data.current.vis_km + " km",
          pressure:data.current.pressure_mb+ " mb",

          uv: data.current.uv,
          temperatura: "Temperatura",
          vientotext: "Viento",
          humedadText: "Humedad",
          visibilidad: "Visibilidad",
          presion: "Presión",
          uvText: "Indice UV",

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
                
               <Container> 
                <Span primary> El tiempo Actual</Span>
                <Title> {Weather.nameCity} </Title>
                <Icon temperature={Weather.temp} textCondicion={Weather.conditionText} src={Weather.icon} ></Icon>

                
                <Condicion data={Weather} ></Condicion>   

               </Container>

            </FondClima>
        </>

    );
}

export default Clima;