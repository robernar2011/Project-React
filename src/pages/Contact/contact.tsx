import { Link } from "react-router-dom"
import Footer from "../../components/components/Footer/footer"
import Header from "../../components/components/Header/header"

function Contact() {
    return (
        <>
        <Header/>
        <div className="body">
        <h1>Formulário de contato aqui</h1>
        <Link to={"/homepage"}>Ir para Homepage</Link>
        <Link to={"/login"}>Voltar para Login</Link>
        </div>
        <Footer/>
        </>
    )
}

export default Contact