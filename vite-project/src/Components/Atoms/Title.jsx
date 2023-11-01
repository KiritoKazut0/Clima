import styled from "styled-components";

const Title = styled.h2`
        font-family: 'Open Sans', sans-serif;
        font-family: 'Playfair Display', serif;
        color: #ffffff;
        font-size: ${(props) => props.secundary ? '58px' : '22px'};
        margin-left: ${(props) => props.primary ? '0px' : '90px'} ;
        padding-top:40px ;
        display: block;


`;

export default Title;