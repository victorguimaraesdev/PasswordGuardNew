import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ContainerMaster = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px 0px 0px 0px;
    height: 100vh;
    width: 350px;
    gap: 10px;
    background-color: var(--primary);
    border-right: 2px solid white;
    `
const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height:  50px;
    gap: 8px;   
    `
const ContainerOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 200px;
    margin-top: 20px;
    gap: 12px;
    /* background-color: red */
    `
const SubContainerOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 150px;
    color: var(--secondary);
    cursor: pointer;
    box-shadow: 4px 3px 3px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    gap: 15px;
`
const InsideOption = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 75%;
    height: 100%;  
    gap: 15px;
    border-radius: 10px;
`
const IconOption = styled.img`
    width: 30px;
    height: auto;
`
const TextOption = styled.h3`
    font-size: 15px;
    color: white;
    font-family: "Inter", sans-serif;
    font-weight: 300;
    `
const ImgLogo = styled.img`
    width: 30px;
    height: auto;
    `
const TextLogo = styled.h1 `
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
    font-size: 25px;
    color: white;
    `
const ContainerLogout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 50px;
    gap: 8px;   
    `
const SubContainerLogout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 50%;
    height: 50px;
    gap: 8px;   
    box-shadow: 4px 3px 3px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    cursor: pointer;
    `
const IconLogout = styled.img`
    width: 25px;
    height: auto;
    `
const TextLogout = styled.h3`
    font-size: 18px;
    color: white;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    `
const IconAvatar = styled.img`
    width: 65px;
    height: auto;
    `
const ContainerAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    border-radius: 50px;
    border: 2px solid white;
`


export const SideBar = () => {

    const [userInfo, setUserInfo] = useState<any>({});

    const FunctionLogout = () => {
        localStorage.clear()
        window.location.reload()
    }
    useEffect(() => {
        getUserInfo();
    }, [])

    const getUserInfo = async () => {

        const token = localStorage.getItem('token')

        const response = await axios.get('http://localhost:8081/users/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setUserInfo(response.data)
        console.log(response.data)
    }

    return (
        <ContainerMaster>
          <ContainerLogo>
            <ImgLogo src="../../assets/logo/logo.png"></ImgLogo>
            <TextLogo>Password Guard</TextLogo>
          </ContainerLogo>
          <ContainerAvatar>
            <IconAvatar src="../../assets/icon/login.png"></IconAvatar>
          </ContainerAvatar>
          <TextOption>Nome: {userInfo.usuario?.name}</TextOption>
          <TextOption>Email: {userInfo.usuario?.email}</TextOption>
          <ContainerOption>
            <SubContainerOption>
                <InsideOption>
                    <IconOption src="../../assets/icon/padlock.png"/>
                    <TextOption>Login</TextOption>
                </InsideOption>
            </SubContainerOption>
             <SubContainerOption>
                <InsideOption>
                    <IconOption src="../../assets/icon/key.png"/>
                    <TextOption>Chaves</TextOption>
                </InsideOption>
            </SubContainerOption>
             <SubContainerOption>
                <InsideOption>
                    <IconOption src="../../assets/icon/red.png"/>
                    <TextOption>Plano</TextOption>
                </InsideOption>
            </SubContainerOption>
          </ContainerOption>
          <ContainerLogout>
            <SubContainerLogout onClick={FunctionLogout}>
                <IconLogout src="../../assets/icon/logout.png"/>
                <TextLogout>Sair</TextLogout>
            </SubContainerLogout>
          </ContainerLogout>
        </ContainerMaster>
    )
}