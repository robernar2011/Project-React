import { EventsItem, EventTitulo, EventImg, EventDataHora, EventLink } from "./card.styles";


function Card({titulo, url_da_imagem, data, horario, id}) {
    return(
        <EventsItem>
            <EventTitulo>{titulo}</EventTitulo>
            <EventImg src={url_da_imagem} alt={titulo}/>
                    <br/>
            <EventDataHora>Data e Hora: {data} - {horario}.</EventDataHora>
            <EventLink to={`/event/${id}`}>Mais informações</EventLink>
        </EventsItem>
    )
}

export default Card