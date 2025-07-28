import { Modal } from "../../utils/modal"
import styled from "styled-components"

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
const SubContainerForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 350px;
    height: 70px;
    gap: 5px;
`
const TitleForm = styled.h3`
    font-size: 20px;
    color: var(--secondary);
`
const Login = styled.h3`
     font-size: 20px;
    color: var(--secondary);
`
const Password = styled.h3`
     font-size: 20px;
    color: var(--secondary);
`

interface ModalRegisterProps{
     onClose: () => void
}
export const ModalCard: React.FC<ModalRegisterProps> = ({onClose} ) => {
    return (
       <Modal onClose={onClose}>
          <ContainerForm>
               <SubContainerForm>
                    <TitleForm>Login</TitleForm>
                    <Login>victor@exemplo</Login>
               </SubContainerForm>
               <SubContainerForm>
                    <TitleForm>Password</TitleForm>
                    <Password>123456131</Password>
               </SubContainerForm>
          </ContainerForm>
       </Modal>
    )
}