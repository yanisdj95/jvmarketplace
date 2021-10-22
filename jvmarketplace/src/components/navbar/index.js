import React from 'react';
import styled from 'styled-components'
import { Link,useHistory, Router } from 'react-router-dom';
import home from '../../assets/home.png'
const Navbar = props => {
    const history = useHistory()
    return (
        <nav>
            <StyledDiv>
                <LeftHeader>
                    <StyledImg src={home} onClick={() => history.push('/')}></StyledImg>
                </LeftHeader>
                <RightHeader>
                    <StyledItem onClick={() => history.push('/jeux')}>Jeux</StyledItem>
                    <StyledItem onClick={() => history.push('/favorites')}>Favoris</StyledItem>
                    <StyledItem onClick={() => history.goBack()}> Retour</StyledItem>
                </RightHeader>
            </StyledDiv>
        </nav>
    );
};

const StyledDiv = styled.div`
    display: flex;
    background-color:red;
    padding:12px;
`
const LeftHeader = styled.div`
    display:flex;
    flex:1;
`
const RightHeader = styled.div`
    justify-content: right;
    display:flex;
    flex:8;
    background:green;
`
const StyledImg = styled.img`
    display: flex;
    justify-content: center;
    width:60px;
    height:60px;
`

const StyledItem = styled.p`
    display:flex;
    background-color: blue;
    margin-left:40px;
`



export default Navbar;