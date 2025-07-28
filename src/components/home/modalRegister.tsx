import { Modal } from "../../utils/modal"
import { ModalForm } from "./modalForm"

interface ModalRegisterProps{
     onClose: () => void
}
export const ModalRegister: React.FC<ModalRegisterProps> = ({onClose} ) => {
    return (
       <Modal onClose={onClose}>
            <ModalForm />
       </Modal>
    )
}