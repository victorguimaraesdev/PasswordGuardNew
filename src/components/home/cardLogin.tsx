import styled from "styled-components";

const ContainerCard = styled.div`
    display: flex;
    width: 350px;
    height: 200px;
    position: relative;
    box-shadow: 4px 3px 3px rgba(0, 0, 0, 0.2);
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
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: var(--primary);
    z-index: 2;
`
const Url = styled.img `
    width: 100%;
    height: 100%;
    z-index: 1;
`
export const CardLogin = () => {
    return(
        <ContainerCard>
            <Url src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"></Url>
            <ContainerTitle>
                <TitleCard>victor@exemplo.com</TitleCard>
            </ContainerTitle>
        </ContainerCard>
    )
}