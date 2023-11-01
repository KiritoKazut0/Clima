import styled from "styled-components";
import Descripcion from "../Molecule/Descripcion";

const StyledCondicion = styled.div `
    width: 70%;
    height: 100px;
    display: flex;
    align-items: center;

`;


function Condicion ({data}){
    return (
        <>
            <StyledCondicion>
                <Descripcion data={data.viento} value={data.vientotext}></Descripcion>
                <Descripcion data={data.humedad} value={data.humedadText}></Descripcion>
                <Descripcion data={data.vis_km} value={data.visibilidad}></Descripcion>
                <Descripcion data={data.pressure} value={data.presion}></Descripcion>
                <Descripcion data={data.uv} value={data.uvText}></Descripcion>
            </StyledCondicion>
        </>
    );
}

export default Condicion;