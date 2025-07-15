import styled from "styled-components";

const ContainerHeader = styled.div`
    display: flex;
    padding: 0px 0px 0px 30px;
    background-color: var(--primary);
    width: 100%;
    height: 60px;
    border-bottom: 2px solid white;
`
const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    height: 100%;
    gap: 8px;
`
const ImgLogo = styled.img`
    width: 40px;
    height: auto;
`
const TextLogo = styled.h1 `
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
    font-size: 20px;
    color: white;
`
export const Header = () => {
   return (
   <ContainerHeader>
        <ContainerLogo>
            <ImgLogo src="../../assets/logo/logo.png"></ImgLogo>
            <TextLogo>Password Guard</TextLogo>
        </ContainerLogo>
    </ContainerHeader>
   ) 
}