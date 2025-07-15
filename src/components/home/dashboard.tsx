import styled from "styled-components";
import { Modal } from "./modal";
import { useState } from "react";
import { CardLogin } from "./cardLogin";

const ContainerMaster = styled.div`
    display: flex;
    padding: 20px;
    width: 100%;
    height: 100vh;
    gap: 10px;
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
    font-size: 20px;
    color: var(--primary);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
export const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    return (
    <ContainerMaster>
        <CardLogin></CardLogin>
        <ContainerAddLogin onClick={() =>setShowModal(true)}>
            <IconAdd src="../../assets/icon/add.png"></IconAdd>
            <TextAdd>Novo Login</TextAdd>
        </ContainerAddLogin>
        {showModal && <Modal onClose={()=> setShowModal(false)}/>}
    </ContainerMaster>
    )
}