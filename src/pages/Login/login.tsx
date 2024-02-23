import { Link } from "react-router-dom"

import Footer from "../../components/components/Footer/footer"
import Header from "../../components/components/Header/header"

function Login() {
    return (
        <>
        <Header/>
        <div className="login">
        <h1>Formulário de login</h1>
        <Link to={"/homepage"}>Ir para Homepage</Link>
        </div>
        <Footer/>
        </>
    )
}

export default Login