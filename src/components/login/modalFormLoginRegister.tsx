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
export const ModalFormLoginRegiste = () => {
   return (
    <ContainerForm>
        <SubContainerForm>
            <TitleForm> Login </TitleForm>
            <InputForm></InputForm>
        </SubContainerForm>
        <SubContainerForm>
            <TitleForm> Email </TitleForm>
            <InputForm></InputForm>
        </SubContainerForm>
        <SubContainerForm>
            <TitleForm> Senha </TitleForm>
            <InputForm></InputForm>
        </SubContainerForm>
        <SubContainerForm>
            <TitleForm> Confirmar Senha </TitleForm>
            <InputForm></InputForm>
        </SubContainerForm>
        <RegisterButton> Registrar </RegisterButton>
    </ContainerForm>
   )
}