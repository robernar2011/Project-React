import {useParams} from 'react-router-dom'

import Header from '../../components/components/Header/header'
import Footer from '../../components/components/Footer/footer'


function InfosEvent() {

    const {id} = useParams();

    return (
        <>
        <Header/>
        <h1>Mais informações do evento {id}</h1>
        <Footer/>

        </>
    )
}

export default InfosEvent