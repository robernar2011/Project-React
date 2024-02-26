import { useState } from "react";
import { useNavigate } from "react-router";

import axios from "axios";

import {
  LoginContent,
  LoginBox,
  LoginTitle,
  FormBox,
  FormItem,
  FormLabel,
  FormInput,
  Sidebar,
  SidebarContainer,
  LogoContainer,
  Logo,
  ErrorMessage,
  LoginContainer,
  FormButton,
} from "./login.styles";

const Login = () => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const EfetuarLogin = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user");
      const user = response.data;
      const usuarioEncontrado = user.find(
        (user: { nome: string; senha: string }) =>
          user.nome === nome && user.senha === senha
      );
      if (usuarioEncontrado) {
        navigate("/homepage");
      } else {
        setErro("Nome ou Senha inválido");
      }
    } catch (error) {
      console.error("Erro ao buscar eventos", error);
    }
  };

  return (
    <LoginContainer>
      <Sidebar>
        <SidebarContainer>
          <LogoContainer>
            <Logo
              src="public\images\logo.png"
              alt="Logomarca da casa de eventos"
            />
          </LogoContainer>
        </SidebarContainer>
      </Sidebar>
      <LoginContent>
        <LoginBox>
          <LoginTitle>Login</LoginTitle>
          <FormBox>
            <FormItem>
              <FormLabel>Nome:</FormLabel>
              <FormInput
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)} />
            </FormItem>
            <FormItem>
              <FormLabel>Senha:</FormLabel>
              <FormInput
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)} />
            </FormItem>
            <FormItem>
              <FormButton onClick={EfetuarLogin}>Entrar</FormButton>
            </FormItem>
            {erro && <ErrorMessage>{erro}</ErrorMessage>}
          </FormBox>
        </LoginBox>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
