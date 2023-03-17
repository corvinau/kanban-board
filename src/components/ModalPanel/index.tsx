import React, { useState } from 'react';
import Modal from 'react-modal';

import './styles.css';

Modal.setAppElement('#root');

interface IModalProps {
  button: React.ReactNode;
  title: string;
  form: React.ReactNode;
}

const ModalPanel: React.FC<IModalProps> = ({ button, title, form }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <div role="button" onClick={handleOpenModal}>
        {button}
      </div>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={handleCloseModal}
        contentLabel={title}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h2>{title}</h2>
        <hr className="divider" />
        {form}

        <div className="modal-button">
          <button onClick={handleCloseModal}>Fechar</button>
          <button className="button-save" onClick={handleCloseModal}>
            Salvar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalPanel;
