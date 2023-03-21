import { useState } from 'react';

export const useHookModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return {
    modalIsOpen,
    setIsOpen,
    handleOpenModal,
    handleCloseModal,
  };
};
