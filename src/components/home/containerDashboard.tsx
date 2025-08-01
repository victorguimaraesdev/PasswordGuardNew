import styled from "styled-components";
import { useEffect, useState } from "react";
import { ModalRegister } from "./modalRegister";
import { ModalCard } from "./modalCard";
import axios from "axios";
import { ModalCheckPassword } from "./modalCheckPassword";

const ContainerMaster = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    width: 100%;
    height: 100vh;
    gap: 10px;
    background-color: #dbe4fc;
    overflow-y: auto;
    z-index: 0;
    
`
const ContainerAddLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 120px;
    width: 120px;
    box-shadow: 4px 3px 3px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    z-index: 10;
    background-color: white;
`
const IconAdd = styled.img`
    height: 60px;
    width: 60px;
    z-index: 10;
`
const TextAdd = styled.h3`
    font-size: 15px;
    color: var(--primary);
    font-family: "Inter", sans-serif;
    font-weight: 500;
`
const ContainerCard = styled.div`
    display: flex;
    width: 330px;
    height: 200px;
    position: relative;
    box-shadow: 4px 3px 3px rgba(0, 0, 0, 0.2);
    cursor: pointer;
`
const Trash = styled.img`
    width: 25px;
    height: auto;
`
const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    flex-direction: row;
    bottom: 10px;
    width: 100%;
    z-index: 2;
    gap: 10px;
`
const TitleCard = styled.h3`
    font-size: 20px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
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
    const [registros, setRegistros] = useState<any[]>([]);
    const [selectedRegister, setSelectedRegister] = useState<any | null>(null);
    const [checkPassword, setCheckPassword] = useState(false)
    const [showModalCheckPassword, setShowModalCheckPassword] = useState(false);
    useEffect(()=> {
        getRegisters();
    },[])


    const getRegisters = async () => {
        const token = localStorage.getItem('token')
        try {
            const response = await axios.get('http://localhost:8081/registers/all', {
                headers: {
                    Authorization:  `Bearer ${token}`
                }
            })
            setRegistros(response.data)
            console.log(response.data)
        }
        catch (err : any) {
            console.log(err);
            alert(err.response?.data?.message || 'Erro ao pegar todas as informações')
        }
    }
    
    const deleteRegister = async (registerId: number) => {
        try {

            const token = localStorage.getItem('token');
            
            if (!token) {
                throw new Error('Token ausente')
            }

            const response = await axios.delete(`http://localhost:8081/registers/delete/${registerId}`, {
               headers: {
                    Authorization:  `Bearer ${token}`
                }
            });

            console.log(response)
            getRegisters();
        }
        catch (err : any) {
           console.log(err);
            alert(err.response?.data?.message || 'Erro ao deletar card')
        }
    }
    
    return (
    <ContainerMaster>
        
        {registros.map((registro) => (
            <ContainerCard key={registro.id} onClick={() => {
                setShowModalCheckPassword(true)
                setShowModalCard(true)
                setSelectedRegister(registro);
             }}>
                <Url src={registro.iconUrl || "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"}/>
                <ContainerTitle>
                    <TitleCard>{registro.dominio}</TitleCard>
                    <Trash src="assets/icon/trash.png" key={registro.id} onClick={
                        (e) => {e.stopPropagation();
                        deleteRegister(registro.id); }}/>
                </ContainerTitle>
            </ContainerCard>
        ))}

        <ContainerAddLogin onClick={() => setShowModal(true)}>
             <IconAdd src="../../assets/icon/add.png" />
            <TextAdd>Novo Login</TextAdd>
        </ContainerAddLogin>

        {showModal && <ModalRegister onClose={() => setShowModal(false)} onRegisterSuccess={() => { getRegisters(); }} />}
        {showModalCheckPassword && <ModalCheckPassword onClose={() => setShowModalCheckPassword(false)} setCheckPassword={setCheckPassword}/>}
        {showModalCard && selectedRegister && checkPassword &&(
            <ModalCard onClose={() => {
                setShowModalCard(false);
                setCheckPassword(false);
            }}
            register={selectedRegister} />
    )}

    </ContainerMaster>
    )
}