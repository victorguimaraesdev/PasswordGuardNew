import type { ReactNode } from "react";
import styled from "styled-components";

const ContainerMaster = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    background-color: var(--supp);
`
type MyComponent = {
    children: ReactNode;
}
export const ContainerCentral = ({children}:MyComponent) => {
    return <ContainerMaster>{children}</ContainerMaster>
}