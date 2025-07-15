import styled from "styled-components";
import { useState } from "react";
import { ModalRegister } from "./modalRegister";
import { ModalCard } from "./madalCard";

const ContainerMaster = styled.div`
    display: flex;
    padding: 20px;
    width: 100%;
    height: 100vh;
    gap: 10px;
    background-color: #e4e4e4;
`
const ContainerAddLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 150px;
    width: 150px;
    box-shadow: 4px 3px 3px rgba(0, 0, 0, 0.2);
    cursor: pointer;
`
const IconAdd = styled.img`
    height: 70px;
    width: 70px;
`
const TextAdd = styled.h3`
    font-size: 15px;
    color: var(--primary);
    font-family: "Roboto", sans-serif;
`
const ContainerCard = styled.div`
    display: flex;
    width: 350px;
    height: 200px;
    position: relative;
    box-shadow: 4px 3px 3px rgba(0, 0, 0, 0.2);
    cursor: pointer;
`
const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    width: 100%;
    z-index: 2;
`
const TitleCard = styled.h3`
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    color: var(--primary);
    z-index: 2;
`
const Url = styled.img `
    width: 100%;
    height: 100%;
    z-index: 1;
`
export const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalCard, setShowModalCard] = useState(false);
    return (
    <ContainerMaster>
        <ContainerCard onClick={() => setShowModalCard(true)}>
            <Url src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"></Url>
            <ContainerTitle>
                <TitleCard>victor@exemplo.com</TitleCard>
            </ContainerTitle>
        </ContainerCard>
        <ContainerAddLogin onClick={() =>setShowModal(true)}>
            <IconAdd src="../../assets/icon/add.png"></IconAdd>
            <TextAdd>Novo Login</TextAdd>
        </ContainerAddLogin>
        {showModal && <ModalRegister onClose={()=> setShowModal(false)} />}
        {showModalCard && <ModalCard onClose={() => setShowModalCard(false)} />}
    </ContainerMaster>
    )
}