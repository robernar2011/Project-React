import { Link } from "react-router-dom";
import Footer from "../../components/components/Footer/footer";
import Header from "../../components/components/Header/header";

function About() {
  return (
    <>
      <Header />
      <div className="about">
        <h1>Nossa História</h1>
        <Link to={"/homepage"}>Ir para Homepage</Link>
        <Link to={"/login"}>Voltar para Login</Link>
      </div>
      <Footer />
    </>
  );
}

export default About;