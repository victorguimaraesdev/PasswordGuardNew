import { Modal } from "../home/modal"
import { ModalFormLoginRegister } from "./modalFormLoginRegister"



interface ModalLoginRegisterProps {
    onClose: () => void
}

export const ModalLoginRegister: React.FC<ModalLoginRegisterProps> = ({onClose}) => {
    return (
    <Modal onClose={onClose}>
        <ModalFormLoginRegister/>
    </Modal>
    )
}