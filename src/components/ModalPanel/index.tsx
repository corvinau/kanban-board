import React, { useState } from 'react';
import Modal from 'react-modal';

import { FaRegTrashAlt } from 'react-icons/fa';

import './styles.css';

Modal.setAppElement('#root');

interface IModalProps {
  button: React.ReactNode;
  title: string;
  form: React.ReactNode;
  action?: 'new' | 'edit';
}

const ModalPanel: React.FC<IModalProps> = ({
  button,
  title,
  form,
  action = 'new',
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div
        className="modal-call-button"
        role="button"
        onClick={handleOpenModal}
      >
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
        <div className="modal-header">
          <h2>{title}</h2>

          {action === 'edit' ? (
            <button onClick={handleCloseModal}>
              <FaRegTrashAlt />
            </button>
          ) : (
            <></>
          )}
        </div>

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
