import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components'
const Favoris = props => {
    const favoriteCheck = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
    const [favorites, setFav] = useState(favoriteCheck)
    useEffect(() => {
        console.log(favorites)
    }, [])
    
    const removeFavorite = (id) => {
        console.log("🚀 ~ file: characterDetails.js ~ line 44 ~ removeFavorite ~ id", id)
            const newFavorite = favorites.filter(favorites => favorites.id !== Number(id))
            console.log("🚀 ~ file: characterDetails.js ~ line 45 ~ removeFavorite ~ newFavorite", newFavorite)
            localStorage.setItem('favorites', JSON.stringify(newFavorite)) 
            setFav(newFavorite) 
        }
    return (
        <ContainerDiv>
                {favorites.map(anime =>
                    <AnimeDiv>
                    <TitreDive>
                        <StyledTitre>{anime.title}</StyledTitre>
                    </TitreDive>
                    <StyledImg src={anime.image}/>
                    <button onClick={() => removeFavorite(anime.id)}>REMOVE</button>
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