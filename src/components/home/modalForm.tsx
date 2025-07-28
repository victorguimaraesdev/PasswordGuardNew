import styled from "styled-components";
import { formLogin } from "../../utils/infoFormLogin";

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
const PasswordButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: var(--supp2);
    color: var(--secondary);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
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
export const ModalForm = () => {
    return(
        <ContainerForm>
            {formLogin.map((item, i) => (
            <SubContainerForm key={i}>
                <TitleForm>{item.title}</TitleForm>
                <InputForm key={i} placeholder={item.title.toLocaleLowerCase()}></InputForm>
            </SubContainerForm>  
            ))} 
            <PasswordButton>Gerar Senha</PasswordButton>
            <RegisterButton>Registrar</RegisterButton>
        </ContainerForm>
    )
}