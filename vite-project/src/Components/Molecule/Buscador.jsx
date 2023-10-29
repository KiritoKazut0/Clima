import Input from "../Atoms/input";
import Button from "../Atoms/Button";
import styled from "styled-components";

const StyleBuscador = styled.div`
     position: relative;
`;



function Buscador() {
    return (
        <>
            <StyleBuscador>
                <Input></Input>
            </StyleBuscador>
                <Button></Button>
          


        </>
    );
}

export default Buscador;