import React, { useState } from "react"
import { Modal } from "../../utils/modal"
import styled from "styled-components"
import axios from "axios"

const ContainerForm = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    height: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
    color: var(--secondary);
    font-size: 15px;
    border-bottom: 1px solid var(--secondary);
    box-shadow: none;
    background-color: transparent;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     &::placeholder {
        color: var(--secondary);
        font-size: 15px;
    }
`
const IconInput  = styled.img`
    width: 20px;
    height: auto;
`
const FormSubmite = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
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
const Img = styled.img`
    width: 100px;
    height: auto;
`

interface ModalCheckPasswordProps {
    onClose: () => void
    setCheckPassword: React.Dispatch<React.SetStateAction<string>>
    registerId: string
}

export const ModalCheckPassword:React.FC<ModalCheckPasswordProps> = ({onClose, setCheckPassword, registerId}) => {
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const token = localStorage.getItem('token')

        try {
            const response = await axios.post('https://passwordguardnew-backend-production.up.railway.app/users/check', {
                password,
                registerId
            },
        {
            headers: {
                Authorization: ` Bearer ${token}`
            }
        })
            console.log(response.data.password)
            setCheckPassword(response.data.password)
            onClose();
        }
        catch (err : any) {
            console.log(err);
            alert(err.response?.data?.message || 'Erro ao confirmar senha')
        }
    }

    return (
        <Modal onClose={onClose}>
            <ContainerForm>
            <FormSubmite onSubmit={handleSubmit}>
                    <Img src="/assets/icon/cyber.png"/>
                <SubContainerLogin>
                    <IconInput src="/assets/icon/padlock.png"></IconInput>
                    <Input placeholder="Senha:" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </SubContainerLogin>
                <LoginButton type="submit">Confirmar senha</LoginButton>
            </FormSubmite>
            </ContainerForm>
        </Modal>
    )
}