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
    font-family: "Inter", sans-serif;
    font-weight: 200;
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
const Login = styled.h3`
    font-size: 20px;
    color: var(--secondary);
    font-family: "Inter", sans-serif;
    font-weight: 200;
`
const Password = styled.h3`
     font-size: 20px;
    color: var(--secondary);
    font-family: "Inter", sans-serif;
    font-weight: 200;
`
const ImgLogin = styled.img`
    width: 60px;
    height: auto;
`

interface ModalRegisterProps{
     onClose: () => void
     register: any
}
export const ModalCard: React.FC<ModalRegisterProps> = ({onClose, register} ) => {
    return (
       <Modal onClose={onClose}>
          <ContainerForm>
               <ImgLogin src="/assets/icon/login.png" />
               <SubContainerForm>
                    <Login>Login: {register.email}</Login>
                     <Password>Passoword: {register.password}</Password>
               </SubContainerForm>
          </ContainerForm>
       </Modal>
    )
}