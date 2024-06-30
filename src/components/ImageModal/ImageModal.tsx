
import Modal from 'react-modal';
import css from "./ImageModal.module.css";

Modal.setAppElement('#root');

interface ImageModalProps {
  openModal: boolean;
  closeModal: () => void;
  modalImage: string;
}
  
export default function ImageModal({ openModal, closeModal, modalImage}: ImageModalProps) {
   return (
      <Modal 
        className={css.modal}
        overlayClassName={css.overlay}
        isOpen={openModal}
        onRequestClose={closeModal}
        contentLabel="Image Big siza"
      >
       <img className={css.modalImg} src={modalImage} alt="regular" />
      </Modal>
  );
} 

  
  