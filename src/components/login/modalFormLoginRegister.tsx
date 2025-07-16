import { useState } from "react";
import styled from "styled-components";

const ContainerForm = styled.div `
    display:flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    height: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const SubContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 70px;
    gap: 5px;
`
const TitleForm = styled.h3`
    font-size: 20px;
    color: var(--secondary);
`
const InputForm = styled.input`
    padding: 5px;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    background-color: rgba(247, 246, 246, 0.9);
    box-shadow: none;
    border: none;
`
const RegisterButton = styled.button`
    width: 150px;
    height: 40px;
    background-color: var(--secondary);
    color: var(--supp2);
    border: none;
    border-radius: 5px;
    margin-top: 15px;
    cursor: pointer;
    box-shadow: 4px 3px 3px rgba(0, 0, 0, 0.2);
`
const FormRegister = styled.form`
    width: 100%;
`
export const ModalFormLoginRegister = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passowodConfirm, setPasswordConfirm] = useState('')

    const handleSubmit = () => {
        if (password != passowodConfirm) {
            alert('A senha e o confirmar senha precisam ser iguais.')
        }
        else {
            return;
        }
    }

   return (
    <ContainerForm>
        <FormRegister onSubmit={handleSubmit}> 
            <SubContainerForm>
                <TitleForm> Nome </TitleForm>
                <InputForm type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </SubContainerForm>
            <SubContainerForm>
                <TitleForm> Email </TitleForm>
                <InputForm type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </SubContainerForm>
            <SubContainerForm>
                <TitleForm> Senha </TitleForm>
                <InputForm type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </SubContainerForm>
            <SubContainerForm>
                <TitleForm> Confirmar Senha </TitleForm>
                <InputForm type="password" value={passowodConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
            </SubContainerForm>
            <RegisterButton type="submit"> Registrar </RegisterButton>
        </FormRegister>
    </ContainerForm>
   )
}