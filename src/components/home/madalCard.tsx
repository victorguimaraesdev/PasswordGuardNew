import { Modal } from "./modal"
import { ModalForm } from "./modalForm"

interface ModalRegisterProps{
     onClose: () => void
}
export const ModalCard: React.FC<ModalRegisterProps> = ({onClose} ) => {
    return (
       <Modal onClose={onClose}>
            <ModalForm />
       </Modal>
    )
}