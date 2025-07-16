import styled from "styled-components";
import { ContainerFormLogin } from "./containerFormLogin";

const ContainerCentral = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: var(--primary);
`
const SubContainerLogin = styled.div`
    width: 400px;
    height: 500px;
    border-radius: 8px;
    background-color: var(--secondary);
`

export const ContainerLogin = () => {

    return (
        <ContainerCentral>
            <SubContainerLogin>
                <ContainerFormLogin/>
            </SubContainerLogin>
        </ContainerCentral>
    )
}