import { useState } from "react";
import styled from "styled-components";
import { ModalLoginRegister } from "./modalRegister";
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
    flex-direction: row;
    width: 100%;
    height: 70px;
    gap: 5px;
`
const Input = styled.input`
    display: flex;  
    padding: 5px;
    width: 50%;
    height: 30px;
    border: none;
    color: var(--primary);
    font-size: 15px;
    border-bottom: 1px solid var(--primary);
    box-shadow: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     &::placeholder {
        color: var(--primary);
        font-size: 15px;
    }
`
const IconInput  = styled.img`
    width: 20px;
    height: auto;
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
    const [message, setMessage] = useState<string | null> (null)

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8081/users/log', {
                email,
                password
            })
            const { token } = response.data;

            localStorage.setItem('token', token);
            navigate('/home')

        }
        catch (err: any) {
            console.log(err);
            alert(err.response?.data?.message || 'Erro ao fazer login')
        }
    }
    

    return (
        <ContainerFormLoginMaster>
           <ImgLogo src="assets/logo/logo.png"></ImgLogo>
           <FormSubmite onSubmit={handleSubmit}>
            <SubContainerLogin>
                <IconInput src="assets/icon/email.png"></IconInput>
                <Input placeholder="E-mail:" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </SubContainerLogin>
            <SubContainerLogin>
                <IconInput src="assets/icon/password.png"></IconInput>
                <Input placeholder="Senha:" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </SubContainerLogin>
            <SubContainerButton>
                <LoginButton type="submit">Login</LoginButton>
                <Register onClick={() => setShowModalLoginRegister(true)}>Criar conta</Register>
            </SubContainerButton>
           </FormSubmite>
           {message && <p>{message}</p>}
           {showModalLoginRegister && <ModalLoginRegister onClose={() => setShowModalLoginRegister(false)} setMessage={setMessage}/>}
        </ContainerFormLoginMaster>
    )
}