import styled from "styled-components";

const ContainerFormLoginMaster = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    height: 100%;
`
const ImgLogo = styled.img`
    width: 60px;
    height: auto;
`
const TextLogo = styled.h1 `
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
    font-size: 25px;
    color: var(--primary);
`
export const ContainerFormLogin = () => {
    return (
        <ContainerFormLoginMaster>
           <ImgLogo src="../../assets/logo/logo.png"></ImgLogo>
           <TextLogo>PASSWORD GUARD</TextLogo>
        </ContainerFormLoginMaster>
    )
}