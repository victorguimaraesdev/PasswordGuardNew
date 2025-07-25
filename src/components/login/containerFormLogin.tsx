import { useState } from "react";
import styled from "styled-components";
import { ModalLoginRegister } from "./modalLoginRegister";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContainerFormLoginMaster = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    height: 100%;
    gap: 10px;
`
const ImgLogo = styled.img`
    width: 60px;
    height: auto;
`
const SubContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 70px;
    gap: 5px;
`
const Title = styled.h3`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
    font-size: 25px;
    color: var(--primary);
` 
const Input = styled.input`
    padding: 5px;
    width: 70%;
    height: 30px;
    border-radius: 5px;
    background-color: rgba(209, 207, 207, 0.9);
    text-align: center;
    box-shadow: none;
    border: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
const SubContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;
    height: 80px;
    gap: 5px;
`
const Register = styled.h3`
    font-size: 15px;
    color: var(--primary);
    cursor: pointer;
`
const LoginButton = styled.button`
    width: 150px;
    height: 40px;
    background-color: var(--primary);
    color: var(--secondary);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 4px 3px 3px rgba(0, 0, 0, 0.2);
`
const FormSubmite = styled.form`
    width: 100%;
`

export const ContainerFormLogin = () => {
    const [showModalLoginRegister, setShowModalLoginRegister] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8081/users/log', {
                email,
                password
            })
            const { Token } = response.data;

            localStorage.setItem('Token', Token);
            navigate('/home')

        }
        catch (err: any) {
            console.log(err);
            alert(err.response?.data?.message || 'Erro ao fazer login')
        }
    }
    

    return (
        <ContainerFormLoginMaster>
           <ImgLogo src="../../assets/logo/logo.png"></ImgLogo>
           <FormSubmite onSubmit={handleSubmit}>
            <SubContainerLogin>
                <Title>Email</Title>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </SubContainerLogin>
            <SubContainerLogin>
                <Title>Senha</Title>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </SubContainerLogin>
            <SubContainerButton>
                <LoginButton type="submit">Login</LoginButton>
                <Register onClick={() => setShowModalLoginRegister(true)}>Criar conta</Register>
            </SubContainerButton>
           </FormSubmite>
           {showModalLoginRegister && <ModalLoginRegister onClose={() => setShowModalLoginRegister(false)}/>}
        </ContainerFormLoginMaster>
    )
}