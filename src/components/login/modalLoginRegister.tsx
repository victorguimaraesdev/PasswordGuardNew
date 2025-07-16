import { Modal } from "../home/modal"
import { ModalFormLoginRegiste } from "./modalFormLoginRegister"



interface ModalLoginRegisterProps {
    onClose: () => void
}

export const ModalLoginRegister: React.FC<ModalLoginRegisterProps> = ({onClose}) => {
    return (
    <Modal onClose={onClose}>
        <ModalFormLoginRegiste/>
    </Modal>
    )
}