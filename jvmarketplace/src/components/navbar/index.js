import React from 'react';
import styled from 'styled-components'
import { Link,useHistory, Router } from 'react-router-dom';
import home from '../../assets/home.png'
import back from '../../assets/back.png'
const Navbar = props => {
    const history = useHistory()
    return (
        <nav>
            <StyledDiv>
                <LeftHeader>
                    <StyledImg src={home} onClick={() => history.push('/')}></StyledImg>
                </LeftHeader>
                <RightHeader>
                    <StyledItem onClick={() => history.push('/jeux')}>
                        <StyledText>Jeux</StyledText>
                    </StyledItem>
                    <StyledItem onClick={() => history.push('/favorites')}>
                        <StyledText>Favoris</StyledText>
                    </StyledItem>
                        <StyledImg src={back} onClick={() => history.goBack()}></StyledImg>
                </RightHeader>
            </StyledDiv>
        </nav>
    );
};

const StyledDiv = styled.div`
    display: flex;
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
`
const StyledImg = styled.img`
    display: flex;
    justify-content: center;
    width:60px;
    height:60px;
    margin-left:40px;
    margin-right:40px;
`

const StyledItem = styled.div`
    display:flex;
    background-color: blue;
    margin-left:10px;
    width:70px;
    border: solid;
    &:hover {
        background-color:blueviolet
    }
`

const StyledText = styled.p`
    color:white;
    margin-left: auto;
    margin-right: auto;
`



export default Navbar;