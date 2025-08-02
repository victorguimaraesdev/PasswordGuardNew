import styled from "styled-components";
import { ContainerFormLogin } from "./containerFormLogin";

const ContainerCentral = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    background-color: var(--primary);
`
const SubContainerLogin = styled.div`
    width: 50%;
    height: 100%;
    border-radius: 8px;
    background-color: var(--secondary);
`
const SubContainerExtra = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    border-radius: 8px;
    background-color: var(--primary);
`
const SubContainerBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 200px;
    height: 200px;
    border-radius: 8px;
    text-align: center;
`

const Img = styled.img`
    width: 100px;
    height: auto;
`
const Text = styled.h1`
    font-size: 25px;
    color: var(--secondary);
    margin-top: 10px;
`

export const ContainerLogin = () => {

    return (
        <ContainerCentral>
            <SubContainerLogin>
                <ContainerFormLogin/>
            </SubContainerLogin>
            <SubContainerExtra>
                <SubContainerBanner>
               <Img src="/assets/icon/cyber.png"/>
               <Text>Seu app de cybersegurança!</Text>
                </SubContainerBanner>
            </SubContainerExtra>
        </ContainerCentral>
    )
}