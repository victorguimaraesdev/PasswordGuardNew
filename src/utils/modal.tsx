import styled from "styled-components";

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ContainerModal = styled.div`
  padding: 20px;
  position: relative;
  width: 400px;
  height: 400px;
  background-color: rgba(78, 148, 228, 0.8);
  border-radius: 20px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: var(--secondary);
`;

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = (modalProps) => {

    return (
        <Overlay>
            <ContainerModal>
                <CloseButton onClick={modalProps.onClose}>X</CloseButton>
                {modalProps.children}
            </ContainerModal>
        </Overlay>
    )
}