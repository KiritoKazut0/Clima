import styled from "styled-components";
import Title from "../Atoms/Title";
import Span from "../Atoms/Span";

const StyleTemperature = styled.div `
    width: 35%;
    height: 30%;
    margin-bottom: 35px;
    margin-left: -70px;

`;


function Temperatura ({temperature, textCondicion}){
    return (
        <>
            <StyleTemperature>
                <Title secundary> {temperature} </Title>
                <Span>{textCondicion} </Span>
            </StyleTemperature>
        </>
    );
}

export default Temperatura;