import styled from "styled-components";
import Temperatura from "../Molecule/Temperature";
import Img from "../Atoms/Img";
 
 const Container = styled.div`
    display: flex;
    width: 100%;
    padding-left: 7%;
    margin-top: 25px;
    align-items: first;

`;



function Icon ({temperature, textCondicion, src}){
    return (
        <>
            <Container>
                <Img src={src}></Img>
                <Temperatura temperature={temperature} textCondicion={textCondicion}></Temperatura>
            </Container>
        </>
    );
}

export default Icon;