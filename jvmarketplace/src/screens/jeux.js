import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Jeux = props => {
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        const apiData = axios({
            method:'get',
            url: "https://api.jikan.moe/v3/top/anime",
        }).then((response) => {
            setApiData(response.data.top)
        }).catch(err => {
            console.log(err)
        })
      }, [])
      console.log(apiData)
    return (
        <ContainerDiv>
            {apiData.map(anime => 
                <AnimeDiv>
                        <TitreDive>
                            <p>{anime.title}</p>
                        </TitreDive>
                        <img src={anime.image_url}/>
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
    background-color: red;
    height:600px;
    width:300px;
    margin:30px;
`
const TitreDive = styled.div`
    height:100px;
    width:100px;
    background-color: aliceblue;
`


export default Jeux;