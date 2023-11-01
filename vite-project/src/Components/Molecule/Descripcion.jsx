import styled from "styled-components";
import Span from "../Atoms/Span";

const StyledDescripcion = styled.div `
    width: 100%;
    margin-top: 30px;
    margin-left: 50px;
`;

function Descripcion ({data, value}){
    return (
      <>
          <StyledDescripcion>
          <Span> {value} </Span>
            <Span> {data} </Span>
        </StyledDescripcion>

      </>

    );
}

export default Descripcion;