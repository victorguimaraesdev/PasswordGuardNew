import { Modal } from "../home/modal"
import { ModalFormLoginRegister } from "./modalFormLoginRegister"



interface ModalLoginRegisterProps {
    onClose: () => void
    setMessage: React.Dispatch<React.SetStateAction<string | null>>
}

export const ModalLoginRegister: React.FC<ModalLoginRegisterProps> = ({onClose, setMessage}) => {
    return (
    <Modal onClose={onClose}>
        <ModalFormLoginRegister onClose={onClose} setMessage={setMessage} />
    </Modal>
    )
}