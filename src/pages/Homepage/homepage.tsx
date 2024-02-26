
import { useState, useEffect } from "react"
import axios from "axios"
import Card from "../../components/components/Card/card"
import Footer from "../../components/components/Footer/footer"
import Header from "../../components/components/Header/header"
import { Container, Title,  EventsLista, Events } from "./homepage.styles"


function Homepage() {


    const [events, setEvents] = useState([]);

    useEffect(() => {
        const listarEventos = async() => {
            try{
                const response = await axios.get('http://localhost:3000/events');
                setEvents(response.data);
                console.log(response.data);
            }catch(e) {
                console.error('Erro ao buscar eventos', e);
            }
        }
        listarEventos();
    })
    return (
        <>
        <Header/>
        <Container>
        <Title>Bem-vindes ao Instituto G4</Title>
        <Events>
            <EventsLista>
            {events.map((event, index) => (
                <Card key={index}
                      titulo={event.titulo}
                      url_da_imagem={event.url_da_imagem}
                      data={event.data}
                      horario={event.horario}
                      id={event.id}
                      />
                ))}
            </EventsLista>
        </Events>

        </Container>
        <Footer/>
        </>
    )
}

export default Homepage