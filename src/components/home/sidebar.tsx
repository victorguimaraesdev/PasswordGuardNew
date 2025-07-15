import styled from "styled-components";

const ContainerMaster = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px 0px 0px 0px;
    height: 100vh;
    width: 250px;
    background-color: var(--primary);
    border-right: 2px solid white;
`
const ContainerOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 200px;
    color: var(--secondary);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    cursor: pointer;
`
const IconOption = styled.img`
    width: 30px;
    height: auto;
`
const TextOption = styled.h3`
    font-size: 20px;
`
export const SideBar = () => {
    return (
        <ContainerMaster>
            <ContainerOption>
                <IconOption src="../../assets/icon/padlock.png"/>
                <TextOption>Login</TextOption>
            </ContainerOption>
        </ContainerMaster>
    )
}