import React, { useState } from 'react';
import Modal from 'react-modal';

import { FaRegTrashAlt } from 'react-icons/fa';

import './styles.css';

Modal.setAppElement('#root');

interface IModalProps {
  button: React.ReactNode;
  title: string;
  form?: React.ReactNode;
  action?: 'new' | 'edit' | 'delete';
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

  // const handleDeleteCard = () => {
  //   console.log('clicou');
  //   handleCloseModal();
  // };

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
        className={
          action === 'delete' ? 'modal-content-delete' : 'modal-content'
        }
      >
        {action === 'delete' ? (
          <div className="modal-header-delete">
            <h1>{title}</h1>
          </div>
        ) : (
          <div className="modal-header">
            <h2>{title}</h2>

            {action === 'edit' ? (
              <ModalPanel
                button={
                  <button
                  // onClick={handleDeleteCard}
                  >
                    <FaRegTrashAlt />
                  </button>
                }
                title="Excluir cartão?"
                action="delete"
              />
            ) : (
              <></>
            )}
          </div>
        )}

        {action === 'delete' ? (
          <>
            <div className="modal-button-delete">
              <button className="button-delete" onClick={handleCloseModal}>
                Cancelar
              </button>
              <button
                className="button-confirm-delete"
                onClick={handleCloseModal}
              >
                Excluir
              </button>
            </div>
          </>
        ) : (
          <>
            <hr className="divider" />

            {form}

            <div className="modal-button">
              <button onClick={handleCloseModal}>Cancelar</button>
              <button className="button-save" onClick={handleCloseModal}>
                Salvar
              </button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default ModalPanel;
