import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components'
const Favoris = props => {
    const [fav, setFav] = useState(JSON.parse(localStorage.getItem('favorites')))
    useEffect(() => {
        console.log(fav)
    }, [])
    return (
        <ContainerDiv>
                {fav.map(anime =>
                    <AnimeDiv>
                    <TitreDive>
                        <StyledTitre>{anime.title}</StyledTitre>
                    </TitreDive>
                    <StyledImg src={anime.image}/>
                    <button>REMOVE</button>
                </AnimeDiv>
                )}
        </ContainerDiv>
    );
};

const ContainerDiv = styled.div`
    display:flex;
    flex-wrap: wrap;
`
const AnimeDiv = styled.div`
    margin:30px;
    align-items: center;
    display:flex;
    flex-direction: column;
    border:solid;
`
const TitreDive = styled.div`
    height:100px;
    width:100px;
`
const StyledTitre = styled.p`
    font-size: 1rem;
    text-align: center;
    font-weight: bold;
`
const StyledImg = styled.img`
    height:300px;
    width:200px;
`

export default Favoris