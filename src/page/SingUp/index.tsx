import React from "react";


import {  FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi'
import { Container, Content, Background } from "./styles";
import img_logo from "../../assets/logo.svg"
import Input from "../../components/input/index"
import Button from "../../components/button";
import { Form } from '@unform/web';

const SignUp: React.FC = () => {
    function handleSubmit(data:object):void {
        console.log(data);

    }

    return (<>
        <Container>
            <Background />
            <Content>
                <img src={img_logo} alt="GoBarber" />
                
                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>

                    <Input name="Nome" placeholder="Nome" icon={FiUser} />
                    <Input name="Email" placeholder="E-mail" icon={FiMail} />
                    <Input name="Senha" type="password" placeholder="Senha" icon={FiLock} />
                    <Button type="submit"> Cadastrar </Button>

                    
                </Form>
                <FiArrowLeft />
                <a href="CreateAccount">Voltar para logon</a>
            </Content>
        </Container>
    </>);
};

export default SignUp;