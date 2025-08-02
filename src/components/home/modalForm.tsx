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

interface ModalFormProps {
    onRegisterSuccess: () => void
    onClose: () => void
}

export const ModalForm: React.FC<ModalFormProps> = ({ onRegisterSuccess, onClose }) => {
    const [dominio, setDominio] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [url, setUrl] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        try {

            if (!dominio || !email || !password) {
                alert('preencha todos os campos')
            }

            const token = localStorage.getItem('token')

            const response = await axios.post('https://passwordguardnew-backend-production.up.railway.app/registers/new', {
                dominio,
                email,
                password,
                url
            },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

            console.log(response)
            onRegisterSuccess();
            onClose();
        }
        catch(err : any) {
                console.log(err)
                alert(err.response?.data?.message || 'Erro ao registrar nova conta')
        }
    }
    return(
      <FormRegister onSubmit={handleSubmit}>
        <ContainerForm>
            <TitleForm>Registrar nova conta</TitleForm>
            <SubContainerForm>
                <InputForm type="text" placeholder="Dominio" value={dominio} onChange={(e) => setDominio(e.target.value)}/>
            </SubContainerForm>
            <SubContainerForm>
                <InputForm type="email" placeholder="E-mail:" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </SubContainerForm>
            <SubContainerForm>
                <InputForm type="password" placeholder="Senha:" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </SubContainerForm>
             <SubContainerForm>
                <InputForm type="text" placeholder="Url da imagem:" value={url} onChange={(e) => setUrl(e.target.value)}/>
            </SubContainerForm>
            <RegisterButton type="submit"> Registrar </RegisterButton>
        </ContainerForm>
      </FormRegister>
    )
}