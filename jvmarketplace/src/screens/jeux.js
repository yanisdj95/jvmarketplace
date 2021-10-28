import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Favoris from './favoris';

const Jeux = props => {
    const [apiData, setApiData] = useState([])
    let [page, setPage] = useState(0)
    useEffect(() => {
        const apiData = axios({
            method:'get',
            url: `https://api.jikan.moe/v3/top/anime/${page}`,
        }).then((response) => {
            setApiData(response.data.top)
        }).catch(err => {
            console.log(err)
        })
      }, [page])

    const handleFavorite = (animefavorites) => {
        const currentFavorites = localStorage.getItem('favorites')
        ? JSON.parse(localStorage.getItem('favorites'))
        : []

        console.log(animefavorites)
        console.log(currentFavorites)
          const isPresent = currentFavorites.map(e => e.id).indexOf(animefavorites.id)
          console.log(isPresent)
          if(isPresent === -1){
            currentFavorites.push(animefavorites)
            localStorage.setItem('favorites', JSON.stringify(currentFavorites))
          } else {
            const filteredAnimes = currentFavorites.filter(
                anime => anime.id !== animefavorites.id
            )
            console.log(filteredAnimes)
            localStorage.setItem('favorites', JSON.stringify(filteredAnimes))
          }
          
          localStorage.setItem('favorites', JSON.stringify(currentFavorites))
      }
    return (
        <><ButtonDiv>
            <ButtonStyle onClick={() => setPage(page - 1)}>-</ButtonStyle>
            <ButtonStyle onClick={() => setPage(page + 1)}>+</ButtonStyle>     
        </ButtonDiv>
        <ContainerDiv>
                {apiData.map(anime => <AnimeDiv>
                    <TitreDive>
                        <StyledTitre>{anime.title}</StyledTitre>
                    </TitreDive>
                    <StyledImg src={anime.image_url}/>
                    <button onClick={() => handleFavorite({title : anime.title, image : anime.image_url, id : anime.mal_id})}>ADD</button>
                </AnimeDiv>
                )}
        </ContainerDiv>
        <ButtonDiv>
            <ButtonStyle onClick={() => setPage(page - 1)}>-</ButtonStyle>
            <ButtonStyle onClick={() => setPage(page + 1)}>+</ButtonStyle>     
        </ButtonDiv></>
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
const ButtonDiv = styled.div`
    display:flex;
    justify-content: center;
`

const ButtonStyle = styled.button`
background-color: #fca311;
border-radius: 10px;
border: 4px solid #14213d;
color: #ffffff;
text-align: center;
font-size: 28px;
padding: 20px;
width: 200px;
-webkit-transition: all 0.5s;
-moz-transition: all 0.5s;
-o-transition: all 0.5s;
transition: all 0.5s;
cursor: pointer;
margin: 5px;
`

export default Jeux;