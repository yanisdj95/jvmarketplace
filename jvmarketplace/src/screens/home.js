import React from 'react';
import styled from 'styled-components';

const Home = props => {
    return (
        <StyledDiv>
            <p>"Titre du site"</p>
        </StyledDiv>
    );
};
const StyledDiv = styled.div`
    background-color: red;
    position: absolute;
    left: 50%;
    margin-left: -40px;
    top: 30%;
    margin-top: -40px;
`

export default Home;