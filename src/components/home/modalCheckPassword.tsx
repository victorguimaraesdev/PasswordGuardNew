import { useState } from "react"
import { Modal } from "../../utils/modal"
import styled from "styled-components"
import axios from "axios"

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
const FormSubmite = styled.form`
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

interface ModalCheckPasswordProps {
    onClose: () => void
    setCheckPassword: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalCheckPassword:React.FC<ModalCheckPasswordProps> = ({onClose, setCheckPassword}) => {
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const token = localStorage.getItem('token')

        try {
            const response = await axios.post('http://localhost:8081/users/check', {
                password
            },
        {
            headers: {
                Authorization: ` Bearer ${token}`
            }
        })
            console.log(response.data)
            console.log(response)
            setCheckPassword(response.data)
        }
        catch (err : any) {
            console.log(err);
            alert(err.response?.data?.message || 'Erro ao confirmar senha')
        }
    }

    return (
        <Modal onClose={onClose}>
            <FormSubmite onSubmit={handleSubmit}>
            <SubContainerLogin>
                <IconInput src="../../assets/icon/password.png"></IconInput>
                <Input placeholder="Senha:" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </SubContainerLogin>
            <LoginButton type="submit">Confirmar senha</LoginButton>
            </FormSubmite>
        </Modal>
    )
}