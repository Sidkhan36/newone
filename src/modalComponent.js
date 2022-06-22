import React from "react"
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const ModalComponent = () => {
    const [modalOpen, setModalOpen] = React.useState(false);
    function openModal() {
        setModalOpen(true);
    }



    function closeModal() {
        setModalOpen(false);
    }
return(
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </div>
)
}
export default  ModalComponent