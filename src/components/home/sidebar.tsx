import styled from "styled-components";

const ContainerMaster = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px 0px 0px 0px;
    height: 100vh;
    width: 350px;
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
    flex-direction: column;
    width: 100%;
    height: 500px;
    margin-top: 20px;
    gap: 10px;
    `
const SubContainerOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 200px;
    color: var(--secondary);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    cursor: pointer;
    gap: 8px;
`
const IconOption = styled.img`
    width: 30px;
    height: auto;
`
const TextOption = styled.h3`
    font-size: 20px;
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

export const SideBar = () => {
    return (
        <ContainerMaster>
          <ContainerLogo>
            <ImgLogo src="../../assets/logo/logo.png"></ImgLogo>
            <TextLogo>Password Guard</TextLogo>
          </ContainerLogo>
          <ContainerOption>
            <SubContainerOption>
                <IconOption src="../../assets/icon/padlock.png"/>
                <TextOption>Login</TextOption>
            </SubContainerOption>
             <SubContainerOption>
                <IconOption src="../../assets/icon/key.png"/>
                <TextOption>Chaves</TextOption>
            </SubContainerOption>
             <SubContainerOption>
                <IconOption src="../../assets/icon/red.png"/>
                <TextOption>Plano</TextOption>
            </SubContainerOption>
          </ContainerOption>
        </ContainerMaster>
    )
}