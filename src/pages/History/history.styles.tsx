import styled from "styled-components"
import { Link } from "react-router-dom"


export const Container = styled.div`
width: 1140px;
list-style-type: none;
min-height: calc(100vh - 240px);
display: block;
margin: auto;
flex-wrap: wrap;
justify-content: space-between;
`

export const HistoryTitle= styled.h2`
padding: 5px;
`

export const HistoryText = styled.p`
text-align:left;
padding: 5px
`
export const HistoryContainer = styled.section`
list-style-type: none;
display: flex;
justify-content: space-between;
padding: 30px `

export const HistoryList = styled.div`
flex-basis: calc(50% - 20px);
margin-bottom: 20px;`

export const HistoryImg = styled.img`
width: 600px;
margin: 30;
padding: 20px
`

export const ContatoLink = styled(Link)`
color: #333;
font-weight: bold;

`