import axios from "axios";
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
    margin-bottom: 10px;
`
const InputForm = styled.input`
    padding: 5px;
    width: 100%;
    height: 30px;
    background-color: transparent;
    box-shadow: none;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    &::placeholder {
        color: white;
    }
`
const RegisterButton = styled.button`
    width: 150px;
    height: 40px;
    background-color: var(--secondary);
    color: var(--primary);
    border: none;
    border-radius: 5px;
    margin-top: 15px;
    cursor: pointer;
    box-shadow: 4px 3px 3px rgba(0, 0, 0, 0.2);
`
const FormRegister = styled.form`
    width: 100%;
    height: 100%;
`
interface ModalFormLoginRegisterProps {
    onClose: () => void;
    setMessage: React.Dispatch<React.SetStateAction<string | null>>
}

export const ModalFormLoginRegister: React.FC<ModalFormLoginRegisterProps> = ({onClose, setMessage}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passowordConfirm, setPasswordConfirm] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password != passowordConfirm) {
           return alert('A senha e o confirmar senha precisam ser iguais.')
        }
        
        if (!name || !email || !password) {
            return alert ('Todos os campos devem ser prenchidos')
        }

        try {
            const response = await axios.post('http://localhost:8081/users/reg', {
                name,
                email,
                password
            })
            setMessage(response.data.message)  
        }
        catch (err: any) {
            console.log(err);
            alert(err.response?.data?.message || 'Erro ao se registrar')
        }
        onClose(); 
    }

   return (
    <FormRegister onSubmit={handleSubmit}> 
        <ContainerForm>
            <TitleForm>Crie uma nova conta</TitleForm>
            <SubContainerForm>
                <InputForm type="text" placeholder="Nome:" value={name} onChange={(e) => setName(e.target.value)}/>
            </SubContainerForm>
            <SubContainerForm>
                <InputForm type="email" placeholder="E-mail:" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </SubContainerForm>
            <SubContainerForm>
                <InputForm type="password" placeholder="Senha:" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </SubContainerForm>
            <SubContainerForm>
                <InputForm type="password" placeholder="Confirmar Senha:" value={passowordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
            </SubContainerForm>
            <RegisterButton type="submit"> Registrar </RegisterButton>
        </ContainerForm>
    </FormRegister>
   )
}