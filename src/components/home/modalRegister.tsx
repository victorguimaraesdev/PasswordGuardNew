import { Modal } from "../../utils/modal"
import { ModalForm } from "./modalForm"

interface ModalRegisterProps{
     onClose: () => void
     onRegisterSuccess: () => void
}
export const ModalRegister: React.FC<ModalRegisterProps> = ({onClose, onRegisterSuccess} ) => {
    return (
       <Modal onClose={onClose}>
            <ModalForm onRegisterSuccess={onRegisterSuccess} />
       </Modal>
    )
}