import React from "react";


import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Container, Content, Background } from "./styles";
import img_logo from "../../assets/logo.svg"
import Input from "../../components/input/index"
import Button from "../../components/button";


const SignIn: React.FC = () => (
    <>
    <Container>
        <Content>
                <img src={img_logo} alt="GoBarber" />
                
                <form>
                    <h1>Faça seu logon</h1>

                    <Input name="Email" placeholder="E-mail" icon={ FiMail } />
                    <Input name="Senha"type="password" placeholder="Senha" icon={FiLock}  />
                    <Button type="submit"> Entrar </Button>

                    <a href="forgot">Esqueci minha Senha</a>
                </form>
                    <FiLogIn/>
                    <a href="CreateAccount">Criar Conta</a>
        </Content>
        <Background/>
    </Container>
</>
);

export default SignIn;