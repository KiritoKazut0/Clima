import Input from "../Atoms/Input";
import Button from "../Atoms/Button";
import styled from "styled-components";
import { Alert } from '@mui/material'

const StyleBuscador = styled.div`
     position: relative;
`;


function Buscador({onChange, onClick, display, warning, error}) {
 

  return (
    <>
      <StyleBuscador>
        <Input onChange={onChange}></Input>
        <Alert
          sx={{
            width: '40%',
            margin: "-5px 108px",
            height: "38px",
            border: " 0px solid",
            background: "none", opacity: "70%",
            color: "#f30202e7",
            display: display,
           position: "absolute",
           fontSize: '15px'
            
          }}
          severity={warning} 
          color="error" 
        > {"El campo no debe estar vacio"}
        </Alert>
      </StyleBuscador>
      <Button onClick={onClick} ></Button>



    </>
  );
}

export default Buscador;