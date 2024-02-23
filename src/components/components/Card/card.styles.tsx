import styled from "styled-components"
import { Link } from "react-router-dom"

export const EventsItem = styled.li`
    width: 360px;
    min-height:320px;

`
export const EventTitulo = styled.h2`
    font-size: 18px;
    padding: 15px 15px 0 15px;
    font-weight:300;
    line-height:150%

`

export const EventImg = styled.img`
    padding: 15px;
    width: calc(100% - 30px);
    aspect-ratio: 16/9;

`

export const EventDataHora = styled.p`
    font-size: 14px;
    padding: 15px;
    line-height: 150%

`

export const EventLink = styled(Link)`
    display: block;
    font-size: 14px;
    padding: 15px;
    line-height: 150%;
    color: #1F0049;

    `