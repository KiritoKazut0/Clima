import styled from "styled-components";

const Span = styled.span`
        padding-top: ${(props) => props.primary ? '65px' : '5px'};
        font-family: 'Open Sans', sans-serif;
        font-family: 'Playfair Display', serif;
        font-size: ${(props) => props.primary ? '15px' : '14.5px'};
        display: block;
        color: #ffffff ;
        margin-left: ${(props) => props.primary ? '60px' : ''};
        text-align: ${(props) => props.primary ? 'justify' : 'center'};
        
`;

export default Span;