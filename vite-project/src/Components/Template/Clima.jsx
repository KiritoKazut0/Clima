import styled from 'styled-components';


import Buscador from '../Molecule/Buscador';
const FondClima = styled.div`
    background: url(https://i.imgur.com/0xYLrrp.jpg);
    width: 100%;
    height: 100vh;
`;


function Clima() {
    return (
        <>
            <FondClima>
                <Buscador></Buscador>
            </FondClima>
        </>

    );
}

export default Clima;
