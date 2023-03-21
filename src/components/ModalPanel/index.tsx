import React from 'react';
import Modal from 'react-modal';

import { FaTimes } from 'react-icons/fa';

import { useHookModal } from '../../hooks/useHookModal';

import './styles.css';

Modal.setAppElement('#root');

interface IModalProps {
  button: React.ReactNode;
  title: string;
  form?: React.ReactNode;
  action?: 'new' | 'edit';
}

const ModalPanel: React.FC<IModalProps> = ({
  button,
  title,
  form,
  action = 'new',
}) => {
  const { modalIsOpen, handleOpenModal, handleCloseModal } = useHookModal();

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
        <div role="button" className="modal-close" onClick={handleCloseModal}>
          <div className="button-icon">
            <FaTimes />
          </div>
        </div>

        <div className="modal-header">
          <h2>{title}</h2>
        </div>

        <>
          <hr className="divider" />

          {form}
        </>
      </Modal>
    </div>
  );
};

export default ModalPanel;
